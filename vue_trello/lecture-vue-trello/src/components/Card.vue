<template>
    <div>
        <h3> card output </h3>
        <h4> cid : {{cid}} </h4>
    </div>
</template>

<script>
export default {
    data(){
        return{
            cid:0
        }
    },
    watch:{
        //라우터는 변경되었지만 화면이 변경안됬으니 watch를 이요하여 경로를 리스닝할수있다.
        '$route'(){
            this.cid=this.$route.params.cid;
        }
    },
    created(){
        console.log(this.$route.params)
        this.cid=this.$route.params.cid//created일때만 정보가 갱신된다. 
    }


}
</script>

<style>

</style>