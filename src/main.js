import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'



Vue.config.productionTip = false
import 'assets/css/bootstrap.min.css'
import 'assets/css/font-awesome.min.css'
import 'assets/css/animate.css'
import 'assets/css/swiper.css'
import 'assets/css/owl.carousel.min.css'
import 'assets/css/style.css'
import 'assets/css/responsive.css'
import 'assets/css/magnific-popup.css'




new Vue({
  render: h => h(App),
  router,
}).$mount('#app')

