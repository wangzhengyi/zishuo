<template>
  <div class="wrap_card">
    <div v-for="(v,i) in new Array(Math.ceil(movies.value.length/3))" class="columns">
      <div v-for="(movie,index) in movies.value.slice(i*3, (i+1)*3)" class="column is-one-third">
        <div class="card">
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
  </div>
</template>

<script>
  export default {
    name: 'SmallMoviePage',
    props: ['movies']
  }

</script>

<style lang="scss" scoped>
  .wrap_card {
    padding: 1.2rem 0.1em 0.1em;
    overflow: hidden;
    width: 100%
  }
</style>
