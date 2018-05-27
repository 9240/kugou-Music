<template>
    <div id="singlerank">
        <table class="table table-striped">
            <tbody>
                <tr v-for="(item,index) in songlist" :key="index">
                    <router-link :to="{name:'play',params:{songmid:item.data.songmid,songname:item.data.songname,index:index}}">
                        <td class="float-left"><span class="text-danger pr-2">{{index+1}}</span>{{item.data.songname}}</td>
                        <td class="float-right">{{item.data.singer[0].name}}</td>
                    </router-link>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name:'singlerank',
    data(){
        return{
            id:this.$route.params.id,
            url:this.$route.params.url,
            songlist:[]
        }
    },
    created(){
        axios("/proxy/"+this.url).then(data=>{
            this.songlist = data.data.songlist
            //console.log(this.songlist)
        })
    }
}
</script>

<style scoped>

</style>
