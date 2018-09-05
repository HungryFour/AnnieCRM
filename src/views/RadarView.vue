<template>
  <div class="chart" ref="chart" :style="{height:height,width:width,left:left}"></div>
</template>

<script>
// 按需引入 引入 ECharts 主模块
var echarts = require('echarts/lib/echarts')
// 引入柱状图
require('echarts/lib/chart/radar')
// 引入提示框和标题组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
require('echarts/lib/component/legend')

export default {
  name: 'RadarView',
  props: {
    width: {
      type: String,
      default: '70vh'
    },
    height: {
      type: String,
      default: '70vh'
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
          text: ''
        },
        tooltip: {},
        color: ['#E6001F', '#009EF7'],
        legend: {
          data: [
            {
              name: '班级历史平均成绩',
              icon: 'circle',
              textStyle: {
                color: '#E6001F'
              }
            },
            {
              name: '该学生历史平均成绩',
              icon: 'circle',
              pageIconColor: '#111',
              borderColor: '#000',
              textStyle: {
                color: '#009EF7'
              }
            }
          ],
          color: {
            color: '#222',
            backgroundColor: '#fff'
          }
        },
        radar: {
          name: {
            textStyle: {
              color: '#ffffff',
              backgroundColor: '#999',
              borderRadius: 3,
              padding: [5, 5]
            }
          },
          indicator: [
            {name: '语文', max: 150},
            {name: '数学', max: 150},
            {name: '英语', max: 150},
            {name: '物理', max: 100},
            {name: '化学', max: 100},
            {name: '生物', max: 100},
            {name: '历史', max: 100},
            {name: '地理', max: 100},
            {name: '政治', max: 100}
          ]
        },
        series: [{
          name: '成绩雷达图分析',
          type: 'radar',
          data: [
            {
              value: [98, 100, 105, 79, 82, 83, 89, 85, 92],
              name: '班级历史平均成绩',
              lineStyle: {
                color: '#E6001F'
              },
              areaStyle: {
                normal: {
                  opacity: 0.2,
                  color: new echarts.graphic.RadialGradient(0, 0.5, 1, [
                    {
                      color: '#fff',
                      offset: 0.5
                    },
                    {
                      color: '#E6001F',
                      offset: 1
                    }
                  ])
                }
              }
            },
            {
              value: [132, 98, 120, 62, 69, 89, 93, 94, 99],
              name: '该学生历史平均成绩',
              lineStyle: {
                color: '#009EF7'
              },
              areaStyle: {
                normal: {
                  opacity: 0.2,
                  color: new echarts.graphic.RadialGradient(0, 0.5, 1, [
                    {
                      color: '#fff',
                      offset: 0.5
                    },
                    {
                      color: '#009EF7',
                      offset: 1
                    }
                  ])
                }
              }
            }
          ]
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
