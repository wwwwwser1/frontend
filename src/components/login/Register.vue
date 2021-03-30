<template>
  
  <div>
    <h1>Welcome to Fitness</h1>
    <div class="container w3layouts agileits">
      <div class="register w3layouts agileits">
        <h2>注 册</h2>
        <form method="post">
          <input type="text" v-model="form.username" placeholder="用户名" required="">
          <input type="text" v-model="form.email" placeholder="邮箱" required="">
          <input type="password" v-model="form.password" placeholder="密码" required="">
          <input type="text" v-model="form.phone" placeholder="手机号码" required="">
        </form>

        <div class="send-button w3layouts agileits">
          <form>
            <input type="submit" @click='formSubmit(form)' value="注册">
            <p class="go_login" >已有账号<router-link :to="{name:'login'}">直接登录</router-link></p>
          </form>
        </div>
        <div class="clear"></div>
      </div>
    </div>
  </div>

</template>

<script>
  import {register}  from '@/api/user.js'
  export default {
    name: 'Register',
    data(){
      return {
        status_code: '',
        form: {
        username: "",
        email: "",
        password: "",
        phone: "",
        }
      }
    },
    methods:{
      formSubmit(form)
      {
        register(form).then(
          res => {
            const data = res.data
            //  data => {message: xxxx , status_code: xxxx, data: {token: xxx }}}
            this.status_code = res.data.status_code
            console.log(data)
          }
        )
      }
    }
  }
</script>

<style scoped="scoped">
  @import url("../../assets/css/style-login.css");
</style>
