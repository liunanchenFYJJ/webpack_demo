<!--
 * @Descripttion: 
 * @version: 
 * @Author: https://github.com/liunanchenFYJJ
 * @Date: 2020-03-13 09:42:26
 * @LastEditors: https://github.com/liunanchenFYJJ
 * @LastEditTime: 2020-03-14 15:04:21
 -->
<template>
  <div>
    echarts示例页面
    <div id="myCharts"></div>
    <!-- TODO: 绑定到div和canvas和svg的区别？ 为什么canvas的拉长变形 -->
    <!-- svg不变形 -->
    <!-- <canvas id="myCharts" style="height: 400px; width: 400px;"></canvas> -->
    <!-- <svg id="myCharts" style="height: 400px; width: 400px;"></svg> -->
  </div>
</template>
<script>
import echarts from 'echarts';
import lodash from 'lodash';

export default {
  name: 'Bar',
  data() {
    return {
      myCharts: null,
      option: {
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      },
    };
  },
  mounted() {
    this.myCharts = echarts.init(document.querySelector('#myCharts'), 'dark', {
      devicePixelRatio: .4,
      renderer: 'svg',
      width: 440,
      height: 440,
    });
    console.log(this.myCharts);
    this.initMyCharts();
    // console.log(this.myCharts.resize());
    window.onresize = _.debounce(() => {
      console.log('resize');
      console.log(this);
      // this.myCharts.resize({
      //   width: 330,
      //   height: 330,
      //   silent: true,
      // });
    }, 1000);
  },
  methods: {
    initMyCharts() {
      this.myCharts.setOption(this.option);
    },
  },  
}
</script>
