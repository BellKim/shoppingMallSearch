import Vue from 'vue'
import VueRouter  from 'vue-router'
import App from '../App'

import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import NotFound from '../components/NotFound.vue'



Vue.use(VueRouter)

const router = new VueRouter({
  mode:'history',
  //#가 붙은경우: 해쉬백 모드라는 것이 있는데 
  //히스토리가 있을경우 #가 붙는경우가 있다. 
  //history 모드를 선언해주면 /#/ 가 붙지 않는다.
  routes:[
  {path:'/', component:Home},

  {path:'/login', component: Login},

  {path:'*', component:NotFound}
  ]

})


export default router