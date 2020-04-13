import Vue from 'vue'
import router from './router/index'

//window.axios = require('axios');

import App from './App.vue'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, 
  // axios,
  render:h =>h(App)
})
