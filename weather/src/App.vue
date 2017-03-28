<template>
  <div id="app">
    <inputbox></inputbox>
    <cities></cities>
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

<style>
/* global css for the time being*/
#inputbox, .city {
  padding:20px;
}
#inputbox {
  border:1px solid black;
  margin:10px auto;
  max-width:500px;
}
#inputbox p {
  text-align:center;
}
#inputbox input {
  width:100%;
  padding:10px;
  box-sizing:border-box;
}
.cities {
  list-style-type:none;
  padding:0;
  margin:10px auto;
  max-width:750px;
}
.city {}
@media (min-width: 768px ) {
  .city {
    display:inline-block;
  }
}
</style>