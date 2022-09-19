import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import * as echarts from 'echarts';
import './plugins/axios'
import htmlToPdf from './plugins/download'
// 使用Vue.use()方法就会调用工具方法中的install方法
Vue.use(htmlToPdf)

Vue.config.productionTip = false
Vue.use(Element)
Vue.prototype.$echarts = echarts;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
