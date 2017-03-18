<template>
  <div class="box">
    <div class="main-form">
      <p class="logo-div special-text">字说</p>
      <div class="column-space"></div>
      <el-input class="search-input" placeholder="请输入台词" icon="close" v-model="word" :on-icon-click="clearSearchWord" @keyup.enter.native="get">
      </el-input>
      <div class="column-space"></div>
      <div class="search-button">
        <el-button id="submit-btn" type="primary"
          v-on:click.native="get">Search</el-button>
      </div>
    </div>

    <div class="main-panel">

    <el-row justify="space-around">
      <el-col :span="8" v-for="fmovie in firstRawMovies">
        <div class="movie-content">
          <img class="movie-img" v-bind:src="fmovie.small" />
          <p class="movie-title">{{fmovie.name}}</p>
        </div>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="8" v-for="smovie in secondRawMovies">
        <div class="movie-content">
          <img class="movie-img" v-bind:src="smovie.small" />
          <p class="movie-title">{{smovie.name}}</p>
        </div>
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="8" v-for="tmovie in thirdRawMovies">
        <div class="movie-content">
          <img class="movie-img" v-bind:src="tmovie.small" />
          <p class="movie-title">{{tmovie.name}}</p>
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
        movies: {
        },
        limit: 9,
        total: 0,
        word: '',
        loading: false,
        firstRawMovies: {

        },
        secondRawMovies: {

        },
        thirdRawMovies: {

        }
      }
    },
    created () {
      this.get()
    },
    methods: {
      get () {
        if (this.word === '') {
          this.word = this.$route.params.search
        }
        this.loading = true
        searchMoviesByWord(this.word, this.page, this.limit)
          .then((data) => {
            console.log(data.results)
            this.processServerData(data)
            this.loading = false
          })
      },
      next () {
        this.page++
      },
      handleCurrentChange (val) {
        this.page = val
        searchMoviesByWord(this.word, this.page, this.limit)
          .then((data) => {
            this.processServerData(data)
          })
      },
      handleSizeChange (val) {
        console.log('size is changed! val=' + val)
      },
      clearSearchWord () {
        this.word = ''
      },
      processServerData (data) {
        this.total = data.total
        this.movies.subjects = data.value
        this.firstRawMovies = []
        this.secondRawMovies = []
        this.thirdRawMovies = []
        for (let i = 0, len = this.movies.subjects.length; i < len; i++) {
          if (i < 3) {
            this.firstRawMovies.push(this.movies.subjects[i])
          } else if (i < 6) {
            this.secondRawMovies.push(this.movies.subjects[i])
          } else {
            this.thirdRawMovies.push(this.movies.subjects[i])
          }
        }
      }
    },
    watch: {
      page (val) {
        this.get()
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
    align-items: flex-start;
    justify-content: flex-start;
    height: auto;
    margin-bottom: 20px;
    background-color: #f6f6f6;
    padding: 15px;
  }
  .logo-div {
    height: 35px;
    width: 70px;
  }
  .search-input {
    width: 590px;
    height: 35px;
  }
  .search-button {
    width: 120px;
    height: 35px;
  }
  .column-space {
    width: 1%;
    height: 1px;
  }
  .special-text{
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
    align-items: flex-start;
  }

  .movie-img {
    height: 230px;
    width: 307px;
  }

  .movie-title {
    height: 28px;
    max-width: 307px;
    white-space: nowrap;
    text-overflow:ellipsis;
    -o-text-overflow:ellipsis;
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    font-size: 14px;
    color: #1D8CE0;
    word-break:keep-all;
    text-overflow:ellipsis;
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
