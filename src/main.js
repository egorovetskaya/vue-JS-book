import Vue from 'vue'
import App from './App'
import router from  './router'
import 'animate.css'

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
