import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import {baseApi} from '@/config'

import "lib-flexible/flexible"

import '@/plugins/vant'

import axios from "@/utils/request"
Vue.prototype.$axios=axios

console.log(baseApi)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
