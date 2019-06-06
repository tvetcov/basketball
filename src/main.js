import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import Vuex from 'vuex'
import store from './storage/index'


import router from './router'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false;
Vue.use(BootstrapVue, VueRouter, Vuex);
new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
