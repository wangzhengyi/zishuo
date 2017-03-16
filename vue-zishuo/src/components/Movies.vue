<template>
  <div>
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
        limit: 2
      }
    },
    mounted () {
      this.get()
    },
    methods: {
      get () {
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
.button {
  display: block;
  width: 100%;
  background: #212121;
  color: #ffffff;
  font-weight: bold;
  text-align: center;
  padding: 1em;
  cursor: pointer;
  text-decoration: none;
}
</style>
