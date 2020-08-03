import Vue from 'vue'
import App from './App.vue'

// import Bulma from 'bulma'
import './assets/css/main.css'
import VModal from 'vue-js-modal'
import VueI18n from 'vue-i18n'
import router from './router'

// Vue.use(Bulma)
Vue.use(VueI18n)
Vue.use(VModal)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
