import Vue from 'vue';

import App from './App.vue';
//引入路由相关文件
import router from '@/router';
//引入仓库
import store from '@/store';
//三级联动组件-全局组件
import typeNav from '@/components/TypeNav';
import Carsousel from '@/components/Carousel';
import Pagination from '@/components/Pagination';
import { MessageBox } from 'element-ui';
//引入MockServe.js
import '@/mock/mockServe';
//引入swiper样式
import "swiper/css/swiper.css";
//统一接口api文件夹里面全部请求函数,统一引入
import * as API from '@/api';
import atm from '@/assets/1.gif';
// 引入插件
import VueLazyload from 'vue-lazyload'
//注册插件
Vue.use(VueLazyload, {
  //懒加载默认图片
  loading: atm
})
//第一个参数全局组件的名字，第二个参数是哪个组件
Vue.component(typeNav.name, typeNav)
Vue.component(Carsousel.name, Carsousel);
Vue.component(Pagination.name, Pagination);
//ElementUI注册组件的时候，还有一种写法，挂在原型上
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
//引入自定义组件
import myPlugins from '@/plugins/myPlugins';
Vue.use(myPlugins,{
  name:'upper'
});
//引入表单校验插件
import "@/plugins/validate"
new Vue({
  render: h => h(App),
  //全局事件总线
  beforeCreate() {
    Vue.prototype.$bus = this;
    Vue.prototype.$API = API;
  },
  //注册路由
  router,
  //注册仓库
  store,
}).$mount('#app')
