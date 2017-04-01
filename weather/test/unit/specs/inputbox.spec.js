import Vue from 'vue'
import inputbox from '@/components/inputbox'

describe('inputbox.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(inputbox)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.title').textContent)
      .to.equal("How's the weather in..")
  })
})
