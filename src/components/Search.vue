<template>
    <div id="search">
        <div class="container">
            <input type="text" class="form-control mt-2" placeholder="搜索歌曲" v-model="search" v-on:keydown.enter="searchsong" v-on:click="recommend">
            <table class="table table-striped" v-show="search==''">
                <tbody>
                    <tr v-for="(item,index) in hotkey" :key="index">
                        <td class="float-left"><span class="text-danger pr-2">{{index+1}}</span>{{item.k}}</td>
                        <td class="float-right">{{item.n/10000}}万</td>
                    </tr>
                </tbody>
            </table>
            <table class="table table-striped" v-show="!search==''">
                <tbody>
                    <tr v-for="(item,index) in song" :key="index">
                        <router-link :to="'/play/'+item.songmid" params:{freezeMon:item.songmid}>
                            <td class="float-left"><span class="text-danger pr-2">{{index+1}}</span>{{item.songname}}</td>
                            <td class="float-right">{{item.singer[0].name}}</td>
                        </router-link>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>


<script>
import axios from 'axios'
export default {
    name:'search',
    data(){
        return{
            search:'',
            hotkey:[],
            song:[],
            songpic:''
        }
    },
    created(){
        
    },
    methods:{
        recommend(){
            axios("/proxy/splcloud/fcgi-bin/gethotkey.fcg").then(data=>{
                //console.log(data.data.data.hotkey.slice(0,5));
                this.hotkey = data.data.data.hotkey.slice(0,7);
            })
        },
        searchsong(){
            axios("/proxy/soso/fcgi-bin/client_search_cp?catZhida=1&w="+this.search).then(data=>{
                console.log(JSON.parse(data.data.slice(9,data.data.length-1)))
                var str = JSON.parse(data.data.slice(9,data.data.length-1))
                this.song  = JSON.parse(data.data.slice(9,data.data.length-1)).data.song.list
                this.songpic = str.data.zhida.zhida_album.albumPic
                //console.log(this.songpic)
            })
        }
    }
}
</script>