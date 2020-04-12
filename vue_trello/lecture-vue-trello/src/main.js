// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
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
