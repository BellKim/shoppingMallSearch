<template>
  <div id="app">

      <!-- 해더 -->

      <!-- 본문 -->
      <h2> hello world tjqnxj여기서부터 코드를 시작합니다.</h2>
      <navbar></navbar>



      <router-view></router-view> <!-- 라우터에의해서 대체되는 영역이다 루트컴포넌트.  -->

      <!-- 푸터 -->

  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  data(){
    return {

    }
  },
  components: {
    Navbar
  }
}
</script>

<style>

</style>
