<template>
  <div class="box">
    <div class="main-form">
      <p class="logo-div threed">字说</p>
      <div class="column-space"></div>
      <el-input class="search-input" placeholder="请输入台词" icon="close" v-model="searchText" :on-icon-click="clearSearchText" @keyup.enter.native="toSearchPage">
      </el-input>
      <div class="column-space"></div>
      <div class="search-button">
        <el-button id="submit-btn" type="primary" 
          v-on:click.native="toSearchPage">Search</el-button>
      </div>
    </div>

    <div class="main-pannel">
      <ul>
        <li v-for="movie in movies.subjects">
          <!--<img v-bind:src="movie.images.medium">-->
          <p class="title">{{movie.desc}}</p>
        </li>
      </ul>
      <!--<p class="button" @click="next">GO NEXT</p>-->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page=page
        :page-size=limit
        layout="total, prev, pager, next"
        :total=movies.total>
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
        limit: 2,
        searchText: ''
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
        console.log(this.$route.params)
        fetchNewsLatest(this.page, this.limit)
          .then((data) => {
            this.movies.subjects = data.results
          })
      },
      next () {
        this.page++
      },
      handleCurrentChange (val) {
        this.page = val
        fetchNewsLatest(this.page, this.limit)
          .then((data) => {
            this.movies.subjects = data.results
          })
      },
      handleSizeChange (val) {
        console.log('size is changed! val=' + val)
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
}
.main-form {
  display: -webkit-flex;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
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
