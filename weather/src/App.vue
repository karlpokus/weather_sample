<template>
  <div id="app">
    <inputbox></inputbox>
    <cities></cities>
    <img class="logo" src="./assets/img/doctrin_vinnovera_logo.png" alt="Vinnovera-logo"/>
  </div>
</template>

<script>
import inputbox from './components/inputbox'
import cities from './components/cities'

export default {
  name: 'app',
  components: {
    inputbox: inputbox,
    cities: cities
  }
}
</script>

<style src="./assets/css/fonts.css"></style>

<style>
html {
  height:100%;
}
body {
  margin:0;
  background: #EAEFD8;
  background: linear-gradient(to bottom right, #F7F4D6, #EAEFD8,#AED6E1);
}
.logo {
  display:block;
  margin:20px auto 0 auto;
}
</style>