import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import * as echarts from 'echarts'
// 在main.js中引入echarts，并挂载到原型上，版本5的引入方法和4的不一样
import axios from 'axios'


Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
Vue.prototype.$axios = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
