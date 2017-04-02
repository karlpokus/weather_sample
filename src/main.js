import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import store from './store/store'

Vue.use(Vuex)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store: new Vuex.Store(store),
  template: '<App/>',
  components: { App }
})
