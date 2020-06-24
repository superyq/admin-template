import Vuex from 'vuex';
import Vue from "vue";
Vue.use(Vuex);

import system from "./modules/system";

const store = new Vuex.Store({
  modules: {
    system
  }
})

export default store;