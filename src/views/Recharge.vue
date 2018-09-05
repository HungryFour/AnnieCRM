<template>
  <div class="table">
    <el-table
      :data="tableData"
      style="width: 100%"
      :stripe="true"
      :fit="true"
      :border="false"
      class="table">
      <el-table-column
        prop="subject"
        label="所购课程"
        min-width="100">
      </el-table-column>
      <el-table-column
        prop="amount"
        label="金额/元"
        min-width="100">
      </el-table-column>
      <el-table-column
        prop="time"
        label="时间"
        min-width="100">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'Recharge',
  data () {
    return {
      tableData: [
        {
          subject: '语文',
          amount: 2400,
          time: '2018-01-01'
        },
        {
          subject: '英语',
          amount: '2800',
          time: '2018-01-01'
        },
        {
          subject: '历史',
          amount: 1600,
          time: '2018-02-01'
        },
        {
          subject: '地理',
          amount: 1600,
          time: '2018-03-01'
        },
        {
          subject: '政治',
          amount: 1600,
          time: '2018-03-01'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
