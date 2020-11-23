import { createRouter, createWebHistory } from 'vue-router'
import { BasicLayout } from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */

export const constantRoutes = [
  {
    path: '/',
    name: 'Home',
    component: BasicLayout
  },
  {
    path: '/form',
    name: 'form',
    redirect: '/form/basic-form',
    component: BasicLayout,
    children: [
      {
        path: '/form/basic-form',
        component: () => import('@/views/form/basic-form')
      },
      {
        path: '/form/step-form',
        component: () => import('@/views/form/step-form')
      },
      {
        path: '/form/advance-form',
        component: () => import('@/views/form/advance-form')
      }
    ]
  }
  //   {
  //     path: "/login",
  //     name: "Login",
  //     component: () => import("@/views/login")
  //   },
  //   {
  //     path: "/dashboard",
  //     name: "dashboard",
  //     component: BasicLayout
  //   },
  //   {
  //     path: "/about",
  //     name: "About",
  //     // route level code-splitting
  //     // this generates a separate chunk (about.[hash].js) for this route
  //     // which is lazy-loaded when the route is visited.
  //     component: () =>
  //       import(/* webpackChunkName: "about" */ "../views/About.vue")
  //   }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = []

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: constantRoutes
})

export default router
