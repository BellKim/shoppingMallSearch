<template>
    <div>
        <h3> card output </h3>

        <div v-if="loading"> loading </div>
        <div v-else>
            <h4> cid : {{cid}} </h4>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            cid:0,
            loading:false
        }
    },
    watch:{
        //라우터는 변경되었지만 화면이 변경안됬으니 watch를 이요하여 경로를 리스닝할수있다.
        // '$route'(){//감시자
        //     // this.cid=this.$route.params.cid;
        //     this.fetchData()
        // }
        '$route':{
            handler:'fetchData',
            immediate:true      //create()의 중복역할. $route()의 즉시실행역할을 한다.
        }
    },
    // created(){
    //     console.log(this.$route.params)
    //     //this.cid=this.$route.params.cid//created일때만 정보가 갱신된다. 
    //     this.fetchData()
    // },
    methods:{
        fetchData(){
            this.loading=true
            setTimeout(() => {
                this.cid = this.$route.params.cid
                this.loading=false
            },500)
        }
    }


}
</script>

<style>

</style>