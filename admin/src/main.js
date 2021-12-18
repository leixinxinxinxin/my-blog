import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import http from './http'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$http = http

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
