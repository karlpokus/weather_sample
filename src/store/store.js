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
      return new Promise((resolve, reject) => {
        request(payload.city)
          .then((weather) => {
            context.commit('addCity', weather);
          })
          .then(resolve)
          .catch(reject);
      });
    }
  }
};

export default store;
