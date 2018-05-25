import Vue from 'vue'
import Router from 'vue-router'
import Recommend from '@/components/Recommend'
import Rank from '@/components/Rank'
import NavBar from '@/components/NavBar'
import Search from '@/components/Search'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'recommend',
      components:{
        nav:NavBar,
        default:Recommend
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
      path:'/search',
      name:'search',
      components:{
        nav:NavBar,
        default:Search
      }
    }
  ]
})
