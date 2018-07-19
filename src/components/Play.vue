<template>
    <div id="play">
        <h4 class="font-weight-bold mt-2">{{songname}}</h4>
        <p class="text-info">{{songmsg.name}}</p>
        <img :src="picurl" alt="" class="rounded-circle mt-2" v-show="picid" style="width:220px;height:220px" v-on:click="play" ref="pic">
        <img src="http://www.kugou.com/yy/static/images/play/default.jpg" alt="" class="rounded-circle mt-2" v-show="!picid">
        <audio :src="url" v-show="songmid" ref="music"></audio>
        <h2 v-show="!songmid">抱歉,你找的歌曲不存在</h2>
        
    </div>
</template>


<script>
import axios from 'axios'
export default {
    name:'play',
    data(){
        return{
            songmid:this.$route.params.songmid,
            songname:this.$route.params.songname,
            index:this.$route.params.index,
            url:'',
            songmsg:[],
            picid:'',
            picurl:'',
            onoff:false,
            timer:''
        }
    },
    created(){
        if(this.songmid){
            this.url = 'http://ws.stream.qqmusic.qq.com/C100'+this.songmid+'.m4a?fromtag=0&guid=126548448'
        }
        console.log(this.url)
        axios("/proxy/soso/fcgi-bin/client_search_cp?catZhida=1&w="+this.songname).then(data=>{
            //console.log(JSON.parse(data.data.slice(9,data.data.length-1)))
            this.songmsg = JSON.parse(data.data.slice(9,data.data.length-1)).data.song.list[this.index].singer[0]
            this.picid = JSON.parse(data.data.slice(9,data.data.length-1)).data.song.list[this.index].albummid
            this.picurl = 'https://y.gtimg.cn/music/photo_new/T002R150x150M000'+this.picid+'.jpg'
            //console.log(this.songmsg)
        })
    },
    methods:{
        play(){
            if(!this.onoff){
                this.$refs.music.play();
                this.timer = setInterval(()=>{
                    this.$refs.pic.style.transform = `rotateZ(${this.$refs.music.currentTime*8}deg)`
                },100)
            }else{
                this.$refs.music.pause();
            }
            this.onoff = !this.onoff
        }
    },
    destroyed(){
        clearInterval(this.timer);
    }
}
</script>


<style scoped>

</style>
