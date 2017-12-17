import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const HelloWorld = () => import('@/components/HelloWorld.vue')

export default new Router({
  routes: [
    { path: '/', component: HelloWorld }
  ]
})
