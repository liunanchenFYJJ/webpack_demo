
import Vue from 'vue';
import App from '@/App';
import router from '@/router'; // vue-router的实例 项目比较大时 独立成模块进行维护

new Vue({
  el: '#app',
  router: router,
  // render: (h) => h('div', {}, 'hello webpack'),
  render: (h) => h(App),
})
