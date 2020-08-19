import Vue from 'vue'
import VueRouter from 'vue-router'
import VueRellax from 'vue-rellax'

import App from './App.vue'

import Home from './pages/Home'
import Adhikara from './pages/Adhikara'
import Adhikara_detail from './pages/Adhikara_detail'
import Gallery from './pages/Gallery'
import FAQ from './pages/FAQ'
import './registerServiceWorker'

Vue.config.productionTip = false

Vue.prototype.$eventBus = new Vue()

Vue.use(VueRouter)
Vue.use(VueRellax)

const routes = [
  { path: '/', component: Home },
  { path: '/adhikara', component: Adhikara },
  { path: '/adhikara/:id', component: Adhikara_detail },
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
