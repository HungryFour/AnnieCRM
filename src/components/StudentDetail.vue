<template>
  <div class="student-detail">
    <el-card shadow="always" class="box-card">
      <div slot="header" class="clearfix">
        <span>学生详情</span>
      </div>
      <div class="table_nav">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="学科分析" name="first">学科分析</el-tab-pane>
          <el-tab-pane label="历史成绩" name="second">历史成绩</el-tab-pane>
          <el-tab-pane label="已报课程" name="third">已报课程</el-tab-pane>
          <el-tab-pane label="充值历史" name="fourth">充值历史</el-tab-pane>
        </el-tabs>
      </div>
    </el-card>
  </div>

</template>

<script>
export default {
  name: 'StudentDetail',
  data () {
    return {
      activeName: 'second'
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
