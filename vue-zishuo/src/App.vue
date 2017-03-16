<template>
  <div>
    <splash v-on:afterLeave="toFilms"></splash>
    <div class="search-box">
      <div class="search-input">
        <el-input
          placeholder="请输入台词"
          icon="close"
          v-model="searchText"
          :on-icon-click="clearSearchText">
        </el-input>
      </div>
      <div class="search-button">
        <el-button type="primary" v-on:click.native="toFilms">搜索一下</el-button>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import splash from './components/SplashTitle.vue'
  export default {
    name: 'app',
    data: function () {
      return {
        searchText: ''
      }
    },
    components: {
      splash
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
