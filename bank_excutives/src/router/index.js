import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'service',
    component: () => import(/* webpackChunkName: "about" */ '../views/IntegratedService.vue')
  },
  {
    path: '/query',
    name: 'query',
    component: () => import(/* webpackChunkName: "about" */ '../views/IntegratedQuery.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
