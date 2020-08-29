import Vue from 'vue'
import VueRouter from 'vue-router'

import VueRellax from 'vue-rellax'
import VueScrollTo from 'vue-scrollto'

import App from './App.vue'
import './registerServiceWorker'

import 'animate.css'
import Tawk from 'vue-tawk'
  
Vue.use(Tawk, {
    tawkSrc: 'https://embed.tawk.to/5b47696c6d961556373daa55/1egdgplh3'
})

Vue.use(VueRouter)
Vue.use(VueRellax)
Vue.use(VueScrollTo)

Vue.config.productionTip = false

Vue.prototype.Fire = new Vue()

const routes = [
  { path: '/', component: () => import(/* webpackChunkName: "home" */ './pages/Home.vue') },
  { path: '/adhikara', component: () => import(/* webpackChunkName: "adhikara" */ './pages/Adhikara.vue') },
  { path: '/baca/:id', component: () => import(/* webpackChunkName: "adhikara" */ './pages/Adhikara_detail.vue'), props: route => ({ query: route.query.id }) },
  { path: '/faq', component: () => import(/* webpackChunkName: "faq" */ './pages/FAQ.vue') },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
