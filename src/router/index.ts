import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Alubm from '../views/Alubm/Alubm.vue'
import Page from '../views/Page/Page.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/page'
  }
  , {
    path: '/page',
    component: Page,
    children: [
      {
        path: '',
        redirect: '/page/index',
      }
      , {
        path: 'index',
        name: 'Index',
        meta: {
          title: '首页',
        },
        component: () => import(/* webpackChunkName: "about" */ '../views/Index/Index.vue')
      }
      , {
        path: 'alubm',
        name: 'Alubm',
        meta: {
          title: '相册',
        },
        component: () => import(/* webpackChunkName: "about" */ '../views/Alubm/Alubm.vue')
      }
      , {
        path: 'me',
        name: 'me',
        meta: {
          title: '我的',
        },
        component: () => import(/* webpackChunkName: "about" */ '../views/Personal/Personal.vue'),
      }
      , {
        path: 'personal',
        name: 'personal',
        meta: {
          title: '人',
        },
        component: () => import(/* webpackChunkName: "about" */ '../views/Personal/Personal.vue'),
      }
    ]
  }
  ,{
    path:'/message',
    name:'message',
    component: Page,
    children:[
      {
        path: 'index',
        name: 'Index',
        meta: {
          title: '首页',
        },
        component: () => import(/* webpackChunkName: "about" */ '../views/Message/Index/index.vue')
      },
      {
        path: 'test',
        name: 'test',
        meta: {
          title: '测试页',
        },
        component: () => import(/* webpackChunkName: "about" */ '../views/test/test1.vue')
      }
    ]
  }

  // {
  //   path: '/',
  //   name: 'Alubm',
  //   component: Alubm
  // }

  // , {
  //   path: '/alubm',
  //   name: 'alubm',
  //   // meta: {
  //   //   title: 'alubm',
  //   // },
  //   component: () => import(/* webpackChunkName: "about" */ '../views/Alubm/Alubm.vue'),
  // }
  
  // , {
  //   path: '/index',
  //   name: 'index',
  //   // meta: {
  //   //   title: '相册',
  //   // },
  //   component: () => import(/* webpackChunkName: "about" */ '../views/Index/Index.vue'),
  // }
  // ,{
  //   path: '/page',
  //   name: 'page',
  //   // meta: {
  //   //   title: '相册',
  //   // },
  //   component: () => import(/* webpackChunkName: "about" */ '../views/Page/Page.vue'),
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  // console.log(to)
  next();
  
})
export default router
