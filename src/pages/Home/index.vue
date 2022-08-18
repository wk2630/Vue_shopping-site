<template>
  <div>
      <!-- 三级联动全局组件，已经注册为全局组件，因此不需要引入 -->
      <typeNav/>
      <ListContainer/>
      <Recommend/>
      <Rank/>
      <Link/>
      <Floor v-for="(floor,index) in floorList" :key="floor.id" :list="floor"/>
      <Brand/>
  </div>
</template>

<script>
//引入其他组件
import ListContainer from './ListContainer'
import Recommend from './Recommend'
import Rank from './Rank'
import Link from './Link'
import Floor from './Floor'
import Brand from './Brand'
import {mapState} from 'vuex'
export default {
    name:'',
    components:{
      ListContainer,
      Recommend,
      Rank,
      Link,
      Floor,
      Brand,
    },
    mounted() {
      //派发active，获取floor组件的数据
      this.$store.dispatch("getFloorList");
      // //获取用户信息在首页展示
      // this.$store.dispatch("getUserInfo");
    },
    computed:{
      ...mapState({
        floorList:state=>state.home.floorList
      })
    }
}
</script>

<style>

</style>