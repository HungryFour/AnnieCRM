<template>
  <div class="student-detail">
    <el-card shadow="always" class="box-card">
      <div slot="header" class="clearfix">
        <span>学生详情</span>
      </div>
      <div class="table_nav">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="偏科分析" name="first">
            <div class="chart_bg">
              <radar-view></radar-view>
            </div>
          </el-tab-pane>
          <el-tab-pane label="历史成绩" name="second">
            <history-score></history-score>
          </el-tab-pane>
          <el-tab-pane label="已报课程" name="third">
            <sign-subject></sign-subject>
          </el-tab-pane>
          <el-tab-pane label="充值历史" name="fourth">
            <recharge></recharge>
          </el-tab-pane>
        </el-tabs>
      </div>
    </el-card>
  </div>

</template>

<script>

import RadarView from '@/views/RadarView'
import HistoryScore from '@/views/HistoryScores'
import SignSubject from '@/views/SignSubject'
import Recharge from '@/views/Recharge'

export default {
  name: 'StudentDetail',
  components: {
    RadarView,
    HistoryScore,
    SignSubject,
    Recharge
  },
  data () {
    return {
      activeName: 'first'
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>

<style scoped>
  .table_nav {
    font-size: 14px;
  }
</style>
