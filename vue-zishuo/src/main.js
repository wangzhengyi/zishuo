// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import 'muse-ui/dist/theme-light.css'
import store from './store'
import MainPage from './page/MainPage.vue'
import SearchPage from './components/SearchPage.vue'
import SmallMoviePage from './components/SmallMoviePage.vue'
import BigMoviePage from './components/BigMoviePage.vue'
import MovieDeatail from './components/MovieDetail.vue'
import ZiShuoPage from './page/ZiShuoPage.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.use(MuseUI)

const router = new VueRouter({
  routes: [
    {path: '/', component: MainPage},
    {path: '', component: MainPage},
    {
      path: '/search/:word',
      component: SearchPage,
      children: [
        {
          path: 'small',
          name: 'small',
          component: SmallMoviePage
        },
        {
          path: 'big',
          name: 'big',
          component: BigMoviePage
        }
      ]
    },
    {path: '/movie', name: 'movie', component: MovieDeatail},
    {path: '/zishuo/:word', name: 'zishuo', component: ZiShuoPage},
    {path: '*', component: MainPage}
  ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
