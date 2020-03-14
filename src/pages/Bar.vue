<!--
 * @Descripttion: 
 * @version: 
 * @Author: https://github.com/liunanchenFYJJ
 * @Date: 2020-03-13 09:42:26
 * @LastEditors: https://github.com/liunanchenFYJJ
 * @LastEditTime: 2020-03-13 17:26:29
 -->
<template>
  <div>
    echarts示例页面
    <div id="myCharts" style="height: 400px; width: 400px;"></div>
    <!-- TODO: 绑定到div和canvas的区别？ 为什么canvas的拉长变形 -->
    <!-- <canvas id="myCharts" style="height: 400px; width: 400px;"></canvas> -->
  </div>
</template>
<script>
import echarts from 'echarts';

export default {
  name: 'Bar',
  data() {
    return {
      myCharts: null,
    };
  },
  mounted() {
    this.myCharts = echarts.init(document.querySelector('#myCharts'));
    console.log(this.myCharts);
    this.initMyCharts();
  },
  methods: {
    initMyCharts() {
      this.myCharts.setOption({
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
      });
    },
  },  
}
</script>
