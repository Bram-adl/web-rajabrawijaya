import Vue from 'vue'
import VueRouter from 'vue-router'

import VueRellax from 'vue-rellax'
import VueScrollTo from 'vue-scrollto'

import App from './App.vue'
import './registerServiceWorker'

import 'animate.css'

Vue.use(VueRouter)
Vue.use(VueRellax)
Vue.use(VueScrollTo)

Vue.config.productionTip = false

Vue.prototype.Fire = new Vue()

const routes = [
  { path: '/', component: () => import(/* webpackChunkName: "home" */ './pages/Home.vue') },
  { path: '/adhikara', component: () => import(/* webpackChunkName: "adhikara" */ './pages/Adhikara.vue') },
  { path: '/baca/:id', component: () => import(/* webpackChunkName: "adhikara" */ './pages/Adhikara_detail.vue') },
  { path: '/faq', component: () => import(/* webpackChunkName: "faq" */ './pages/Faq.vue') },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
