<template>
  <div>
    <Header></Header>
    <!-- 路由组件出口的地方 -->
    <router-view></router-view>
    <!-- //在home和search显示，在登陆和注册时隐藏 -->
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
//引入
import Header from './components/Header'
import Footer from './components/Footer';
export default {
  name: '',
  data() {
    return {
      msg:"abc"
    }
  },
  components: {
    Header,
    Footer,
  },
  mounted() {
    //派发一个action获取商品分类的三级列表数据
    this.$store.dispatch("getCategoryList");
  },
}
</script>

<style scoped>

</style>
