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
  name: 'RankingLineChart',
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
          text: '排名'
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
              name: '班级排名'
            },
            {
              name: '年级排名'
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
          },
          position: 'bottom'
        },
        yAxis: {
          show: true,
          inverse: true
        },
        series: [
          {
            name: '班级排名',
            type: 'line',
            data: [8, 4, 6, 4, 5, 4, 3, 2],
            smooth: true
          },
          {
            name: '年级排名',
            type: 'line',
            data: [30, 20, 24, 21, 24, 19, 16, 8],
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
