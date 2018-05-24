<template>
    <div id="navbar" class="container">
        <h5 class="fixed-top bg-primary p-2"><img src="http://m.kugou.com/v3/static/images/index/logo.png" alt=""></h5>
        <ul class="nav nav-tabs justify-content-around text-dark">
            <li class="nav-item"><router-link to="/" class="nav-link">新歌</router-link></li>
            <li class="nav-item"><router-link to="/rank" class="nav-link">排行</router-link></li>
            <li class="nav-item"><router-link to="/plist" class="nav-link">歌单</router-link></li>
            <li class="nav-item"><router-link to="/singer" class="nav-link">歌手</router-link></li>
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
