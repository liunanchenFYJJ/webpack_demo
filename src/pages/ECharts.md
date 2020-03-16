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
```
  {
    title: {
      id: [TODO:],
      show: Boolean, // 默认true
      text: String, // 图标题目
      link: String, // 图标题目链接
      target: String, // 链接打开方式，默认'blank' 'self'
      textStyle: { // 文字样式
        color: String,
        fontStyle: String, 'normal' 'italic' 'oblique',
        fontWeight: String | Number, 'normal' 'bold' 'lighter' 'bolder' 或者 100 200 ...
        fontFamily: String, 'sans-serif',
        fontSize: Number, 18,
        rich: [TODO:] Object, 在 rich 里面，可以自定义富文本样,式。利用富文本样式，可以在标签中做出非常丰富的效果。
        大部分属性同textStyle下的属性
        lineHeight: 56, 如果有rich,则覆盖rich的样式
        width: 一般不设定rich属性，不用指定
        height: 一般不设定rich属性，不用指定
        textBorderColor: 'transparent',
        textBorderWidth,
        // 以下四个属性，设置阴影
        textShadowColor,
        textShadowBlur,
        textShadowOffsetX,
        textShadowOffsetY,
      },
      subtext: // 类似'text'
      sublink: //
      subtarget: //
      subtextStyle: ,//
      textAlign: String, // 水平对齐
    }
  }
```
#### echartsInstance.getOption 获取图表实例的option对象
#### echartsInstance.getWidth() 获取图表实例容器的宽度
#### echartsInstance.getHeight() 获取图表实例容器的高度
#### echartsInstance.getDom() 获取图表实例容器
#### echartsInstance.resize() 改变图表尺寸，在容器大小发生改变时，手动调用
#### echartsInstance.getDataURL() 导出图表图片
***
## action
***
## events
***
