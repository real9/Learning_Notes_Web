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
    name: 'service',
    component: () => import(/* webpackChunkName: "about" */ '../views/IntegratedService.vue'),
  },
  {
    path: '/query',
    name: 'query',
    component: () => import(/* webpackChunkName: "about" */ '../views/IntegratedQuery.vue'),
    children: [
      {
        path: 'candidates',
        name: 'candidates',
        component: () => import(/* webpackChunkName: "about" */ '../views/Query/Candidates')
      },
      {
        path: 'directors',
        name: 'directors',
        component: () => import(/* webpackChunkName: "about" */ '../views/Query/Directors')
      },
      {
        path: 'talentDemand',
        name: 'talentDemand',
        component: () => import(/* webpackChunkName: "about" */ '../views/Query/TalentDemand')
      },
    ]
  },
  {
    path: '/query/newPage',
    name: 'newPage',
    component: () => import(/* webpackChunkName: "about" */ '../views/Query/NewPage')
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
