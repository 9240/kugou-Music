import Vue from 'vue'
import Router from 'vue-router'
import Recommend from '@/components/Recommend'
import Rank from '@/components/Rank'
import NavBar from '@/components/NavBar'
import Search from '@/components/Search'
import SingleRank from '@/components/SingleRank'
import Play from '@/components/Play'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/kugou-Music',
      name: 'recommend',
      components:{
        nav:NavBar,
        default:Recommend
      } 
    },
    {
      path:'/kugou-Music/rank',
      name:'rank',
      components:{
        nav:NavBar,
        default:Rank
      }
    },
    {
      path:'/kugou-Music/search',
      name:'search',
      components:{
        nav:NavBar,
        default:Search
      }
    },
    {
      path:'/kugou-Music/singlerank',
      name:'singlerank',
      components:{
        nav:NavBar,
        default:SingleRank
      }
    },
    {
      path:'/kugou-Music/play',
      name:'play',
      components:{
        nav:NavBar,
        default:Play
      }
    }
  ]
})
