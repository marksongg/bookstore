import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'

// ☆使用了Element-plus插件
import ElementPlus from 'element-plus';
// import 'element-plus/lib/theme-chalk/index.css';
import 'element-plus/dist/index.css'
import locale from 'element-plus/lib/locale/lang/zh-cn'

// jquery全局引用
window.$ = window.jQuery = require('jquery');

createApp(App)
  .use(store)
  .use(router)
  .use(VueAxios, axios)
  .use(ElementPlus,{ locale })
  // 下記のソースnot work
//   .use({
//     install: function(Vue){
//         Vue.prototype.$jQuery = require('jquery'); // you'll have this.$jQuery anywhere in your vue project
//         }
//     })
  .mount('#app')
axios.defaults.baseURL = '/api'
