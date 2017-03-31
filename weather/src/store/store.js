import request from './request'

var store = {
  state: {
    cities: [ // temp data
      {id:1, city: 'Amsterdam, NL', icon: 'R', color: '#A4E4F3', temp: 4},
      {id:2, city: 'London, GB', icon: 'B', color:'#EB9861', temp: 12},
      {id:3, city: 'Stockholm, SE', icon: 'E', color:'#36acc0', temp: 3},
      {id:4, city: 'Moscow, RU', icon: 'H', color:'#E4B162', temp: -4}
    ],
    _id: 5
  },
  mutations: {
    removeCity: function(state, payload) {
      state.cities.splice(payload.index, 1);
    },
    addCity: function(state, payload) {
      payload.id = state._id++;
      state.cities.unshift(payload);
    }
  },
  actions: {
    removeCity: function(context, payload) {
      context.commit('removeCity', payload);
    },
    addCity: function(context, payload) {
      function doCommit(err, weather) {
        if (err) return payload.cb(err);
        
        context.commit('addCity', weather);
        payload.cb(null);
      }
      
      request(payload.city, doCommit);
    }
  }
};

export default store;