import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Vant from 'vant';
// 封装的插件
import './common/rem';
import '@/common/FastClick';

//按需加入element-ui
import elemen from '@/common/ElementComponent'

// css
import 'vant/lib/index.css';
import '@/assets/css/style.css';
Vue.config.productionTip = false

Vue.use(Vant);
elemen.Components(Vue);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
