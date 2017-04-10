<template>
  <div class="box">
    <div class="header">
      <div class="logo">
          <p class="special-text">字说</p>
      </div>
    </div>
    <div class="container">
      <div class="front-info">
        <img class="front-img" alt="字说" src="../assets/img/wolf_children1.jpg" />
      </div>
      <div class="search-input">
        <el-input placeholder="请输入台词" icon="close" v-model="word"
          :on-icon-click="clearSearchWord" @keyup.enter.native="toSearchPage">
        </el-input>
      </div>
      <div class="search-button">
        <el-button id="submit-btn" type="primary"
          v-on:click.native="toSearchPage">Search</el-button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'mainpage',
    data: function () {
      return {
        word: ''
      }
    },
    methods: {
      toSearchPage () {
        if (this.word === '') {
          return
        }
        this.$router.push({path: '/search/' + this.word})
      },
      clearSearchWord () {
        this.word = ''
      }
    }
  }
</script>

<style scoped>
  @import "../assets/css/reset.css";
  .box {
    width: 100%;
    height: auto;
    display: -webkit-flex;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
  .header {
    width: 100%;
    height: 150px;
    align-items: flex-end;
    display: -webkit-flex;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
  .logo {
    margin-top: 30px;
    margin-right: 40px;
  }
  .special-text{
    color: #20A0FF;
    font-size: 30px;
    letter-spacing: 0;
    text-shadow: 0px 1px 0px #999, 0px 2px 0px #888, 0px 3px 0px #777, 0px 4px 0px #666, 0px 5px 0px #555, 0px 6px 0px #444, 0px 7px 0px #333, 0px 8px 7px #001135
  }
  .container {
    height: 485px;
    width: 80%;
    max-width: 600px;
    align-self: center;
    display: -webkit-flex;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
  }
  .front-info {
    max-width: 400px;
    max-height: 230px;
    width: 100%;
    align-self: center;
    display: -webkit-flex;
    display: flex;
    justify-content: center;
  }
  .front-img {
    width: 100%;
    height: auto;
    border-radius: 20px 50px;
  }
  .search-input {
    display: -webkit-flex;
    display: flex;
    justify-content: center;
    width: 100%;
    max-width: 600px;
    margin-top: 15px;
  }
  .search-button {
    display: -webkit-flex;
    display: flex;
    justify-content: center;
    height: 33px;
    width: 100%;
    margin-top: 15px;
  }

  #submit-btn {
    flex-basis: 120px;
  }
</style>
