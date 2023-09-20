import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

//路由表
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/newpage',
    name: '我新增的頁面',
    component: () => import('../views/NewPage.vue'),
    children: [
      {
        path: 'a',
        component: () => import('../views/cpnA.vue')
      },
      {
        path: 'b',
        component: () => import('../views/cpnB.vue')
      },
      {
        path: 'namedView',
        component: () => import('../views/NamedView.vue'),
        children: [
          {
            path: 'c2a',
            components: {
              left: () => import('../views/cpnC.vue'),
              right: () => import('../views/cpnA.vue')
            }
          },
          {
            path: 'a2b',
            components: {
              left: () => import('../views/cpnA.vue'),
              right: () => import('../views/cpnB.vue')
            }
          },
        ]

      }
    ]

  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
