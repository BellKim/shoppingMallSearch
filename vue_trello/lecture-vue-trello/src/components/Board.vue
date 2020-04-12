<template>
    <div>
        Board page NOw

        <div> bid No : {{bid}} </div>


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