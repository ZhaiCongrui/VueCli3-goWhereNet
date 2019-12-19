import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import 'swiper/dist/css/swiper.css'
import '@/assets/base'
import '@/assets/reset.css'
import '@/assets/border.css'
import '@/assets/iconfont.css'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper, /* { default global options } */)
Vue.prototype.$axios = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
