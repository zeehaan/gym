import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import router from '@/router/index.js'

<<<<<<< HEAD
Vue.config.productionTip = false

=======

Vue.config.productionTip = false
>>>>>>> main
Vue.use(Vuetify) 

new Vue({
  router,
  vuetify: new Vuetify(), 
  render: h => h(App),
}).$mount('#app')
