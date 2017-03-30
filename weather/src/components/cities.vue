<template>
  <ul class="cities">
    <li class="city" v-for="(city, index) in cities">
      <div class="city-body" :style="{background:city.color}">
        <span class="weather-icon" :data-icon="city.icon"></span>
        <span class="remove-btn" :style="{color:city.color}" @click="removeCity(index)">×</span>
        <city :city="city"></city>
      </div>
    </li>
  </ul>
</template>

<script>
import city from './city'

export default {
  components: {
    city: city
  },
  computed: {
    cities: function() {
      return this.$store.state.cities;
    }
  },
  methods: {
    removeCity: function(index) {
      this.$store.dispatch({
        type: 'removeCity',
        index: index
      });
    }
  }
}
</script>