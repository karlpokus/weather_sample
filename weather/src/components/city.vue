<template>
  <span>
    It's {{city.temp}} degress in {{city.city}}
  </span>
</template>

<script>
  export default {
    props: ['city']
  }
</script>