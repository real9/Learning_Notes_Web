import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
  {
    path: '/basicData',
    name: 'basicData',
    component: () => import(/* webpackChunkName: "about" */ '../views/BasicData.vue'),
  },
  {
    path: '/opinionOutput',
    name: 'opinionOutput',
    component: () => import(/* webpackChunkName: "about" */ '../views/OpinionOutput'),
  },
  {
    path: '/financialProducts',
    name: 'financialProducts',
    component: () => import(/* webpackChunkName: "about" */ '../views/FinancialProducts'),
  },
  {
    path: '/fundResearch',
    // name: 'fundResearch',
    component: () => import(/* webpackChunkName: "about" */ '../views/FundResearch.vue'),
    children: [
      {
        path: '/',
        name: 'fundProduct',
        component: () => import(/* webpackChunkName: "about" */ '../components/fundResearch/FundProduct'),
      },
      {
        path: 'fundManager',
        name: 'fundManager',
        component: ()=> import(/* webpackChunkName: "about" */ '../components/fundResearch/FundManager'),
      }
    ]
  },
  {
    path: '/assetAllocation',
    name: 'assetAllocation',
    component: () => import(/* webpackChunkName: "about" */ '../views/AssetAllocation'),
  },
  {
    path: '/riskControlCenter',
    name: 'riskControlCenter',
    component: () => import(/* webpackChunkName: "about" */ '../views/RiskControlCenter'),
  },
  {
    path: '/userManagement',
    name: 'userManagement',
    component: () => import(/* webpackChunkName: "about" */ '../views/UserManagement'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
