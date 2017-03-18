<template>
  <div class="box">
    <div class="main-form">
      <p class="logo-div threed">字说</p>
      <div class="column-space"></div>
      <el-input class="search-input" placeholder="请输入台词" icon="close" v-model="searchText" :on-icon-click="clearSearchText" @keyup.enter.native="get">
      </el-input>
      <div class="column-space"></div>
      <div class="search-button">
        <el-button id="submit-btn" type="primary"
          v-on:click.native="get">Search</el-button>
      </div>
    </div>

    <div class="main-panel">

    <el-raw>
      <el-col :span="8" v-for="fmovie in firstRawMovies">
        <div class="movie-content">
          <img class="movie-img" src="../assets/img/wolf_children1.jpg" />
          <p class="movie-title">{{fmovie.desc}}</p>
        </div>
      </el-col>
    </el-raw>

    <el-raw>
      <el-col :span="8" v-for="smovie in secondRawMovies">
        <div class="movie-content">
          <img class="movie-img" src="../assets/img/wolf_children1.jpg" />
          <p class="movie-title">{{smovie.desc}}</p>
        </div>
      </el-col>
    </el-raw>

    <el-raw>
      <el-col :span="8" v-for="tmovie in thirdRawMovies">
        <div class="movie-content">
          <img class="movie-img" src="../assets/img/wolf_children1.jpg" />
          <p class="movie-title">{{tmovie.desc}}</p>
        </div>
      </el-col>
    </el-raw>
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
  import {fetchNewsLatest} from '../api/api'
  export default {
    name: 'movies',
    data: function () {
      return {
        page: 1,
        movies: {
          total: 20,
          subjects: [
          ]
        },
        limit: 9,
        total: 20,
        searchText: '',
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
        if (this.searchText === '') {
          this.searchText = this.$route.params.search
        }
        this.loading = true
        fetchNewsLatest(this.page, this.limit)
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
        fetchNewsLatest(this.page, this.limit)
          .then((data) => {
            this.processServerData(data)
          })
      },
      handleSizeChange (val) {
        console.log('size is changed! val=' + val)
      },
      clearSearchText () {
        this.searchText = ''
      },
      processServerData (data) {
        this.movies.subjects = data.results
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
.box {
  width: 100%;
  height: auto;
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 10px;
}
.main-form {
  display: -webkit-flex;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  height: auto;
  margin-bottom: 20px;
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
.threed{
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

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, menu, nav, section {
  display: block;
}
body {
  line-height: 1;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
</style>
