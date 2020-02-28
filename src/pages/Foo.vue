<template>
  <div>
    foo
  </div>
</template>
<script>
export default {
  name: 'Foo',
  mounted() {
    /** 
     * 由于是使用 Vue.use(VueRouter) 注册的路由组件
     * 可以直接使用<router-link> <router-view>标签
     * 可以直接通过this.$router直接访问路由对象
     * 可以直接通过this.$route直接访问当前页面路由
     */
    console.log(this.$router); // TODO: this.$router详解
    console.log(this.$route); // TODO: this.$route详解
  },
}
</script>