import Vue from 'vue'
import App from './App.vue'


const Login = {template : '<div> Login Page </div>'}

const routes = {
  '/' : App, 
  '/login' : Login
}


Vue.config.productionTip = false





new Vue({

  //render: h => h(App),    //화면을 그리는 rend함수

  el:'#app',
  computed: {
    VueComponent() {
      return routes[window.location.pathname] || 
      { template : '<div> 404 page Not found </div>' }
    }
  },


  render(h) {
    return h(this.VueComponent)
  }



}).$mount('#app')
