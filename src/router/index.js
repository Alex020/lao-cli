import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export const constantRouterMap = [
  { path: '*', redirect: '/404', hidden: true }
]
export default new Router({
   // mode: 'history', //后端支持可开
   scrollBehavior: () => ({ y: 0 }),
   routes: constantRouterMap
 })