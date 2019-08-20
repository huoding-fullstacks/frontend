import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import { Message } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import MyHeader from './components/header'
import routes from "./route.config.js";
import axios from 'axios'
import qs from 'qs.js'

import './assets/styles/common.css';
import './assets/styles/fonts/style.css';


Vue.use(ElementUI);
Vue.use(VueRouter);
Vue.component('my-header', MyHeader);
axios.defaults.baseURL = "/api/";
//axios.defaults.baseURL = "http://127.0.0.1:8801/api/";
axios.defaults.timeout = 3000;
Vue.prototype.$axios = axios;   //全局注册，使用方法为:this.$axios
Vue.prototype.qs = qs;

const router = new VueRouter({
  routes
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');