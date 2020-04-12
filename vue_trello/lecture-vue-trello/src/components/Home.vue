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
// import axios from 'axios'
import {board} from '../api'  //api/index.js 에 board객체를 가져오는것이다.

export default {
  data(){
    return {
      loading:false,
      boards:[],
    }
  },
  created(){
    this.fetchData()
  },
  methods:{
        fetchData(){
          this.loading = true

          board.fetch()
          .then(data => {
            this.boards = data
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