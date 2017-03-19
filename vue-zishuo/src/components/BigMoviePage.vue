<template>
  <el-row justify="space-around" :gutter="10">
    <el-col :xs="24" :sm="24" :md="24" :lg="24" v-for="(movie,index) in movies.value">
      <div class="movie-content">
        <div class="movie-layout">
          <img class="movie-big-img" v-bind:src="movie.big"/>
          <div class="movie-details">
            <div class="movie-details-meta">
              <p class="movie-name">标题：{{movie.name}}</p>
              <p class="movie-srt">台词：{{movie.srt}}</p>
            </div>
            <el-button type="primary" class="movie-details-download" size="large"
                       v-on:click.native="downloadPicture(index)">Download
            </el-button>
          </div>

        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    name: 'SmallMoviePage',
    props: ['movies'],
    methods: {
      downloadPicture (index) {
        let url = this.movies.value[index].big
        let name = this.movies.value[index].name
        this.downloadURI(url, name)
      },
      downloadURI (uri, name) {
        let link = document.createElement('a')
        link.download = name
        link.href = uri
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      }
    }
  }

</script>

<style scoped>
  .movie-content {
    padding: 15px;
    display: flex;
    justify-content: center;
  }

  .movie-layout {
    width: 80%;
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
  }

  .movie-big-img {
    width: 100%;
  }

  .movie-details {
    margin-top: 3px;
    display: flex;
    display: -webkit-flex;
    justify-content: space-between;
  }

  .movie-name {
    white-space: nowrap;
    text-overflow: ellipsis;
    -o-text-overflow: ellipsis;
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    font-size: 17px;
    color: #1F2D3D;
    word-break: keep-all;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .movie-srt {
    white-space: nowrap;
    text-overflow: ellipsis;
    -o-text-overflow: ellipsis;
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    font-size: 15px;
    color: #475669;
    word-break: keep-all;
    text-overflow: ellipsis;
    overflow: hidden;
    margin-top: 10px;
  }

  .movie-details-meta {
    width: 66.7%;
  }

  .movie-details-download {
  }
</style>
