<template>
    <div id="navbar" class="container">
        <h5 class="fixed-top bg-primary p-2"><img src="http://m.kugou.com/v3/static/images/index/logo.png" alt=""></h5>
        <ul class="nav nav-tabs justify-content-around text-dark">
            <li class="nav-item"><router-link to="/kugou-Music" class="nav-link">新歌</router-link></li>
            <li class="nav-item"><router-link to="/kugou-Music/rank" class="nav-link">排行榜</router-link></li>
            <li class="nav-item"><router-link to="/kugou-Music/search" class="nav-link">搜索</router-link></li>
        </ul>
    </div>
</template>

<script>
export default {
    name:'navbar',
    data(){
        return{
            
        }
    }
}
</script>
