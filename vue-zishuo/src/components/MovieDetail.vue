<template>
  <section class="hero is-fullheight is-default is-bold">
    <div class="hero-head">
      <div class="container">
        <nav class="nav has-shadow">
          <div class="container">
            <div class="nav-left">
              <a class="nav-item" href="../index.html">
                <img src="../assets/img/zishuo.png" alt="Description">
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>

    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="columns is-vcentered">
          <div class="column is-5">
            <figure class="image is-4by3">
              <img :src="movie.big" alt="Description">
            </figure>
          </div>
          <div class="column is-6 is-offset-1">
            <h1 class="title is-2">
              {{ movieName }}
            </h1>
            <h2 class="subtitle is-4">
              {{movie.srt}}
            </h2>
            <br>
            <p class="has-text-centered">
              <a class="button is-large is-primary" v-on:click="downloadPic">
                Download
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import Bus from '../bus.js'
  export default {
    name: 'MovieDetail',
    data: function () {
      return {
        movie: {},
        index: 110
      }
    },
    methods: {
      downloadPic () {
        console.log('name=' + this.movieName)
      },
      setMovie (movie) {
        this.movie = movie
      },
      setIndex (index) {
        this.index = index
      }
    },
    created () {
      Bus.$on('loadMovie', (index, movie) => {
        console.log('index=' + this.index + ', movie=' + this.movie)
        this.setMovie(movie)
        this.setIndex(index)
        console.log('movie name=' + this.movie.name)
      })
    },
    computed: {
      movieName: function () {
        if (this.movie) {
          return this.movie.name
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
@import "~bulma";
</style>
