import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//防止重复进入同一个路由而报错
//获取原型对象上的push函数
const original = VueRouter.prototype.replace
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
  return original.call(this, location).catch(err => err)
}
const routes = [
  {
    path: '/',
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
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
