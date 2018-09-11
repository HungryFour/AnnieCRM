<template>
  <div class="student-list">

    <el-dialog title="学生信息" :visible.sync="addStudentFormVisible">
      <el-form :model="addForm">
        <el-form-item label="姓名" label-width="120px">
          <el-input v-model="addForm.name" auto-complete="off" style="width: 500px"></el-input>
        </el-form-item>
        <el-form-item label="性别" label-width="120px">
          <el-select v-model="addForm.sex" placeholder="性别" style="width: 150px">
            <el-option label="男" value="boy"></el-option>
            <el-option label="女" value="girl"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="学校" label-width="120px">
          <el-input v-model="addForm.school" auto-complete="off" style="width: 500px"></el-input>
        </el-form-item>
        <el-form-item label="家庭住址" label-width="120px">
          <el-input v-model="addForm.address" auto-complete="off" style="width: 500px"></el-input>
        </el-form-item>
        <el-form-item label="家长联系电话" label-width="120px">
          <el-input v-model="addForm.mobile" auto-complete="off" style="width: 500px"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addCancleHandle">取 消</el-button>
        <el-button type="primary" @click="addConfirmHandle">确 定</el-button>
      </div>
    </el-dialog>

    <el-card shadow="always" class="box-card">
      <div slot="header" class="clearfix">
        <span>学生列表</span>
        <el-button type="text" @click="addHandle" style="float: right; padding: 5px 20px"> 添加 </el-button>
      </div>
      <div class="search-form">
        <el-form ref="form" :inline="true" :model="searchForm">
          <el-form-item label="姓名">
          <el-input v-model="searchForm.name"></el-input>
          </el-form-item>
          <el-form-item label="家长手机号">
          <el-input v-model="searchForm.mobile"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">搜索</el-button>
          </el-form-item>
        </el-form>
      </div>
      <el-table
        :data="tableData"
        style="width: 100%"
        :stripe="true"
        :fit="true"
        border
        class="table">
        <el-table-column
          prop="name"
          label="姓名"
          min-width="100">
        </el-table-column>
        <el-table-column
          prop="sex"
          label="性别"
          min-width="80">
        </el-table-column>
        <el-table-column
          prop="school"
          label="学校"
          min-width="120">
        </el-table-column>
        <el-table-column
          prop="address"
          label="家庭住址"
          min-width="300">
        </el-table-column>
        <el-table-column
          prop="mobile"
          label="家长联系电话"
          min-width="120">
        </el-table-column>
        <el-table-column
          label="操作"
          min-width="80">
          <template slot-scope="scope">
            <el-button @click="detailHandleClick(scope.row)" type="text" size="big">查看</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>

</template>

<script>

export default {
  name: 'Student',
  methods: {
    detailHandleClick (row) {
      console.log(row)
      this.$router.push({
        path: `/student/${row.student_id}`
      })
    },
    onSubmit () {
      console.log('提交')
    },
    addHandle () {
      this.addStudentFormVisible = true
    },
    addConfirmHandle () {
      this.addStudentFormVisible = false
      console.log('创建学生')
    },
    addCancleHandle () {
      this.addStudentFormVisible = false
      this.$message({
        type: 'info',
        message: '取消创建',
        duration: 2000
      })
      console.log('取消')
    }
  },
  data () {
    return {
      formLabelWidth: '120px',
      addStudentFormVisible: false,
      searchForm: {
        name: '',
        mobile: ''
      },
      addForm: {
        name: '',
        sex: '',
        mobile: '',
        school: '',
        address: ''
      },
      tableData: [{
        name: '郭嘉芮',
        sex: '女',
        address: '山东省潍坊市潍城区北宫街666号6单元606室',
        school: '潍坊一中',
        mobile: '18513006017',
        student_id: '0000001'
      },
      {
        name: '赵小包',
        sex: '男',
        address: '山东省潍坊市坊子区人民街6号1单元106室',
        school: '潍坊实验小学',
        mobile: '18512764286',
        student_id: '0000002'
      }, {
        name: '钱大壮',
        sex: '女',
        address: '山东省潍坊市潍城区北宫街哈哈小区5号1单元106室',
        school: '潍坊一中',
        mobile: '13114764516',
        student_id: '0000003'
      }, {
        name: '郭小小',
        sex: '女',
        address: '山东省潍坊市潍城区南宫街5号5单元206室',
        school: '潍坊一中',
        mobile: '13512714526',
        student_id: '0000004'
      }, {
        name: '王小明',
        sex: '男',
        address: '山东省潍坊市潍城区花好月圆小区3号1单元206室',
        school: '潍坊十一中',
        mobile: '15512214126',
        student_id: '0000005'
      }]
    }
  }
}
</script>

<style scoped>
  .search-form {
    margin-top: 30px;
  }
</style>
