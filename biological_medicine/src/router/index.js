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
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: () => import(/* webpackChunkName: "about" */ '../views')
  // }
  {
    path: '/',
    component: () => import(/* webpackChunkName: "about" */ '../views/Data'),
    children: [
      {
        path: '/EvaluationResults',
        component: () => import(/* webpackChunkName: "about" */ '../components/EvaluationResults'),
      },
      {
        path: '/EvaluationHistory',
        component: () => import(/* webpackChunkName: "about" */ '../components/EvaluationHistory'),
      },
      {
        path: '/OriginalIndex',
        component: () => import(/* webpackChunkName: "about" */ '../components/OriginalIndex'),
      },
      {
        path: '/QuantitativeIndex',
        component: () => import(/* webpackChunkName: "about" */ '../components/QuantitativeIndex'),
      },
      {
        path: '/EvaluationModel',
        component: () => import(/* webpackChunkName: "about" */ '../components/EvaluationModel'),
      },
      {
        path: '/EvaluationSubject',
        component: () => import(/* webpackChunkName: "about" */ '../components/EvaluationSubject'),
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
