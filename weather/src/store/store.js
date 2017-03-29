import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

var store = new Vuex.Store({
  state: {
    cities: [ // some temp data
      {city: 'Amsterdam', icon: 'B', temp: 4},
      {city: 'London', icon: 'O', temp: 12}
    ]
  },
  mutations: {
    removeCity: function(state, payload) {
      state.cities.splice(payload.index, 1);
    },
    addCity: function(state, payload) {
      state.cities.push(payload);
    }
  },
  actions: {
    removeCity: function(context, payload) {
      context.commit('removeCity', payload);
    },
    addCity: function(context, payload) {
      
      function POST(city, cb) {
        var http = new XMLHttpRequest();
        http.open('POST', 'api/weather/');
        http.onerror = cb.bind(null, 'api call failure');
        
        http.onreadystatechange = function() {
          if (http.readyState == 4) {
            
            if (http.status == 200) {
              cb(null, JSON.parse(http.responseText));
              
            } else if (http.status == 404) {
              cb(city + ' not found');
              
            } else {
              cb('Server failure');
            }
          }
        }
        http.send(JSON.stringify({city: city}));
      }
      
      function doCommit(err, weather) {
        if (err) return payload.cb(err);
        
        context.commit('addCity', {
          city: weather.name,
          icon: weather.weather.icon,
          temp: weather.main.temp
        });
        payload.cb(null);
      }
      
      POST(payload.city, doCommit);
    }
  }
});

export default store;