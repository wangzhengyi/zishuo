<template>
  <div>
    <mu-appbar title="字说">
      <mu-text-field icon="search" class="appbar-search-field" slot="right" hintText="请输入台词" v-model="word"
                     v-on:keyup.enter.native="doWordSearch"/>
      <mu-flat-button color="white" label="搜索" slot="right" v-on:click="doWordSearch"/>
    </mu-appbar>
    <mu-linear-progress v-if="loading"/>
    <div class="gridlist-demo-container">
      <mu-grid-list class="gridlist-demo" :cellHeight="cellHeight" :padding="padding">
        <mu-sub-header v-if="total > 0">搜索结果</mu-sub-header>
        <mu-grid-tile v-for="(movie, index) in list" :key="index">
          <img :src="movie.small" class="img"/>
          <span slot="title">{{movie.name}}</span>
          <span slot="subTitle">{{movie.srt}}</span>
          <mu-icon-button icon="star" slot="action" tooltip="Download" tooltipPosition="top-left"/>
        </mu-grid-tile>
      </mu-grid-list>
    </div>
    <div class="pagination-container">
      <mu-pagination :total="total" :current="current" :pageSize="pageSize" @pageChange="handlePagination">
      </mu-pagination>
    </div>
  </div>
</template>

<script>
  import {searchMoviesByWord} from '../api/api'
  export default {
    name: 'ZiShuoPage',
    data () {
      return {
        value: {},
        list: [],
        word: '',
        current: 1,
        pageSize: 10,
        loading: false,
        cellHeight: 230,
        padding: 10
      }
    },
    computed: {
      total: function () {
        if (this.value && this.value.total) {
          return this.value.total
        } else {
          return 0
        }
      }
    },
    methods: {
      doWordSearch () {
        this.loading = true
        let start = (this.current - 1) * this.pageSize
        searchMoviesByWord(this.word, start, this.pageSize)
          .then((data) => {
            console.log(data)
            this.loading = false
            this.value = data
            this.total = data.total
            this.list = data.value
          })
      },
      handlePagination (newIndex) {
        this.current = newIndex
        this.doWordSearch()
      }
    }
  }
</script>

<style lang="less">
  .appbar-search-field {
    color: #FFF;
    margin-bottom: 0;

    &.focus-state {
      color: #FFF;
    }

    .mu-text-field-hint {
      color: fade(#FFF, 54%);
    }

    .mu-text-field-input {
      color: #FFF;
    }

    .mu-text-field-focus-line {
      background-color: #FFF;
    }
  }

  .gridlist-demo-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .gridlist-demo {
    width: 90%;
    height: auto;
    overflow-y: auto;
  }

  .img {
    width: 100%;
    height: auto;
    max-width: 100%;
    display: block;
  }

  .pagination-container {
    display: flex;
    justify-content: center;
  }
</style>
