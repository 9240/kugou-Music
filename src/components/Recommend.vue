<template>
    <div id="recommend">
        <div id="demo" class="carousel slide" data-ride="carousel">
            <ul class="carousel-indicators">
                <li data-target="#demo" data-slide-to="0" class="active"></li>
                <li data-target="#demo" data-slide-to="1"></li>
                <li data-target="#demo" data-slide-to="2"></li>
                <li data-target="#demo" data-slide-to="3"></li>
                <li data-target="#demo" data-slide-to="4"></li>
            </ul>
    <!-- 轮播图片 -->
            <div class="carousel-inner">
                <div class="carousel-item active"><img :src="img[0]" class="img-fluid"></div>
                <div class="carousel-item"><img  :src="img[1]" class="img-fluid"></div>
                <div class="carousel-item"><img  :src="img[2]" class="img-fluid"></div>
                <div class="carousel-item"><img  :src="img[3]" class="img-fluid"></div>
                <div class="carousel-item"><img  :src="img[4]" class="img-fluid"></div>
            </div>
        </div>
        <h6 class="p-2">电台</h6>
        <div>
            
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name:'recommend',
    data(){
        return{
            img:[],
            radioList:[{
                
            }],
        }
    },
    created(){
        axios("/proxy/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg").then(data=>{
            //console.log(data);
            for (let i in data.data.data.slider){
                this.img.push(data.data.data.slider[i].picUrl)
            }
            for(let i in data.data.data.radioList){
                
            }
        })
    }
}
</script>


<style scoped>

</style>
