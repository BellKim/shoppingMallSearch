<template>
  <div id="app">

      <!-- 해더 -->

      <!-- 본문 -->
      <h2> hello world tjqnxj여기서부터 코드를 시작합니다.</h2>



      <router-link to="/"> home</router-link>
      <router-link to="/login"> login</router-link>



      <router-view></router-view> <!-- 라우터에의해서 대체되는 영역이다 루트컴포넌트.  -->

      <!-- 푸터 -->

  </div>
</template>

<script>


export default {
  name: 'App',
  data(){
    return {

    }
  },
  components: {
    
  }
}
</script>

<style>

</style>
