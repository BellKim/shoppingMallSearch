<template>
  <div>
      <h1> home </h1>


      <div>
        BoardList : 
        <div v-if="loading"> loading </div>
        <div v-else> API result {{apiRes}} </div>
        <div v-if="error"> <pre>{{error}}</pre> </div>
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
      apiRes:'',
      error:''

    }
  },
  created(){
    this.fetchData()
  },
  methods:{
        fetchData(){
          this.loading = true
    
          axios.get('http://localhost:3000/health')
            .then(res=> {   //// handle success
              this.apiRes = res.data
            })
            .catch(res => { // handle error
              this.error = res.response.data
    
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