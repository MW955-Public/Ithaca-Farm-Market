import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import VueQrcodeReader from "vue-qrcode-reader";
import SuiVue from 'semantic-ui-vue';
import 'semantic-ui-css/semantic.min.css';
//import VendorStamps from './GlobalVarable';


Vue.use(SuiVue);
Vue.use(VueQrcodeReader);

// import ToggleSwitch from 'vuejs-toggle-switch'
// Vue.use(ToggleSwitch)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
