<template>
  <div id="inputbox">
    <p class="title">{{msg}}</p>
    <input v-model="city" @keyup.enter="submit" placeholder="Location">
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      msg: "How's the weather in..",
      city: ''
    };
  },
  methods: {
    submit: function(e) {
      
      function resetUI() {
        this.msg = "How's the weather in..";
        this.city = '';
      }
    
      function done(str) {
        if (!str) {
          resetUI.call(this);
          
        } else {
          this.msg = str;
          setTimeout(resetUI.bind(this), 2500);
        }
      }
      
      this.msg = 'Searching..'
      this.$store.dispatch({
        type: 'addCity',
        city: this.city,
        cb: done.bind(this)
      });
    }
  }
}
</script>

<style>
#inputbox {
  margin:0 auto;
  padding:10px 20px;
  max-width:500px;
  background:rgba(255, 255, 255, .4);
}
#inputbox .title {
  font-family: 'Pacifico', cursive;
  text-align:center;
  color:#444;
  margin:0 0 10px 0;
}
#inputbox input {
  font-family: 'Lato', sans-serif;
  font-weight:700;
  width:100%;
  padding:10px;
  box-sizing:border-box;
  border:none;
}
</style>