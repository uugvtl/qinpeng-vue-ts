import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const HelloWorld = () => import('@/components/HelloWorld.vue')
const Login = () => import('@/containers/Login.vue')

export default new Router({
  routes: [
    { path: '/', component: HelloWorld },
    { path: '/login', component: Login }
  ]
})
