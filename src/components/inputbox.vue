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
      msg: '',
      city: ''
    };
  },
  created: function() {
    this.resetUI();
  },
  methods: {
    resetUI: function() {
      this.msg = "How's the weather in..";
      this.city = '';
    },
    submit: function(e) {
      this.msg = 'Searching..'
      
      this.$store
        .dispatch({
          type: 'addCity',
          city: this.city,
        })
        .then(this.resetUI.bind(this))
        .catch((err) => {
          this.msg = err;
          setTimeout(this.resetUI.bind(this), 2500);
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