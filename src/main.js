import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import vuex from '@/store/store';

Vue.config.productionTip = false;

new Vue({
  vuetify,
  vuex,
  render: h => h(App),
}).$mount('#app');
