import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

var store = new Vuex.Store({
  state: {
    cities: [ // some temp data
      {city: 'Amsterdam', icon: 'foo', temp: 4},
      {city: 'London', icon: 'foo', temp: 12}
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
      
      function postCity(city, cb) {
        var http = new XMLHttpRequest();
        http.open('POST', 'api/test/');
        
        http.onreadystatechange = function() {
          if (http.readyState == 4 && http.status == 200) {
            cb(null, JSON.parse(http.responseText));
          }
        }
        http.send(city);
      }
      
      function doCommit(err, data) {
        // todo: check err
        
        context.commit('addCity', {
          city: payload.city,
          icon: 'randomIcon',
          temp: data.temp
        });
        payload.cb();
      }
      
      postCity(payload.city, doCommit);
    }
  }
});

export default store;