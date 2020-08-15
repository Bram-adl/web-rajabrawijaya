import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import Home from './components/Home'
import Adhikara from './components/Adhikara'
import Gallery from './components/Gallery'
import FAQ from './components/FAQ'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  { path: '/adhikara', component: Adhikara },
  { path: '/gallery', component: Gallery },
  { path: '/faq', component: FAQ },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
