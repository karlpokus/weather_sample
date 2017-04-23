<template>
  <transition-group tag="ul" class="cities" name="fade" appear>
    <li class="city" v-for="(city, index) in cities" :key="city.id">
      <div class="city-body" :style="{background:city.color}">
        <span class="weather-icon" :data-icon="city.icon"></span>
        <span class="remove-btn" :style="{color:city.color}" @click="removeCity(index)">×</span>
        <city :city="city"></city>
      </div>
    </li>
  </transition-group>
</template>

<script>
import city from './city'

export default {
  components: {
    city
  },
  computed: {
    cities() {
      return this.$store.state.cities;
    }
  },
  methods: {
    removeCity(index) {
      this.$store.dispatch({
        type: 'removeCity',
        index
      });
    }
  }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s
}
.fade-enter, .fade-leave-to {
  opacity: 0
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
  -webkit-transition:-webkit-transform .3s ease-in-out;
  transition:transform .3s ease-in-out;
}
.city .remove-btn:hover {
  cursor:pointer;
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg);
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
</style>

<style src="../assets/css/media.css"></style>
