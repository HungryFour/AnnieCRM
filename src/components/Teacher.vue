<template>
<div class="teacher-list">

  <el-dialog title="教师信息" :visible.sync="addTeacherFormVisible">
    <el-form :model="addForm">
      <el-form-item label="姓名" label-width="120px">
        <el-input v-model="addForm.name" auto-complete="off" style="width: 300px"></el-input>
      </el-form-item>
      <el-form-item label="联系电话" label-width="120px">
        <el-input v-model="addForm.mobile" auto-complete="off" style="width: 300px" type="tel"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="addCancleHandle">取 消</el-button>
      <el-button type="primary" @click="addConfirmHandle">确 定</el-button>
    </div>
  </el-dialog>

  <el-card shadow="always" class="box-card">
    <div slot="header" class="clearfix">
      <span>代课老师列表</span>
      <el-button type="text" @click="addHandle" style="float: right; padding: 5px 20px"> 添加 </el-button>
    </div>
    <div class="search-form">
      <el-form ref="form" :inline="true" :model="searchForm">
        <el-form-item label="姓名">
          <el-input v-model="searchForm.name"></el-input>
        </el-form-item>
        <el-form-item label="手机号">
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
        prop="mobile"
        label="联系电话"
        min-width="120">
      </el-table-column>
      <el-table-column
        label="主要课程"
        min-width="120">
        <div slot-scope="scope">
          <el-tag v-for="course in scope.row.courses" :key="course.index" size="small"> {{course}} </el-tag>
        </div>
      </el-table-column>
      <el-table-column
        label="操作"
        min-width="80">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="big">查看</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</div>
</template>

<script>
export default {
  name: 'Tarcher',
  methods: {
    handleClick (row) {
      console.log(row)
      this.$router.push({
        path: `/teacher/${row.teacherID}`
      })
    },
    onSubmit () {
      console.log('提交')
    },
    addHandle () {
      this.addTeacherFormVisible = true
    },
    addConfirmHandle () {
      this.addTeacherFormVisible = false
      console.log('创建学生')
    },
    addCancleHandle () {
      this.addTeacherFormVisible = false
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
      addTeacherFormVisible: false,
      searchForm: {
        name: '',
        mobile: ''
      },
      addForm: {
        name: '',
        mobile: ''
      },
      tableData: [{
        name: '郭嘉嘉',
        sex: '女',
        courseCount: 10,
        courses: ['语文', '数学'],
        mobile: '18513006017',
        teacherID: 10000001
      },
      {
        name: '赵大山',
        sex: '男',
        courseCount: 10,
        courses: ['英语', '思想政治课'],
        mobile: '18512764286',
        teacherID: 10000002
      }, {
        name: '钱多多',
        sex: '女',
        courseCount: 9,
        courses: ['地理', '数学', '数字信号处理'],
        mobile: '13114764516',
        teacherID: 10000003

      }, {
        name: '郭小美',
        sex: '女',
        courseCount: 6,
        courses: ['语文', '政治'],
        mobile: '13512714526',
        teacherID: 10000004
      }, {
        name: '王小川',
        sex: '男',
        courseCount: 5,
        courses: ['物理', '化学'],
        mobile: '15512214126',
        teacherID: 10000005
      }]
    }
  }
}
</script>

<style scoped>
  .search-form {
    margin-top: 30px;
  }
  .el-tag + .el-tag {
    margin-left: 10px;
  }

</style>
