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
      <el-menu-item index="/setting" route="/setting">设置</el-menu-item>
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
      // console.log(index, indexPath)
      console.log(index, indexPath)
      //
      // if (this.NavMenu.indexPath() === keyPath) {
      //   this.NavMenu.close()
      // }
    }
  }
}
</script>

<style scoped>

</style>
