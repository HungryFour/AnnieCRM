<template>
<div class="teacher-list">
  <el-card shadow="always" class="box-card">
    <div slot="header" class="clearfix">
      <span>代课老师列表</span>
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
        prop="courseCount"
        label="本周课时"
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
    },
    onSubmit () {
      console.log('提交')
    }
  },
  data () {
    return {
      searchForm: {
        name: '',
        mobile: ''
      },
      tableData: [{
        name: '郭嘉嘉',
        sex: '女',
        courseCount: 10,
        courses: ['语文', '数学'],
        mobile: '18513006017'
      },
      {
        name: '赵大山',
        sex: '男',
        courseCount: 10,
        courses: ['英语', '思想政治课'],
        mobile: '18512764286'
      }, {
        name: '钱多多',
        sex: '女',
        courseCount: 9,
        courses: ['地理', '数学', '数字信号处理'],
        mobile: '13114764516'

      }, {
        name: '郭小美',
        sex: '女',
        courseCount: 6,
        courses: ['语文', '政治'],
        mobile: '13512714526'
      }, {
        name: '王小川',
        sex: '男',
        courseCount: 5,
        courses: ['物理', '化学'],
        mobile: '15512214126'
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
