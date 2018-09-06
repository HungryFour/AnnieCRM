<template>
<div class="teacher_detail">
<el-card shadow="always">
  <div slot="header" class="clearfix">
    <span>排课表</span>
  </div>
  <div class="block">
    <span class="demonstration"></span>
    选择排课时间
    <el-date-picker
      v-model="dateValue"
      type="daterange"
      align="right"
      unlink-panels
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      :picker-options="pickerOptions"
      style="margin-left: 20px">
    </el-date-picker>
  </div>
  <div class="table_bg">
    <el-table
      :data="tableData"
      style="width: 100%"
      :stripe="true"
      :fit="true"
      border
      class="table"
      :summary-method="getSummaries"
      show-summary>
      <el-table-column
        prop="subject"
        label="课程"
        min-width="100">
      </el-table-column>
      <el-table-column
        prop="startTime"
        label="上课时间"
        min-width="100">
      </el-table-column>
      <el-table-column
        prop="endTime"
        label="下课时间"
        min-width="100">
      </el-table-column>
      <el-table-column
        prop="diff"
        label="时长 ( /小时 ) "
        min-width="100">
      </el-table-column>
    </el-table>
  </div>
</el-card>
</div>
</template>

<script>
export default {
  name: 'TeacherDetail',
  data () {
    return {
      tableData: [
        {
          'subject': '语文',
          'startTime': '2018-09-06 19:00:00',
          'endTime': '2018-09-06 20:00:00',
          'diff': 1
        },
        {
          'subject': '数学',
          'startTime': '2018-09-05 19:00:00',
          'endTime': '2018-09-05 21:00:00',
          'diff': 2
        },
        {
          'subject': '语文',
          'startTime': '2018-09-01 19:00:00',
          'endTime': '2018-09-01 21:00:00',
          'diff': 2
        },
        {
          'subject': '语文',
          'startTime': '2018-08-30 19:00:00',
          'endTime': '2018-08-30 20:30:00',
          'diff': 1.5
        },
        {
          'subject': '数学',
          'startTime': '2018-08-30 20:30:00',
          'endTime': '2018-08-30 21:30:00',
          'diff': 1
        },
        {
          'subject': '语文',
          'startTime': '2018-08-28 19:00:00',
          'endTime': '2018-08-28 21:00:00',
          'diff': 2
        },
        {
          'subject': '数学',
          'startTime': '2018-08-27 19:00:00',
          'endTime': '2018-08-27 21:00:00',
          'diff': 2
        }
      ],
      pickerOptions: {
        shortcuts: [
          {
            text: '最近一周',
            onClick (picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: '最近一月',
            onClick (picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: '最近三个月',
            onClick (picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
              picker.$emit('pick', [start, end])
            }
          }
        ]
      },
      dateValue: ''
    }
  },
  methods: {
    getSummaries (param) {
      const { columns, data } = param
      const sums = []
      columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = '总时长'
        } else if (index === 3) {
          const values = data.map(item => Number(item[column.property]))
          if (!values.every(value => isNaN(value))) {
            sums[index] = values.reduce((prev, curr) => {
              const value = Number(curr)
              if (!isNaN(value)) {
                return prev + curr
              } else {
                return prev
              }
            }, 0)
          } else {
            sums[index] = 'N/A'
          }
        }
      })
      return sums
    }
  }
}
</script>

<style scoped>
.table_bg{
  margin-top: 40px;
}
</style>
