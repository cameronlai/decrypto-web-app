import Vue from 'vue'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

Vue.use(Vuetify)
Vue.use(VueRouter)


new Vue({
  vuetify : new Vuetify(),
  router,
  render: h => h(App),
}).$mount('#app')
