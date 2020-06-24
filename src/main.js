import Vue from 'vue'
import App from './App.vue'
import store from "@/store"
import router from '@/router'

Vue.config.productionTip = false

import '@/scss/index.scss'

import Element from "element-ui"
import "element-ui/lib/theme-chalk/index.css"
Vue.use(Element, { size: "medium" })

import ECharts from 'vue-echarts'
Vue.component('v-chart', ECharts)

import "@/svg-icon";

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
