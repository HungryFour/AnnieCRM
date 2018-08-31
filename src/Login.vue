<template>
  <div class="login-wrap">
    <div class="ms-title">系统</div>
    <div class="ms-login">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="0px"
        class="demo-ruleForm">
        <el-form-item
          prop="username">
          <el-input
            v-model="ruleForm.username"
            placeholder="请输入用户名">
          </el-input>
        </el-form-item>
        <el-form-item
          prop="password">
          <el-input
            type="password"
            placeholder="请输入密码"
            v-model="ruleForm.password">
            <!--@keyup.enter.native="submitForm()">-->
          </el-input>
        </el-form-item>
        <div
          class="login-btn">
          <el-button
            type="primary"
            @contextmenu.prevent="handleRightClick($event)"
            @click="handleClick($event)">
            <!--@click="submitForm()">-->
            登录
          </el-button>
        </div>
        <p style="font-size:12px;line-height:30px;color:#999;">Tips : 登录信息请联系管理员。</p>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      ruleForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          {
            required: true,
            message: '请输入用户名',
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  created () {
    console.log(143254325325)
    this.$emit('xxx')
  },
  methods: {
    handleRightClick (e) {
      console.log(11111, e)
    },
    handleClick (e) {
      console.log(22222, e)
    }
  //   submitForm () {
  //     Api.login(this.ruleForm)
  //       .then((res) => {
  //         // 登录失败
  //         if (res.data.code !== '-1') {
  //           this.$message({
  //             message: res.data.msg,
  //             type: 'error'
  //           })
  //         } else {
  //           // 登录成功之后本地存储token
  //           localStorage.setItem('accessToken', res.data.access_token)
  //           localStorage.setItem('refreshToken', res.data.refresh_token)
  //           localStorage.setItem('userName', res.data.user_name)
  //           // 跳转回之前路由
  //           if (this.$route.query.redirect) {
  //             this.$router.push({
  //               path: this.$route.query.redirect
  //             })
  //           } else {
  //             this.$router.push({
  //               path: '/home'
  //             })
  //           }
  //         }
  //       })
  //       .catch((err) => {
  //         // 异常错误
  //         this.$message({
  //           message: err,
  //           type: 'error'
  //         })
  //       })
  //   }
  }
}
</script>
<style scoped>
  .login-wrap{
    position: relative;
    width:100%;
    height:100vh;
    background: #324157;
  }
  .ms-title{
    position: absolute;
    top:50%;
    width:100%;
    margin-top: -230px;
    text-align: center;
    font-size:30px;
    color: #fff;

  }
  .ms-login{
    position: absolute;
    left:50%;
    top:50%;
    width:300px;
    height:160px;
    margin:-150px 0 0 -190px;
    padding:40px;
    border-radius: 5px;
    background: #fff;
  }
  .login-btn{
    text-align: center;
  }
  .login-btn button{
    width:100%;
    height:36px;
  }
</style>
