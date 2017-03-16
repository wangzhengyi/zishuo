<template>
  <div class="splash" v-show="show">
    <h1>字说</h1>
  </div>
</template>

<script>
  export default {
    name: 'SplashTitle',
    computed: {
      show () {
        return this.$store.state.showSplash
      }
    }
  }
</script>

