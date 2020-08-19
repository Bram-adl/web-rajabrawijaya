import Vue from 'vue'
import VueRouter from 'vue-router'

import VueRellax from 'vue-rellax'
import VueScrollTo from 'vue-scrollto'

import App from './App.vue'
import Home from './pages/Home.vue'
import Adhikara from './pages/Adhikara.vue'
import Gallery from './pages/Gallery.vue'
import Faq from './pages/Faq.vue'

import '@/assets/scss/responsive.scss'

import 'animate.css'

Vue.use(VueRouter)
Vue.use(VueRellax)
Vue.use(VueScrollTo)

Vue.config.productionTip = false

Vue.prototype.Fire = new Vue()

const routes = [
  { path: '/', component: Home },
  { path: '/adhikara', component: Adhikara },
  { path: '/gallery', component: Gallery },
  { path: '/faq', component: Faq },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
