<template>
  <ul class="cities">
    <li class="city" v-for="(city, index) in cities">
      <span :data-icon="city.icon"></span>
      <button @click="removeCity(index)">X</button>
      <city :city="city"></city>
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