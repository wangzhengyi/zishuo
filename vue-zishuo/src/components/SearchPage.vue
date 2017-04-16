<template>
  <div class="box">
    <mu-appbar title="字说">
      <mu-text-field icon="search" class="appbar-search-field" slot="right" hintText="请输入台词"
                     v-model="word"
                     @keyup.enter.native="searchMovies"/>
      <mu-flat-button color="white" label="搜索" slot="right" @click="searchMovies"/>
    </mu-appbar>
    <mu-linear-progress v-if="loading"/>

    <div class="main-panel">
      <router-view v-bind:movies="movies"></router-view>
    </div>

    <div class="pagination-container">
      <mu-pagination :total="total" :current="page" :pageSize="limit" :defaultPageSize="limit" @pageChange="handlePagination">
      </mu-pagination>
    </div>
  </div>
</template>

<script>
  import {searchMoviesByWord} from '../api/api'
  export default {
    name: 'movies',
    data: function () {
      return {
        page: 1,
        movies: {},
        limit: 9,
        total: 0,
        word: '',
        loading: false,
        mode: 'Small'
      }
    },
    created () {
      this.searchMovies()
    },
    methods: {
      goMainPage () {
        this.$router.push({path: '/'})
      },
      goMovieDisplayPage () {
        if (this.mode === 'Small') {
          this.$router.push({name: 'small'})
        } else {
          this.$router.push({name: 'big'})
        }
      },
      searchMovies () {
        if (this.word === '') {
          this.word = this.$route.params.word
        }
        this.fetchServerData()
      },
      handlePagination (newIndex) {
        if (this.page !== newIndex) {
          this.page = newIndex
          this.fetchServerData()
        }
      },
      fetchServerData () {
        this.loading = true
        let start = (this.page - 1) * this.limit
        searchMoviesByWord(this.word, start, this.limit)
          .then((data) => {
            this.processServerData(data)
            this.loading = false
            this.goMovieDisplayPage()
          })
      },
      processServerData (data) {
        this.total = data.total
        this.movies = data.value
      }
    }
  }
</script>

<style scoped>
  .box {
    width: 100%;
    height: auto;
    display: -webkit-flex;
    display: flex;
    flex-direction: column;
  }

  .main-panel {
    flex: 1;
  }

  .pagination-container {
    display: flex;
    justify-content: center;
  }
</style>
