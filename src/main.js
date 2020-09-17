import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuesax from 'vuesax'
// import { vsButton, vsSelect, vsPopup } from 'vuesax'
import 'vuesax/dist/vuesax.css'

// Vue.use(vsButton)
// Vue.use(vsSelect)
// Vue.use(vsPopup)
Vue.use(Vuesax)
Vue.use(VueAxios, axios)
Vue.config.productionTip = false

new Vue({
    router,
    Vuesax,
    render: h => h(App)
}).$mount('#app')