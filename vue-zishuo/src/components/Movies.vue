<template>
  <div>
    <list v-bind:page="page"></list>
    <p class="button" @click="next">GO NEXT</p>
  </div>
</template>

<script>
  import list from './List.vue'
  export default {
    name: 'movies',
    components: {
      list
    },
    data: function () {
      return {
        page: 1
      }
    },
    methods: {
      next () {
        this.page++
      }
    },
    mounted () {
      console.log('movie is mounted!')
    }
  }
</script>

<style scoped>
.button {
  display: block;
  width: 100%;
  background: #212121;
  color: #ffffff;
  font-weight: bold;
  text-align: center;
  padding: 1em;
  cursor: pointer;
  text-decoration: none;
}
</style>
