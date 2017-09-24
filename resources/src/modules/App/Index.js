import router from '@/router';
import Vue from 'vue';
import App from './App';

Vue.config.productionTip = false;
/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  template: '<app/>',
  components: { App },
});
