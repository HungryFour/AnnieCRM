<template>
  <div class="login-wrap">
    <div class="ms-title">安妮教学管理系统</div>
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
            @click="handleClick()">
            <!--@click="submitForm()">-->
            登录
          </el-button>
        </div>
        <p style="font-size:12px;line-height:30px;color:#999;">Tips : 登录信息请联系系统管理员。</p>
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
  },
  methods: {
    handleClick () {
      console.log(this.ruleForm.username, this.ruleForm.password)
      if (this.ruleForm.username === 'admin' && this.ruleForm.password === '123321') {
        localStorage.setItem('user', this.ruleForm.username)
        localStorage.setItem('duration', Date.parse(new Date()))
        this.$message({
          type: 'success',
          message: '登录成功',
          duration: 2000
        })
        if (this.$route.query.redirect) {
          this.$router.push({path: this.$route.query.redirect})
        } else {
          this.$router.push({path: '/home'})
        }
      } else {
        this.$message({
          type: 'error',
          message: '登录失败, 请检查用户名和密码, 如果密码丢失, 请联系管理员',
          duration: 5000
        })
      }
    }
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
