import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import * as echarts from 'echarts';
import './style/datePicker.css'
// import axios from 'axios'

Vue.config.productionTip = false
Vue.use(Element)
Vue.prototype.$echarts = echarts;
// Vue.prototype.$axios = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
