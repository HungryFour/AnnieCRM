<template>
<div class="table">
  <el-table
    :data="tableData"
    style="width: 100%"
    :stripe="true"
    :fit="true"
    border
    class="table">
    <el-table-column
      prop="subject"
      label="课程"
      min-width="100">
    </el-table-column>
    <el-table-column
      prop="startTime"
      label="开始时间"
      min-width="100">
    </el-table-column>
    <el-table-column
      prop="endTime"
      label="结束时间"
      min-width="100">
    </el-table-column>
  </el-table>
</div>
</template>

<script>
export default {
  name: 'SignClass',
  data () {
    return {
      tableData: [
        {
          subject: '语文',
          startTime: '2018-01-01',
          endTime: '2018-09-30'
        },
        {
          subject: '英语',
          startTime: '2018-01-01',
          endTime: '2018-09-30'
        },
        {
          subject: '历史',
          startTime: '2018-02-01',
          endTime: '2018-09-30'
        },
        {
          subject: '地理',
          startTime: '2018-03-01',
          endTime: '2018-09-30'
        },
        {
          subject: '政治',
          startTime: '2018-05-01',
          endTime: '2018-09-30'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
