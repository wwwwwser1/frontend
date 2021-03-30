<template>
  <div>
    <h1>Welcome to Fitness</h1>
    <div class="container w3layouts agileits">

      <div class="login w3layouts agileits">
        <h2>登 录</h2>

        <form ref="login" :rules="rules" >
          <div prop="username">
            <input type="text" v-model="form.username" placeholder="请输入用户名">
          </div>
          <div prop="password">
            <input type="password" v-model="form.password" placeholder="请输入密码" required="">
          </div>
        </form>

        <div class="send-button w3layouts agileits">
          <form>
            <router-link :to="{path: '/'}"><input type="submit" @click="loginHandler(form)" value="登 录">
            </router-link>
          </form>
        </div>
      <!--  <div class="social-icons w3layouts agileits">
          <p>- 其他方式登录 -</p>
          <ul>
            <li class="qq"><a href="#">
                <span class="icons w3layouts agileits"></span>
                <span class="text w3layouts agileits">QQ</span></a></li>
            <li class="weixin w3ls"><a href="#">
                <span class="icons w3layouts"></span>
                <span class="text w3layouts agileits">微信</span></a></li>
            <li class="weibo aits"><a href="#">
                <span class="icons agileits"></span>
                <span class="text w3layouts agileits">微博</span></a></li>
            <div class="clear"> </div>
          </ul>
        </div> -->
        <div class="clear"></div>
      </div>

    </div>

  </div>

</template>

<script>
  import {
    login
  } from '@/api/user.js'
  export default {
    name: 'Login',
    props: {
      usernameRules: {
        type: Array,
        default: () => {
          return [{
            required: true,
            message: '账号不能为空',
            trigger: 'blur'
          }]
        }
      },
      passwordRules: {
        type: Array,
        default: () => {
          return [{
            required: true,
            message: '密码不能为空',
            trigger: 'blur'
          }]
        }
      }
    },
    data() {
      return {
        status_code: '',
        form: {
          username: '',
          password: ''
        }
      }
    },
    computed: {
      rules() {
        return {
          username: this.usernameRules,
          password: this.passwordRules
        }
      }
    },
    methods: {
      loginHandler({username,password}) 
      {
        login({
          username,
          password
        }).then(
          res => {
            const data = res.data
            //  data => {message: xxxx , status_code: xxxx, data: {token: xxx }}}
            this.status_code = res.data.status_code
            console.log(data.data.token)
          }
        )
      }
    }
  }
</script>

<style scoped="scoped">
  @import url("../../assets/css/style-login.css");
</style>
