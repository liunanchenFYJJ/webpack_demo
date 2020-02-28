import Vue from 'vue';
import VueRouter from 'vue-router';
import Layout from '@/pages/Layout';
import Foo from '@/pages/Foo';
import Bar from '@/pages/Bar';
import User from '@/pages/User';

Vue.use(VueRouter); // 注意: 必须使用Vue.use() 否则所有vue-router相关的组件 不能被识别

const routes = [
  {
    path: '/',
    component: Layout,
  },
  {
    path: '/foo',
    component: Foo,
  },
  {
    path: '/bar',
    component: Bar,
  },
  {
    path: '/user/:id/age/:num',
    component: User,
  },
];

export default new VueRouter({
  routes
})