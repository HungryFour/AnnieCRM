<template>
  <div class="chart" ref="chart" :style="{height:height,width:width,left:left}"></div>
</template>

<script>
// 按需引入 引入 ECharts 主模块
var echarts = require('echarts/lib/echarts')
// 引入图
require('echarts/lib/chart/line')
// 引入提示框和标题组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
require('echarts/lib/component/legend')

export default {
  name: 'ScoreLineChart',
  props: {
    width: {
      type: String,
      default: '80vw'
    },
    height: {
      type: String,
      default: '50vh'
    },
    left: {
      type: String,
      default: 'center'
    }
  },
  mounted () {
    this.initCharts()
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    },
    initCharts () {
      this.chart = echarts.init(this.$refs.chart)
      this.setOptions()
    },
    setOptions () {
      this.chart.setOption({
        title: {
          text: '成绩'
        },
        grid: {
          left: '3%',
          right: '3%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        tooltip: {trigger: 'axis'},
        legend: {
          data: [
            {
              name: '语文'
            },
            {
              name: '数学'
            },
            {
              name: '英语'
            },
            {
              name: '总分'
            }
          ]
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['2018-01-11', '2018-02-11', '2018-03-11', '2018-04-11', '2018-05-11', '2018-06-11', '2018-07-11', '2018-08-11'],
          splitLine: {
            show: false
          },
          show: true,
          axisLine: {
            width: 50,
            show: false
          },
          axisLabel: {
            lineHeight: 50
          }
        },
        yAxis: {
          show: true
        },
        series: [{
          name: '语文',
          type: 'line',
          data: [89, 90, 91, 80, 93, 94, 70, 96],
          smooth: true
        },
        {
          name: '数学',
          type: 'line',
          data: [82, 85, 91, 92, 87, 90, 95, 99],
          smooth: true
        },
        {
          name: '英语',
          type: 'line',
          data: [89, 85, 86, 90, 95, 94, 93, 97],
          smooth: true
        },
        {
          name: '总分',
          type: 'line',
          data: [260, 260, 268, 262, 275, 278, 258, 290],
          smooth: true
        }]
      })
    }
  }
}
</script>

<style scoped>
  .chart {
    margin: auto;
  }
</style>
