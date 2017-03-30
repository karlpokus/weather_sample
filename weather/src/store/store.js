import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

var store = new Vuex.Store({
  state: {
    cities: [ // some temp data
      {city: 'Amsterdam, Holland', icon: 'R', color: '#A4E4F3', temp: 4},
      {city: 'London, England', icon: 'B', color:'#EB9861', temp: 12},
      {city: 'Stockholm, Sweden', icon: 'E', color:'#36acc0', temp: 3},
      {city: 'Moscow, the great Russian Federation', icon: 'H', color:'#E4B162', temp: -4}
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
      var weatherMap = {
        "Clouds": {
          icon: "H",
          color: "#E4B162" // yellow
        },
        "Clear": {
          icon: "B",
          color: "#EB9861" // red
        },
        "Rain": {
          icon: "R",
          color: "#A4E4F3" // blue
        },
        "Mist": {
          icon: "E",
          color: "#36acc0" // dark blue
        }
      };
      
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
          icon: weatherMap[weather.weather[0].main]? weatherMap[weather.weather[0].main].icon: 'M',
          color: weatherMap[weather.weather[0].main]? weatherMap[weather.weather[0].main].color: '#000',
          temp: Math.floor(weather.main.temp)
        });
        payload.cb(null);
      }
      
      POST(payload.city, doCommit);
    }
  }
});

export default store;