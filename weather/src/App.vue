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

<style>
/* global css for the time being*/
@import url('https://fonts.googleapis.com/css?family=Lato:400,700|Pacifico');
@font-face {
  font-family: "MeteoconsRegular";
  src: url('./assets/fonts/meteocons-webfont.eot');
  src: url('./assets/fonts/meteocons-webfont.woff') format('woff'),
       url('./assets/fonts/meteocons-webfont.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}
body {
  margin:0;
  background:url('./assets/img/doctrin_app_bg.png');
  background-repeat: repeat-x;
}
[data-icon]:before {
  font-family: 'MeteoconsRegular';
	content: attr(data-icon);
}
#inputbox {
  margin:0 auto;
  padding:10px 20px;
  max-width:500px;
  background:rgba(255, 255, 255, .6);
}
#inputbox .title {
  font-family: 'Pacifico', cursive;
  text-align:center;
  margin:0 0 10px 0;
}
#inputbox input {
  font-family: 'Lato', sans-serif;
  width:100%;
  padding:10px;
  box-sizing:border-box;
}
.cities {
  font-family: 'Lato', sans-serif;
  list-style-type:none;
  padding:20px;
  margin:0 auto;
  max-width:750px;
}
.city {
  color:#fff;
  position:relative;
  margin:0 0 10px 0;
}
.city .city-body {
  padding:10px;
}
.city .weather-icon {
  position:absolute;
  font-size:64px;
}
.city .remove-btn {
  font-size:20px;
  padding:0 4px 3px 4px;
  line-height:80%;
  border-radius:50%;
  background:#eee;
  position:absolute;
  right:10px;
  -webkit-transition:-webkit-transform .8s ease-in-out;
  transition:transform .8s ease-in-out;
}
.city .remove-btn:hover {
  cursor:pointer;
  -webkit-transform: rotate(360deg);
  transform: rotate(360deg);
}
.city .temp {
  font-size:64px;
  font-weight:400;
  margin:0;
  padding:0 0 0 70px;
  line-height:70%;
  text-align:center;
}
.city .temp .degrees {
  font-size:32px;
  margin-left:-10px;
  vertical-align:text-top;
}
.city .cityname {
  font-size:14px;
  font-weight:700;
  margin:0;
  padding:20px 0 0 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.logo {
  display:block;
  margin:20px auto 0 auto;
}
@media (min-width: 460px ) {
  .city {
    display:inline-block;
    width:47%;
    margin:0 10px 10px 0;
  }
  .city .temp {
    font-size:32px;
    padding:10px 0 10px 70px;
  }
  .city .temp .degrees {
    font-size:16px;
    margin:0;
  }
  .city .cityname {
    padding:0 0 0 70px;
  }
}
@media (min-width: 768px ) {
  .city {
    width:31%;
  }
  #inputbox {
    margin:150px auto 50px auto;
  }
  .logo {
    position:absolute;
    top:20px;
    left:0;
    right:0;
    /*margin: 0 auto;*/
  }
}
</style>