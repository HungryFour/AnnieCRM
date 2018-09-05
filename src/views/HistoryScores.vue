<template>
  <div class="form_bg">
    <el-form :inline="true" :model="test_score" class="test_score_form">
      <el-form-item label="学科" required>
        <el-select v-model="test_score.classType" placeholder="学科">
          <el-option label="语文" value="yuwen"></el-option>
          <el-option label="数学" value="shuxue"></el-option>
          <el-option label="英语" value="yingyu"></el-option>
          <el-option label="物理" value="wuli"></el-option>
          <el-option label="化学" value="huaxue"></el-option>
          <el-option label="生物" value="shegnwu"></el-option>
          <el-option label="地理" value="dili"></el-option>
          <el-option label="政治" value="zhengzhi"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="考试时间" required>
        <el-col :span="10">
          <el-date-picker type="date" placeholder="开始日期" v-model="test_score.startDate" style="width: 100%"></el-date-picker>
        </el-col>
        <el-col class="line" :span="2" style="text-align: center">-</el-col>
        <el-col :span="10">
          <el-date-picker type="date" placeholder="结束日期" v-model="test_score.endDate" style="width: 100%"></el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit('test_score')">查询</el-button>
      </el-form-item>
    </el-form>
    <el-table
      :data="tableData"
      style="width: 100%"
      :stripe="true"
      :fit="true"
      border
      class="table">
      <el-table-column
        prop="time"
        label="考试时间"
        min-width="100">
      </el-table-column>
      <el-table-column
        prop="score"
        label="分数"
        min-width="100">
      </el-table-column>
      <el-table-column
        prop="averageScore"
        label="班级平均分"
        min-width="100">
      </el-table-column>
      <el-table-column
        prop="diffAverageScore"
        label="比较班级平均分"
        min-width="100">
      </el-table-column>
      <el-table-column
        prop="diffScore"
        label="进步分数（比较上次考试）"
        min-width="100">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>

export default {
  name: 'HistoryExamination',
  data () {
    return {
      test_score: {
        classType: '',
        startDate: '',
        endDate: ''
      },
      rules: {
        startDate: [
          {
            type: 'data', required: true, message: '请选择开始时间', trigger: 'change'
          }
        ],
        endDate: [
          {
            type: 'data', required: true, message: '请选择结束时间', trigger: 'change'
          }
        ]
      },
      tableData: [
        {
          time: '2018-09-05',
          score: '98',
          averageScore: '90',
          diffAverageScore: '8',
          diffScore: '7'
        },
        {
          time: '2018-08-01',
          score: '91',
          averageScore: '82',
          diffAverageScore: '9',
          diffScore: '3'
        },
        {
          time: '2018-07-08',
          score: '88',
          averageScore: '90',
          diffAverageScore: '-2',
          diffScore: '2'
        },
        {
          time: '2018-06-10',
          score: '86',
          averageScore: '84',
          diffAverageScore: '2',
          diffScore: '3'
        },
        {
          time: '2018-05-05',
          score: '83',
          averageScore: '88',
          diffAverageScore: '-5',
          diffScore: '1'
        },
        {
          time: '2018-04-03',
          score: '82',
          averageScore: '89',
          diffAverageScore: '8',
          diffScore: '0'
        }
      ]
    }
  },
  // mounted () {
  //   this.initCharts()
  // },
  methods: {
    onSubmit (formName) {
      this.$message({
        showClose: true,
        message: '手动滑稽 等待后台Api开发',
        type: 'warning',
        duration: 2000
      })
    }
    // initCharts () {
    //   this.chart = echarts.init(this.$refs.chart)
    //   this.setOptions()
    // },
    // setOptions () {
    //   this.chart.setOption({
    //     xAxis: {
    //       type: 'category',
    //       data: ['2018-01-05', '2018-02-05', '2018-03-05', '2018-04-05', '2018-05-05', '2018-06-05', '2018-07-05', '2018-08-05', '2018-09-05']
    //     },
    //     yAxis: {
    //       type: 'value'
    //     },
    //     series: [{
    //       data: [123, 104, 100, 103, 109, 118, 130, 111, 120],
    //       type: 'line',
    //       smooth: true
    //     }]
    //   })
    // }
  }
}
</script>

<style scoped>
 .form_bg {
   margin: auto;
 }
</style>
