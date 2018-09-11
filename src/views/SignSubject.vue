<template>
<div class="table">
  <div>
    <el-button type="text" @click="addHandle" style="float: right; padding: 20px 20px"> 添加课程 </el-button>
  </div>
  <el-dialog title="考试信息" :visible.sync="addSubjectFormVisible">
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
          v-model="addForm.startDate"
          type="date"
          placeholder="选择日期"
          style="width: 300px">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="结束时间" label-width="120px">
        <el-date-picker
          v-model="addForm.endDate"
          type="date"
          placeholder="选择日期"
          style="width: 300px">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="充值金额" label-width="120px">
        <el-input v-model="addForm.amount" auto-complete="off" style="width: 300px">
          <template slot="append">/元</template>
        </el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="addCancleHandle">取 消</el-button>
      <el-button type="primary" @click="addConfirmHandle">确 定</el-button>
    </div>
  </el-dialog>

  <el-table
    :data="tableData"
    style="width: 100%; top: 10px"
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
    <el-table-column
      prop="amount"
      label="充值金额 ( /元 )"
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
      addSubjectFormVisible: false,
      addForm: {
        subject: '',
        startDate: '',
        endDate: '',
        amount: ''
      },
      tableData: [
        {
          subject: '语文',
          startTime: '2018-01-01',
          endTime: '2018-09-30',
          amount: 1320
        },
        {
          subject: '英语',
          startTime: '2018-01-01',
          endTime: '2018-09-30',
          amount: 1280
        }
      ]
    }
  },
  methods: {
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
        message: '取消添加',
        duration: 2000
      })
      console.log('取消')
    }
  }
}
</script>

<style scoped>

</style>
