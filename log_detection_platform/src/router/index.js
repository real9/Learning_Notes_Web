import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//获取原型对象上的push函数
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "about" */ '../views/Data.vue'),
    redirect: 'LogParsing',
    children: [
      {
        path: '/LogParsing',
        component: () => import(/* webpackChunkName: "about" */ '../components/Data/LogParsing.vue')
      },
      {
        path: '/ModelTraining',
        component: () => import(/* webpackChunkName: "about" */ '../components/Data/ModelTraining.vue')
      },
      {
        path: '/LogDetection',
        component: () => import(/* webpackChunkName: "about" */ '../components/Data/LogDetection.vue')
      },
    ]
  },
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
