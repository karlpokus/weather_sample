import Vue from 'vue'
import inputbox from '@/components/inputbox'

describe('inputbox.vue', () => {

  var Constructor = Vue.extend(inputbox),
      vm = new Constructor().$mount();

  it('should render initial title', () => {
    expect(vm.$el.querySelector('.title').textContent)
      .to.equal("How's the weather in..");
  })

  it('should update title on msg', done => {
    var msg = 'Searching..';
    vm.msg = msg;

    Vue.nextTick(() => {
      expect(vm.$el.querySelector('.title').textContent)
        .to.equal(msg);

      done();
    })
  })
})
