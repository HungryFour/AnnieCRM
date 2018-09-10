<template>
  <div>
    <el-menu :default-active="$route.path"
             class="el-menu-nav"
             mode="horizontal"
             ref="nav"
             @select="handleSelect"
             background-color="#545c64"
             text-color="#fff"
             menu-trigger="click"
             active-text-color="#ffd04b"
             :unique-opened="true"
             :router="true">
      <el-menu-item index="/home" route="/home">首页</el-menu-item>
      <el-menu-item index="/student" route="/student">学生管理</el-menu-item>
      <el-menu-item index="/teacher" route="/teacher">教职工管理</el-menu-item>
      <el-button type="text" style="float: right; padding: 20px 20px" @click="logoutHandle"> 退出登录 </el-button>
      <!--<el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>-->
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'NavMenu',
  data () {
    return {
      activeIndex: '/home'
    }
  },
  methods: {
    handleSelect (index, indexPath) {
      console.log(index, indexPath)
    },
    logoutHandle () {
      this.$confirm('是否确定退出此账号?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        localStorage.removeItem('user')
        localStorage.removeItem('duration')
        this.$router.push({path: '/login'})
        this.$message({
          type: 'success',
          message: '退出成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消'
        })
      })
    }
  }
}
</script>

<style scoped>

</style>
