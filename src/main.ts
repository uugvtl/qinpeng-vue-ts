// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'element-ui/lib/theme-chalk/index.css'
import App from '@/App.vue'
import router from '@/router'

import Vue from 'vue'
import Vuex from 'vuex'
import ElementUI from 'element-ui'
import VueRx from 'vue-rx'
import { Observable } from 'rxjs/Observable'
import { Subscription } from 'rxjs/Subscription' // Disposable if using RxJS4
import { Subject } from 'rxjs/Subject' // required for domStreams option
import Promise from 'es6-promise'

Vue.use(Vuex)

Promise.polyfill()

// tada!
Vue.use(VueRx, {
  Observable,
  Subscription,
  Subject
})
Vue.use(ElementUI)

Vue.config.productionTip = false
/* eslint-disable no-new */

const vue$ = new Vue({
  router,
  template: '<App/>',
  components: { App }
})

vue$.$mount('#app')

// new Vue({
//   el: '#app',
//   router,
//   render: h => {
//     return h(App)
//   }
// })
