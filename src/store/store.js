import request from './request'

var store = {
  state: {
    cities: [],
    _id: 1
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
