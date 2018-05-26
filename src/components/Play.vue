<template>
    <div id="play">
        <audio :src="url" controls></audio>
        <!-- <img :src="songpic" alt=""> -->
        {{songpic}}
    </div>
</template>


<script>
import axios from 'axios'
export default {
    name:'play',
    data(){
        return{
            songmid:this.$route.params.songmid,
            songpic:this.$route.params.freezeMon,
            url:''
        }
    },
    created(){
        this.url = 'http://ws.stream.qqmusic.qq.com/C100'+this.songmid+'.m4a?fromtag=0&guid=126548448'
        axios("/proxy/soso/fcgi-bin/client_search_cp?w=").then(data=>{
            
        })
    }
}
</script>


<style>

</style>
