// import  from 'vue-router';

import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '@views/home/index.vue';
export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Home,
    name: "图表",
    children: [
      {
        name: "图表",
        path: "/charts",
        component: () => import('@views/charts/index.vue')
      }
    ]
  },
  {
    path: '/table',
    component: Home,
    name: "表格测试菜单",
    children: [
      {
        name: "表格",
        path: "/index",
        component: () => import('@views/table/index.vue')
      }
    ]
  },
]


const router = createRouter({
  history: createWebHashHistory(),
  routes
})
router.beforeEach((to, from, next) => {
  // const token = localStorage.getItem('token')
  // if (to.path === '/' && token) {
  //   return next({name:'main'})
  // }
  // // if(!token){
  // //  return next({path:'/'})
  // // }
  // if (to.name !== 'login' && !token) next({ name: 'login' })
  // if (to.meta.title) {
  //   document.title = to.meta.title as string
  // }
  next()
})
export default router