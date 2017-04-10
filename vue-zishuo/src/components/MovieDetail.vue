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
              {{ movie.name }}
            </h1>
            <h2 class="subtitle is-4">
              {{ movie.srt }}
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
        movie: {
          name: 'aaa',
          srt: 'bbb'
        },
        index: 110
      }
    },
    methods: {
      downloadPic () {
        let link = document.createElement('a')
        link.download = this.movie.name
        link.href = this.movie.big
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      }
    },
    created: function () {
      this.movie = Bus.movie
      this.index = Bus.index
    }
  }
</script>

<style lang="scss" scoped>
@import "~bulma";
</style>
