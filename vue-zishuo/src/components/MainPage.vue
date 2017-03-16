<template>
  <div id="box" style="width:100%;height:auto">
    <div id="header">
      <div id="logo">
          <p class="threed">字说</p>
      </div>
    </div>
    <div id="container">
      <div id="front-info">
        <img id="front-img" alt="字说" src="../assets/img/wolf_children1.jpg" />
      </div>
      <div class="row-space"></div>
      <div id="search-input">
        <el-input placeholder="请输入台词" icon="close" v-model="searchText"
          :on-icon-click="clearSearchText" @keyup.enter.native="toSearchPage">
        </el-input>
      </div>
      <div class="row-space"></div>
      <div id="search-button">
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
        searchText: ''
      }
    },
    methods: {
      toSearchPage () {
        console.log('to search page, search text=' + this.searchText)
        if (this.searchText === '') {
          return
        }
        this.$router.push({path: '/search/' + this.searchText})
      },
      clearSearchText () {
        this.searchText = ''
      }
    }
  }
</script>

<style scoped>
#box {
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
}
#header {
  width: 100%;
  height: 150px;
  align-items: flex-end;
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
}
#logo {
  margin-right: 40px;
}
.threed{
  color: #20A0FF;
  font-size: 30px;
  letter-spacing: 0;
  text-shadow: 0px 1px 0px #999, 0px 2px 0px #888, 0px 3px 0px #777, 0px 4px 0px #666, 0px 5px 0px #555, 0px 6px 0px #444, 0px 7px 0px #333, 0px 8px 7px #001135
}
#container {
  height: 485px;
  width: 100%;
  align-items: center;
  display: -webkit-flex;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
}
#front-info {
  max-width: 400px;
  max-height: 230px;
  width: 100%;
  align-self: center;
  display: -webkit-flex;
  display: flex;
  justify-content: center;
}
#front-img {
  width: 100%;
  height: auto;
  border-radius: 20px 50px;
}
#search-input {
  display: -webkit-flex;
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 600px;
}
#search-button {
  display: -webkit-flex;
  display: flex;
  justify-content: center;
  height: 33px;
  width: 100%;
}
.row-space {
  width: 100%;
  height: 15px;
}
#submit-btn {
  flex-basis: 120px;
}
</style>
