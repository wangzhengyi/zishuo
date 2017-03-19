<template>
  <el-row justify="space-around" :gutter="10">
    <el-col :xs="24" :sm="12" :md="8" :lg="8" v-for="(movie,index) in movies.value">
      <div class="movie-content">
        <img class="movie-small-img" v-bind:src="movie.small"/>
      </div>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    name: 'SmallMoviePage',
    props: ['movies']
  }

</script>

<style scoped>
  .movie-small-img {
    height: 230px;
    width: 307px;
  }

  .movie-content {
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 15px;
  }
</style>
