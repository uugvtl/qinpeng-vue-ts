import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const Login = () => import('@/containers/Login.vue')

export default new Router({
  routes: [
    { path: '/', component: Login }
  ]
})
