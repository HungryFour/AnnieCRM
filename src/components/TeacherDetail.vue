<template>
<div class="teacher_detail">

  <el-dialog title="课程信息" :visible.sync="addSubjectFormVisible">
    <el-form :model="addForm">
      <el-form-item label="课程" label-width="120px">
        <el-select v-model="addForm.subject" placeholder="课程" style="width: 150px">
          <el-option label="语文" value="yuwen"></el-option>
          <el-option label="数学" value="shuxue"></el-option>
          <el-option label="英语" value="yingyu"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="开始时间" label-width="120px">
        <el-date-picker
          v-model="addForm.startTime"
          type="datetime"
          placeholder="选择日期时间"
          default-time="18:00:00"
          style="width: 300px">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="结束时间" label-width="120px">
        <el-date-picker
          v-model="addForm.endTime"
          type="datetime"
          placeholder="选择日期时间"
          default-time="20:00:00"
          style="width: 300px">
        </el-date-picker>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="addCancleHandle">取 消</el-button>
      <el-button type="primary" @click="addConfirmHandle">确 定</el-button>
    </div>
  </el-dialog>

<el-card shadow="always">
  <div slot="header" class="clearfix">
    <span>排课表</span>
    <el-button type="text" @click="addHandle" style="float: right; padding: 5px 20px"> 添加 </el-button>
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
      addSubjectFormVisible: false,
      addForm: {
        subject: '',
        startTime: '',
        endTime: ''
      },
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
    },
    addHandle () {
      this.addSubjectFormVisible = true
    },
    addConfirmHandle () {
      this.addSubjectFormVisible = false
      console.log('创建学生')
    },
    addCancleHandle () {
      this.addSubjectFormVisible = false
      this.$message({
        type: 'info',
        message: '取消创建',
        duration: 2000
      })
      console.log('取消')
    }
  }
}
</script>

<style scoped>
.table_bg{
  margin-top: 40px;
}
</style>
