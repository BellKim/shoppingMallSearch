<template>
    <div>
        Board page NOw

        <div v-if="loading"> loading board NOW... </div>
        <div v-else>
            <div> bid No : {{bid}} </div>
            <router-link :to="`/b/${bid}/c/1`">Card 1</router-link>
            <router-link :to="`/b/${bid}/c/2`">Card 2</router-link>
            <router-link :to="`/b/${bid}/c/3`">Card 3</router-link>
         </div>


        <hr />
        <router-view></router-view>
    


    </div>
</template>

<script>
export default {
    data(){
      return {
          bid:0,
          loading:false         //loading의 초기값은 false로 둔다. //?왜? 
      }  
    },
    created(){      //보드가 생성될때 실행되는 영역

        console.log(this.$route.params.bid);
        this.fetchData()
        this.bid=this.$route.params.bid;

    },
    methods:{
        fetchData(){
            //backend api를 호출하고 , 데이터를 요청하는 역할을 하는 함수이다. 
            //데이터를 받아서 데이터 객체에 추가해주는 역할을 한다. 
            this.loading=true       //데이터를 받아오는동안 로딩중을 출력하도록한다.
            //api호출 시뮬레이션 하기 위해서 고의적으로 시간지연을 해준다.(실제로는 사용하지 않음. 로딩화면을 보기위해서 인위적으로 딜레이를 생성한것이다.)
            setTimeout(() => {
                this.bid = this.$route.params.bid
                this.loading=false
            }, 500)//0.5초 지연.

        }
    }
}
</script>

<style>

</style>