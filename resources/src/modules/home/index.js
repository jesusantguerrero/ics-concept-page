import Vue from 'vue';
import Home from './Home';

Vue.config.productionTip = false;

/* eslint-disable no-new */

new Vue({
  el: '#home',
  template: '<Home/>',
  components: { Home },
});
