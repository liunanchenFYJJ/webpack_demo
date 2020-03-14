<!--
 * @Descripttion: 
 * @version: 
 * @Author: https://github.com/liunanchenFYJJ
 * @Date: 2020-03-14 09:34:07
 * @LastEditors: https://github.com/liunanchenFYJJ
 * @LastEditTime: 2020-03-14 11:18:16
 -->
## **echarts 使用参数说明**
***
- echarts
- echartsInstance
- action
- events
***
## echarts
***
#### echarts.init(dom, ?theme, ?opts)
* dom: 绑定的dom元素
* theme: 'vintage' 'dark' 'macarons' 'infographic' 'shine' 'roma'
  或者定制主题 [详见](https://echarts.apache.org/zh/download-theme.html)
* opts:
```
  {
    devicePixelRatio: Number,
    renderer: 'svg' 'canvas',
    width: Number 例如 440, // 会覆盖dom上的长宽
    height: 440,
  }
```
***
#### echarts.connect(group)
***
## echartsInstance
***
#### echartsInstance.group 获取图表实例联动的相关信息
#### echartsInstance.setOption 设置图表实例的万能接口 √
#### echartsInstance.getOption 获取图表实例的option对象
#### echartsInstance.getWidth() 获取图表实例容器的宽度
#### echartsInstance.getHeight() 获取图表实例容器的高度
#### echartsInstance.getDom() 获取图表实例容器
#### echartsInstance.resize() 改变图表尺寸，在容器大小发生改变时，手动调用
***
## action
***
## events
***
