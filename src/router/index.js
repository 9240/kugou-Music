import Vue from 'vue'
import Router from 'vue-router'
import NewSong from '@/components/NewSong'
import Rank from '@/components/Rank'
import Search from '@/components/Search'
import NavBar from '@/components/NavBar'
import Plist from '@/components/Plist'
import Singer from '@/components/Singer'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'newsong',
      components:{
        nav:NavBar,
        default:NewSong
      } 
    },
    {
      path:'/rank',
      name:'rank',
      components:{
        nav:NavBar,
        default:Rank
      }
    },
    {
      path:'/plist',
      name:'plist',
      components:{
        nav:NavBar,
        default:Plist
      }
    },
    {
      path:'/singer',
      name:'singer',
      components:{
        nav:NavBar,
        default:Singer
      }
    },
    {
      path:'/search',
      name:'search',
      component:Search
    }
  ]
})
