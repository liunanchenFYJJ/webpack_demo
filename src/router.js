import Vue from 'vue';
import VueRouter from 'vue-router';
import Layout from '@/pages/Layout';

Vue.use(VueRouter); // 注意: 必须使用Vue.use() 否则所有vue-router相关的组件 不能被识别

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: Layout,
    }
  ]
})