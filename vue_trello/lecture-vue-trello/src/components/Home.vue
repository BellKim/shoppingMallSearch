<template>
  <div>
      <h1> home </h1>


      <div>
        BoardList : 
        <div v-if="loading"> loading </div>
        <div v-else>
           API result {{boards}} 
           <div v-for="b in boards" :key="b.id">
             {{b}}
           </div>
        </div>
        <!-- <div v-if="error"> <pre>{{error}}</pre> </div> -->
        <ul>
          <li><!--동적 라우트 매칭 -->
            <router-link to="/b/1">borad 1</router-link>
          </li>
          <li>
            <router-link to="/b/2">borad 2</router-link>
          </li>
          <li>
            <router-link to="/b/3">borad 3</router-link>
          </li>
        </ul>
      </div>
     
  </div>
</template>

<script>
export default {
  data(){
    return {
      loading:false,
      boards:[],
      // error:''

    }
  },
  created(){
    this.fetchData()
  },
  methods:{
        fetchData(){
          this.loading = true
    
          axios.get('http://localhost:3000/boards')
            .then(res=> {   //// handle success
              this.boards = res.data
            })
            .catch(res => { // handle error
              // this.error = res.response.data
              // 1. 토큰정보가 없어서 500에러가 뜨거나
              //2. 401이 나왔을때
              this.$router.replace('/login')//토큰값이 없어서 오류가 떳을때 로그인 페이지로 넘어가도록 한다. 
            })
            .finally(() => {  // always executed
              this.loading = false
            })
        }
        /* httpRequest로 ajax 통신 하는 방법 */
        // fetchData(){
        //   this.loading = true
        //   const req = new XMLHttpRequest()
        //   req.open('GET', 'http://localhost:3000/health')
        //   req.send()
        //   req.addEventListener('load', ()=>{
        //     this.loading = false
        //     this.apiRes = {
        //       status:req.status,
        //       statusText:req.statusText,
        //       response:JSON.parse(req.response)
        //     }
        //   })
        //   }


  }

}
</script>

<style>

</style>