<template>
  <div id="inputbox">
    <p>How's the weather in..</p>
    <input v-model="city" @keyup.enter="submit" placeholder="city">
    <feedback :msg="msg"></feedback>
  </div>
</template>

<script>
import feedback from './feedback'

export default {
  components: {
    feedback: feedback
  },
  data: function() {
    return {
      msg: '',
      city: ''
    };
  },
  methods: {
    submit: function(e) { // onSubmit
      function done() {
        this.msg = '';
      }
      
      this.msg = 'Searching..'
      this.$store.dispatch({
        type: 'addCity',
        city: this.city,
        cb: done.bind(this)
      });
      this.city = '';
    }
  }
}
</script>