<template>
  <div class="container section">
    <div v-for="(v,i) in new Array(Math.ceil(movies.length/3))" class="columns" v-if="total > 0">
      <div v-for="(movie,index) in movies.slice(i*3, (i+1)*3)" class="column is-one-third">
        <div class="card" v-on:click="goMovieDetail(index + i * 3, movie)">
          <div class="card-image">
            <figure class="image">
              <img :src="movie.small">
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title is-4">{{movie.name}}</p>
              </div>
            </div>
            <div class="content">
              {{movie.srt}}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="total <= 0" class="not-found-container">
      <not-found></not-found>
    </div>
  </div>
</template>

<script>
  import Bus from '../bus.js'
  import NotFound from './NotFound.vue'
  export default {
    name: 'SmallMoviePage',
    props: ['movies'],
    methods: {
      goMovieDetail (index, movie) {
        this.$router.push({name: 'movie'})
        Bus.movie = movie
        Bus.index = index
      }
    },
    components: {
      'not-found': NotFound
    },
    computed: {
      total: function () {
        if (this.movies) {
          return this.movies.length
        } else {
          return 0
        }
      }
    }
  }

</script>

<style lang="scss" scoped>
  @import "~bulma";
  .wrap_card {
    padding: 1.2rem 0.1em 0.1em;
    overflow: hidden;
    width: 100%
  }

  .not-found-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
</style>
