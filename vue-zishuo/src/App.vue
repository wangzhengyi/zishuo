<template>
  <div id="appvue">
    <main-page></main-page>
  </div>
</template>

<script>
  import MainPage from './components/MainPage.vue'
  export default {
    name: 'app',
    data: function () {
      return {
        searchText: ''
      }
    },
    components: {
      MainPage
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

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
</style>
