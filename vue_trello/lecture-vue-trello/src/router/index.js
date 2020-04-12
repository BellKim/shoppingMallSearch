import Vue from 'vue'
import VueRouter  from 'vue-router'
import App from '../App'

import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import Board from '../components/Board.vue'
import Card from '../components/Card.vue'
import NotFound from '../components/NotFound.vue'



Vue.use(VueRouter)

const requireAuth = (to, from , next) =>{
    //isAuth를 조회시, 토큰값이 있다면 값이 나올것이고, 없다면 undefine이 나올것이다.
  const isAuth = localStorage.getItem('token')
  // const loginPath = `/login?rPath=${encodeURIComponent(to.path)}`
  const loginPath = `/login?rPath=${encodeURIComponent(to.path)}`
  //로그인을 하러 갔다가 로그인이 완료되면 현재 페이지로 돌아와라 (quary string 으로 리턴페스 정보를 작성해준다.)
  //쿼리문자열이기 때문에 encodeURIComponent 아스키 문자로 인코딩해줘야한다.
  isAuth ? next() : next(loginPath)
  //어스값이 있으면(토큰값) next함수로 라우트 로직을 계속 수행하고, 아니면 loginpath로 이동하는것이다.
}



const router = new VueRouter({
  mode:'history',
  //#가 붙은경우: 해쉬백 모드라는 것이 있는데 
  //히스토리가 있을경우 #가 붙는경우가 있다. 
  //history 모드를 선언해주면 /#/ 가 붙지 않는다.
  routes:[
    {path:'/', component:Home, beforeEnter: requireAuth },

    {path:'/login', component: Login},

    {path:'/b/:bid', component: Board, beforeEnter: requireAuth,
      children: [
        {path:'c/:cid', component: Card, beforeEnter: requireAuth }  //children에는 path 맨앞에 / 가 안붙는다.
      ]
    },

    {path:'*', component:NotFound}
  ]

})


export default router