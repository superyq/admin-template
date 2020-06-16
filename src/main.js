import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import '@/scss/index.scss'
import router from '@/router'

import Element from "element-ui"
import "element-ui/lib/theme-chalk/index.css"
Vue.use(Element, { size: "medium" })

import ECharts from 'vue-echarts'
Vue.component('v-chart', ECharts)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
