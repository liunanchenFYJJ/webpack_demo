<template>
  <div>
    Layout
  </div>
</template>
<script>
export default {
  name: 'Layout',
  mounted() {
    console.log($.prototype);
    console.log('Layout mounted');
    this.test_final();
  },
  methods: {
    test_normal() {
      return 'normal function';
    },
    async test_async() {
      let a = '12';
      setTimeout(() => {
        a = 'async function';
      }, 2000);
      return a;
    },
    async test_final() {
      let a = this.test_normal();
      let b = await this.test_async();
      console.log(a);
      console.log(b);
    }
  }
}
</script>