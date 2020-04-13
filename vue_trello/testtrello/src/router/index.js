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
    //isAuth�� ��ȸ��, ��ū���� �ִٸ� ���� ���ð��̰�, ���ٸ� undefine�� ���ð��̴�.
  const isAuth = localStorage.getItem('token')
  // const loginPath = `/login?rPath=${encodeURIComponent(to.path)}`
  const loginPath = `/login?rPath=${encodeURIComponent(to.path)}`
  //�α����� �Ϸ� ���ٰ� �α����� �Ϸ�Ǹ� ���� �������� ���ƿͶ� (quary string ���� �����佺 ������ �ۼ����ش�.)
  //�������ڿ��̱� ������ encodeURIComponent �ƽ�Ű ���ڷ� ���ڵ�������Ѵ�.
  isAuth ? next() : next(loginPath)
  //����� ������(��ū��) next�Լ��� ���Ʈ ������ ��� �����ϰ�, �ƴϸ� loginpath�� �̵��ϴ°��̴�.
}


const router = new VueRouter({
  mode:'history',
  //#�� �������: �ؽ��� ����� ���� �ִµ� 
  //�����丮�� ������� #�� �ٴ°�찡 �ִ�. 
  //history ��带 �������ָ� /#/ �� ���� �ʴ´�.
  routes:[
    {path:'/', component:Home, beforeEnter: requireAuth },

    {path:'/login', component: Login},

    {path:'/b/:bid', component: Board, beforeEnter: requireAuth,
      children: [
        {path:'c/:cid', component: Card, beforeEnter: requireAuth }  //children���� path �Ǿտ� / �� �Ⱥٴ´�.
      ]
    },

    {path:'*', component:NotFound}
  ]

})

export default router
