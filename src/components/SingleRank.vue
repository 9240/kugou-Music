<template>
    <div id="singlerank">
        {{msg}}
    </div>
</template>

<script>
import axios from 'axios'
export default {
    props:{
        msg:{
            
        }
    },
    name:'singlerank',
    data(){
        return{
            
        }
    },
    created(){
        axios("/proxy/v8/fcg-bin/fcg_v8_toplist_cp.fcg?date=2018-05-26&topid=4&type=top&song_num=30").then(data=>{
            
        })
    }
}
</script>

<style scoped>

</style>
