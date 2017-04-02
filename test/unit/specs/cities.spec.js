// fix for -> [vuex] vuex requires a Promise polyfill in this browser.
// https://github.com/vuejs-templates/webpack/issues/474
import 'es6-promise/auto'

import Vue from 'vue'
import Vuex from 'vuex'
import cities from '@/components/cities'
import store from '@/store/store'

[
  {id:1, city: 'Amsterdam, NL', icon: 'R', color: '#A4E4F3', temp: 4},
  {id:2, city: 'London, GB', icon: 'B', color:'#EB9861', temp: 12},
  {id:3, city: 'Stockholm, SE', icon: 'E', color:'#36acc0', temp: 3},
  {id:4, city: 'Moscow, RU', icon: 'H', color:'#E4B162', temp: -4}
].forEach(function(city){
  store.state.cities.push(city);
});

Vue.use(Vuex)

describe('cities.vue', () => {

  var Constructor = Vue.extend(cities),
      vm = new Constructor({
        store: new Vuex.Store(store)
      }).$mount();

  it('should initially contain 4 cities', () => {
    expect(vm.$el.querySelectorAll('.city').length)
      .to.equal(4)
  })

  it('should remove a city on .removeCity', done => {
    vm.removeCity(0);

    Vue.nextTick(() => {
      setTimeout(function(){
        expect(vm.$el.querySelectorAll('.city').length)
          .to.equal(3);

        done();
      }, 1800);
    });
  });
})
