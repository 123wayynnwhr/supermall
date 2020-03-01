import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MyHeader from './components/common/MyHeader'
import MyFooter from './components/common/MyFooter'
import $ from "jquery";

// import MintUI from "mint-ui"
// import "mint-ui/lib/style.css"
// Vue.use(MintUI)


Vue.prototype.$ = $
Vue.component("my-header",MyHeader)
Vue.component("my-footer",MyFooter)


import axios from "axios"
axios.defaults.baseURL = "http://127.0.0.1:4000/"
axios.defaults.withCredentials = true
axios.defaults.headers.post['Content-Type'] = 'application/json';
Vue.prototype.axios = axios;





Vue.config.productionTip = false

new Vue({
  router,
  store,
  $,
  render: h => h(App)
}).$mount('#app')
