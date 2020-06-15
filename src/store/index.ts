import Vue from 'vue'
import Vuex ,{ Store } from 'vuex'

import VuexPersist from 'vuex-persist';

Vue.use(Vuex)
//基本通用
import state from '@/store/vuex/state'
import mutations from '@/store/vuex/mutations';
import getters from '@/store/vuex/getters';
import actions from '@/store/vuex/actions';

const store: Store<any> = new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
  modules: {
    //添加自定义模块
  }
  // state: {
  // },
  // mutations: {
  // },
  // actions: {
  // },
  // modules: {
  // }
})
export default store;