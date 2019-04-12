import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);

export const bus = new Vue();

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
