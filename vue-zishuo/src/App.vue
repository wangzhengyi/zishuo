<template>
  <div id="appvue">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data: function () {
      return {
        searchText: ''
      }
    },
    methods: {
      toFilms () {
        if (this.searchText === '') {
          return
        }
        console.log(this.$router)
        this.$router.push({path: '/movies/' + this.searchText})
      },
      clearSearchText () {
        this.searchText = ''
      }
    }
  }
</script>

<style lang="scss">
  #appvue {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
</style>
