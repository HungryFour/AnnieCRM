<template>
  <div class="form_bg">
    <el-dialog title="考试信息" :visible.sync="addScoresFormVisible">
      <el-form :model="addForm">
        <el-form-item label="考试时间" label-width="120px">
          <el-date-picker
            v-model="addForm.textDate"
            type="date"
            placeholder="选择日期"
            style="width: 300px">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="课程" label-width="120px">
          <el-select v-model="addForm.subject" placeholder="课程" style="width: 150px">
            <el-option label="语文" value="yuwen"></el-option>
            <el-option label="数学" value="shuxue"></el-option>
            <el-option label="英语" value="yingyu"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="分数" label-width="120px">
          <el-input v-model="addForm.score" auto-complete="off" style="width: 300px"></el-input>
        </el-form-item>
        <el-form-item label="班级名次" label-width="120px">
          <el-input v-model="addForm.classRanks" auto-complete="off" style="width: 300px"></el-input>
        </el-form-item>
        <el-form-item label="年级名次" label-width="120px">
          <el-input v-model="addForm.gradeRanks" auto-complete="off" style="width: 300px"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addCancleHandle">取 消</el-button>
        <el-button type="primary" @click="addConfirmHandle">确 定</el-button>
      </div>
    </el-dialog>

    <el-form :inline="true" :model="test_score" class="test_score_form">
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

      <el-button type="text" @click="addHandle" style="float: right; padding: 5px 20px"> 添加考试成绩 </el-button>

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
        prop="yuwen"
        label="语文"
        min-width="100">
      </el-table-column>
      <el-table-column
        prop="shuxue"
        label="数学"
        min-width="100">
      </el-table-column>
      <el-table-column
        prop="yingyu"
        label="英语"
        min-width="100">
      </el-table-column>
      <el-table-column
        prop="totalScore"
        label="总分"
        min-width="100">
      </el-table-column>
      <el-table-column
        prop="classRanks"
        label="班级名次"
        min-width="100">
      </el-table-column>
      <el-table-column
        prop="gradeRanks"
        label="年级名次"
        min-width="100">
      </el-table-column>
    </el-table>

    <el-card class="score-line-chart-box-card" style="margin-top: 40px">
      <div>
        <score-line-chart></score-line-chart>
      </div>
    </el-card>

    <el-card class="ranking-line-chart-box-card" style="margin-top: 40px">
      <div>
        <ranking-line-chart></ranking-line-chart>
      </div>
    </el-card>

  </div>
</template>

<script>

import ScoreLineChart from '@/views/ScoreLineChart'
import RankingLineChart from '@/views/RankingLineChart'

export default {
  name: 'HistoryExamination',
  components: {
    ScoreLineChart,
    RankingLineChart
  },
  data () {
    return {
      addScoresFormVisible: false,
      addForm: {
        subject: '',
        textDate: '',
        score: '',
        classRanks: '',
        gradeRanks: ''
      },
      test_score: {
        subject: '',
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
          yuwen: '98',
          shuxue: '88',
          yingyu: '90',
          totalScore: '276',
          classRanks: '8',
          gradeRanks: '7'
        },
        {
          time: '2018-08-01',
          yuwen: '98',
          shuxue: '88',
          yingyu: '90',
          totalScore: '276',
          classRanks: '9',
          gradeRanks: '3'
        },
        {
          time: '2018-07-08',
          yuwen: '98',
          shuxue: '88',
          yingyu: '90',
          totalScore: '276',
          classRanks: '2',
          gradeRanks: '2'
        },
        {
          time: '2018-06-10',
          yuwen: '98',
          shuxue: '88',
          yingyu: '90',
          totalScore: '276',
          classRanks: '2',
          gradeRanks: '3'
        },
        {
          time: '2018-05-05',
          yuwen: '98',
          shuxue: '88',
          yingyu: '90',
          totalScore: '276',
          classRanks: '5',
          gradeRanks: '1'
        },
        {
          time: '2018-04-03',
          yuwen: '98',
          shuxue: '88',
          yingyu: '90',
          totalScore: '276',
          classRanks: '8',
          gradeRanks: '1'
        }
      ]
    }
  },
  // mounted () {
  //   this.initCharts()
  // },
  methods: {
    onSubmit () {
      this.$message({
        showClose: true,
        message: '手动滑稽 等待后台Api开发',
        type: 'warning',
        duration: 2000
      })
    },
    addHandle () {
      this.addScoresFormVisible = true
    },
    addConfirmHandle () {
      this.addScoresFormVisible = false
      console.log('创建学生')
    },
    addCancleHandle () {
      this.addScoresFormVisible = false
      this.$message({
        type: 'info',
        message: '取消添加',
        duration: 2000
      })
      console.log('取消')
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
