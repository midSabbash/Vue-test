import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router/routes'
import store from './store/store'
import Vuelidate from 'vuelidate'

Vue.use(Vuelidate);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
