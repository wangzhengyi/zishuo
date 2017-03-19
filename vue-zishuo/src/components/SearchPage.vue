<template>
  <div class="box">
    <div class="main-form">
      <p class="logo-div special-text" v-on:click="goMainPage">字说</p>
      <el-input class="search-input" placeholder="请输入台词" icon="close" v-model="word" :on-icon-click="clearSearchWord"
                @keyup.enter.native="searchMovies">
      </el-input>
      <div class="search-button">
        <el-button id="submit-btn" type="primary"
                   v-on:click.native="searchMovies">Search
        </el-button>
      </div>
    </div>

    <div class="main-panel">
      <el-row justify="space-around" :gutter="10">
        <el-col :xs="24" :sm="12" :md="8" :lg="8" v-for="movie in movies.value">
          <div class="movie-content">
            <img class="movie-img" v-bind:src="movie.small" />
            <p class="movie-title">{{movie.name}}</p>
          </div>
        </el-col>
      </el-row>
    </div>


    <div class="footer-page">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page=page
        :page-size=limit
        layout="total, prev, pager, next"
        :total=total>
      </el-pagination>
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
        loading: false
      }
    },
    created () {
      this.searchMovies()
    },
    methods: {
      goMainPage () {
        this.$router.push({path: '/'})
      },
      searchMovies () {
        if (this.word === '') {
          this.word = this.$route.params.search
        }
        this.fetchServerData()
      },
      handleCurrentChange (val) {
        this.page = val
        this.fetchServerData()
      },
      handleSizeChange (val) {
        console.log('size is changed! val=' + val)
      },
      clearSearchWord () {
        this.word = ''
      },
      fetchServerData () {
        console.log('fetch server data')
        this.loading = true
        let start = (this.page - 1) * this.limit
        searchMoviesByWord(this.word, start, this.limit)
          .then((data) => {
            this.processServerData(data)
            this.loading = false
          })
      },
      processServerData (data) {
        this.total = data.total
        this.movies = data
      }
    }
  }
</script>

<style scoped>
  @import "../assets/css/reset.css";

  .box {
    width: 100%;
    height: auto;
    display: -webkit-flex;
    display: flex;
    flex-direction: column;
  }

  .main-form {
    display: -webkit-flex;
    display: flex;
    height: auto;
    margin-bottom: 20px;
    background-color: #f6f6f6;
    padding: 15px;
  }

  .logo-div {
    height: 35px;
    width: 70px;
    white-space:nowrap;
    cursor: pointer;
  }

  .search-input {
    width: 70%;
    max-width: 590px;
    height: 35px;
    margin-left: 1%;
    margin-right: 1%;
  }

  .search-button {
    width: 120px;
    height: 35px;
  }

  .special-text {
    color: #20A0FF;
    font-size: 30px;
    letter-spacing: 0;
    text-shadow: 1px 0px 0px #999, 2px 0px 0px #888, 3px 0px 0px #777, 4px 0px 0px #666, 5px 0px 0px #555, 6px 0px 0px #444, 7px 0px 0px #333, 8px 0px 7px #001135
  }

  .main-panel {
    flex: 1;
  }

  .movie-content {
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }

  .movie-img {
    height: 230px;
    width: 307px;
  }

  .movie-title {
    height: 28px;
    max-width: 307px;
    white-space: nowrap;
    text-overflow: ellipsis;
    -o-text-overflow: ellipsis;
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    font-size: 14px;
    color: #1D8CE0;
    word-break: keep-all;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .footer-page {
    height: 50px;
    display: flex;
    display: -webkit-flex;
    justify-content: flex-start;
    align-items: flex-end;
  }
</style>
