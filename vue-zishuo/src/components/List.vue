<template>
  <ul>
    <li v-for="movie in movies.subjects">
      <!--<img v-bind:src="movie.images.medium">-->
      <p class="title">{{movie.title}}</p>
    </li>
  </ul>
</template>

<script>
  import {API_TYPE, fetchMoviesByType} from '../api/api'
  export default {
    name: 'list',
    data () {
      return {
        movies: {
          subjects: [
          ]
        },
        limit: 10
      }
    },
    props: {
      page: {
        type: Number,
        default: 1
      }
    },
    created () {
      console.log('list is created')
      this.get()
    },
    watch: {
      page (val) {
        this.get()
      }
    },
    methods: {
      get () {
        let start = this.movies.subjects.length
        fetchMoviesByType(API_TYPE.movie.in_theaters, start, this.limit)
          .then((data) => {
            this.movies.title = data.title
            this.movies.total = data.total
            this.movies.subjects = this.movies.subjects.concat(data.subjects)
          })
      }
    }
  }
</script>

<style scoped>
  ul {
    margin-left: 2rem;
    list-style: outside decimal;
  }
  li {
    line-height: 1.5;
    padding: 1rem;
    border-bottom: 1px solid #b6b6b6;
  }
  .title {
    font-weight: bold;
    font-size: 1.3rem;
  }
</style>

