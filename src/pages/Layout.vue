<template>
  <div>
    Layout
    <router-link to="foo">foo</router-link>
    <router-link to="bar">bar</router-link>
    <button @click="toFoo">foo</button>
    <button>bar</button>
  </div>
</template>
<script>
export default {
  name: 'Layout',
  mounted() {
    console.log($.prototype);
    console.log(axios.prototype.constructor === axios);
    console.log('Layout mounted');
    this.getFinalWeather();
  },
  methods: {
    toFoo() {
      this.$router.push({path: 'test', query: {name: 's'}});
    },
    /** 2. async await */
    // 只需要关注调用接口，不需要关注 成功/失败 的逻辑
    // return <Promise>
    async getCode() {
      return $.ajax({
        type: 'GET',
        url: 'https://apis.map.qq.com/ws/location/v1/ip?key=XWEBZ-RQ2LU-OBGVA-4VNAX-4YU62-B2FDP&output=jsonp',
        dataType: 'jsonp',
        data: {},
      })
    },
    async getWeather() {
      let res = await this.getCode();
      console.log(res);
      return $.ajax({
        type: 'GET',
        url: 'https://restapi.amap.com/v3/weather/weatherInfo?city=' + res.result.ad_info.adcode + '&key=357209990ef0a6bf419d72b3f8afcc93&extensions=all',
        data: {},
      })
    },
    async getFinalWeather() {
      let res = await this.getWeather();
      console.log('finally!');
      console.log(res);
    },
    /** 1. 回调地狱 */
    /** 注: $.ajax thenable 最新支持 done fail always
     * remove success error complete
     */
    getLocationWeather () {
      $.ajax({
        type: 'GET',
        url: 'https://apis.map.qq.com/ws/location/v1/ip?key=XWEBZ-RQ2LU-OBGVA-4VNAX-4YU62-B2FDP&output=jsonp',
        dataType: 'jsonp',
        data: {},
        success: function (res) {
          if (res.message === 'query ok' && res.status === 0 && Object.keys(res.result).length > 0) {
            $.ajax({
              type: 'GET',
              url: 'https://restapi.amap.com/v3/weather/weatherInfo?city=' + res.result.ad_info.adcode + '&key=357209990ef0a6bf419d72b3f8afcc93&extensions=all',
              data: {},
              success: function (res) {
                // 逻辑代码
              },
              error: function (XMLHttpRequest, textStatus, errorThrown) {}
            })
          }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {}
      })
    },
  }
}
</script>