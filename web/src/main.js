import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/style.scss'
import http from './http'

Vue.config.productionTip = false
Vue.prototype.$http = http

import './assets/iconfont/iconfont.css'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
