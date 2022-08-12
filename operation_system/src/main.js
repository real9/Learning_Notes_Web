import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import * as echarts from 'echarts';
import store from './store'

Vue.config.productionTip = false;
Vue.prototype.$echarts = echarts;

Vue.use(ElementUI);

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
