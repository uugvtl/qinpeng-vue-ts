import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'

Vue.use(Router)

const HelloWorld = () => import('@/components/HelloWorld.vue')

axios.get('/admin/list/index')
  .then(res => console.log(res.data.msg))
  .catch(res => console.log(res))

export default new Router({
  routes: [
    { path: '/', component: HelloWorld }
  ]
})
