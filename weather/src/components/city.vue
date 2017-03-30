<template>
  <div>
    <p class="temp">{{city.temp}}<span class="degrees" data-icon="*"></span></p>
    <p class="cityname">{{city.city}}</p>
  </div>
</template>

<script>
  export default {
    props: ['city']
  }
</script>