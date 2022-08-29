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
    // path: '/about',
    // name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
  {
    path: '/talentEntry',
    name: 'talentEntry',
    component: () => import(/* webpackChunkName: "about" */ '../views/TalentEntry'),
    children:[
      {
        path: 'talentInfo',
        name: 'talentInfo',
        component: () => import(/* webpackChunkName: "about" */ '../components/Talent/TalentInfo'),
      },
      {
        path: 'progressQuery',
        name: 'progressQuery',
        component: () => import(/* webpackChunkName: "about" */ '../components/Talent/ProgressQuery'),
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
