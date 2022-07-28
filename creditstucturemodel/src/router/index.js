import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/ProjectList',
    name: 'ProjectList',
    component: () =>import('@/views/ProjectList')
  },

  {
    path: '/EvaluationResult',
    name: 'EvaluationResult',
    component: () =>import('@/views/EvaluationResult')
  },
  {
    path: '/StatisticsAnalysis',
    name: 'StatisticsAnalysis',
    component: () =>import('@/views/StatisticsAnalysis')
  },
  {
    path: '/ModelManagement',
    name: 'ModelManagement',
    component: () =>import('@/views/ModelManagement')
  },
  {
    path: '/AppendixList',
    name: 'AppendixList',
    component: () =>import('@/views/AppendixList')
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
