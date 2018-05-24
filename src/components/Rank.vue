<template>
    <div id="rank">
        <div><img src="" alt=""></div>
        <div><h5></h5></div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name:"rank",
    data(){
        return{

        }
    },
    created(){
        axios("/proxy/rank/list?json=true").then(data=>{
            console.log(data)
        })
    }
}
</script>
