<template>
    <div id="newsong">
        <div id="demo" class="carousel slide" data-ride="carousel">
            <ul class="carousel-indicators">
                <li data-target="#demo" data-slide-to="0" class="active"></li>
                <li data-target="#demo" data-slide-to="1"></li>
                <li data-target="#demo" data-slide-to="2"></li>
                <li data-target="#demo" data-slide-to="3"></li>
            </ul>
    <!-- 轮播图片 -->
            <div class="carousel-inner">
                <div class="carousel-item active p-1"><img :src="img[0]" class="img-fluid"></div>
                <div class="carousel-item p-1"><img  :src="img[1]" class="img-fluid"></div>
                <div class="carousel-item p-1"><img  :src="img[2]" class="img-fluid"></div>
                <div class="carousel-item p-1"><img  :src="img[3]" class="img-fluid"></div>
            </div>
        </div>
        <ul class="list-group" v-for="(item,index) in content" :key="index">
            <li class="list-group-item">{{item.filename}}</li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name:'newsong',
    data(){
        return{
            img:[],
            content:{}
        }
    },
    created(){
        axios("/proxy/?json=true").then(({data})=>{
            for(var i in data.banner){
                this.img.push(data.banner[i].imgurl)
                console.log(i)
            }
            this.content = data.data;
            //console.log(this.content)
        })
    }
}
</script>


<style scoped>

</style>
