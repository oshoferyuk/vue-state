// import Vue from 'vue'
import Vue from 'vue/dist/vue.js';
import App from './App.vue'
import Tabs from 'vue-tabs-component';

Vue.use(Tabs);

new Vue({
  render: h => h(App)
}).$mount('#app')

