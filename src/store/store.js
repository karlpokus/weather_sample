import request from './request'

var store = {
  state: {
    cities: [],
    _id: 1
  },
  mutations: {
    removeCity(state, payload) {
      state.cities.splice(payload.index, 1);
    },
    addCity(state, payload) {
      payload.id = state._id++;
      state.cities.unshift(payload);
    }
  },
  actions: {
    removeCity({commit}, payload) {
      commit('removeCity', payload);
    },
    addCity({commit}, payload) {
      return new Promise((resolve, reject) => {
        request(payload.city)
          .then((weather) => {
            commit('addCity', weather);
          })
          .then(resolve)
          .catch(reject);
      });
    }
  }
};

export default store;
