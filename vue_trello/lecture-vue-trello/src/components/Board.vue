<template>
    <div>
        Board page NOw

        <div> bid No : {{bid}} </div>
        <router-link :to="`/b/${bid}/c/1`">Card 1</router-link>
        <router-link :to="`/b/${bid}/c/2`">Card 2</router-link>
        <router-link :to="`/b/${bid}/c/3`">Card 3</router-link>
        <hr />
        <router-view></router-view>
    


    </div>
</template>

<script>
export default {
    data(){
      return {
          bid:0
      }  
    },
    created(){      //보드가 생성될때 실행되는 영역

        console.log(this.$route.params.bid);
        this.bid=this.$route.params.bid;

    }
}
</script>

<style>

</style>