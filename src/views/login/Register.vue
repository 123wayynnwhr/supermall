<template>
  <div>
    <!-- <h2>Login.vue</h2> -->
    <div class="container">
      <div class="panel">
        <div class="content signup">   
          <div class="switch">
            <!-- <span id="login">登录</span>
            <span>/</span> -->
            <span id="signup" class="active">注册</span>
          </div>
          <div class="form" action>
            <div id="email" class="input">
              <!-- <input type="text" placeholder="邮箱" v-model="email" /> -->
            </div>
            <div class="input">
              <input type="text" placeholder="用户名" v-model="uname" />
            </div>
            <div class="input">
              <input type="Password" placeholder="密码" v-model="upwd" />
            </div>
            <div id="repeat" class="input">
              <input type="Password" placeholder="再次输入密码" v-model="reupwd" />
            </div>
            <span class="forget">忘记密码?</span>
            <button @click="reg()">登录</button>
          </div>
        </div>
      </div>
    </div>

    <my-footer></my-footer>
  </div>
</template>

<script>
import MyFooter from "../../components/common/MyFooter";

import qs from 'qs'

import "../.././assets/js/jquery.min.js";

export default {
  data() {
    return {
      // email: "",
      uname: "",
      upwd: "",
      reupwd: ""
    };
  },
  methods: {
    reg() {
      //功能:完成用户注册
      // 1.创建正则表达式用于验证用户名和密码字母和数字3~12
      var reg = /^[0-9a-z]{3,12}$/i;
      // 2.创建正则表达式用于验证邮箱
      var rege = /^\w+@\w+\.\w+(\.cn)?$/i;
      //3.获取用户名和密码
      // var e = this.email;
      var u = this.uname;
      var p = this.upwd;
      var rp = this.reupwd;
      // console.log(e+"_"+u+"_"+p);
      //4.验证邮箱如果格式不正确,提示错误信息
      // if (!rege.test(e)) {
        // this.$messagebox("消息", "邮箱格式不正确");
      //   alert("消息, 邮箱格式不正确");
      //   return;
      // }
      //5.验证用户名如果格式不正确,提示错误信息
      if (!reg.test(u)) {
        // this.$messagebox("消息", "用户名格式不正确");
        alert("消息, 用户名格式不正确");
        return;
      }
      //6.验证密码,如果格式不正确,提示错误信息
      if (!reg.test(p)) {
        // this.$messagebox("消息", "密码格式不正确");
        alert("消息, 密码格式不正确");
        return;
      }
       //6.验证密码,如果格式不正确,提示错误信息
      if (p!=rp) {
        // this.$messagebox("消息", "密码格式不正确");
        alert("消息, 两次输入密码不一致");
        return;
      }
      //5.创建url变量,保存请求服务器地址
      var url = "register";
      //6.创建obj变量,保存请求是参数
      var obj = qs.stringify({uname:u, upwd:p});
      console.log(obj)
      //7.发送ajax请求
     this.axios.post(url, {params: obj})
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  components: {
    MyFooter
  }
};

$(function() {
  $("#login").click(function() {
    $(".switch span").removeClass("acitve");
    $(this).addClass("active");

    $(this)
      .parents(".content")
      .removeClass("signup");
    $(this)
      .parents(".content")
      .addClass("login");

    $("form button").text("LOGIN");
  });

  $("#signup").click(function() {
    $(".switch span").removeClass("acitve");
    $(this).addClass("active");

    $(this)
      .parents(".content")
      .removeClass("login");
    $(this)
      .parents(".content")
      .addClass("signup");

    $("form button").text("SIGNUP");
  });

  $(".input input").on("focus", function() {
    $(this)
      .parent()
      .addClass("fucos");
  });

  $(".input input").on("blur", function() {
    if ($(this).val() === "")
      $(this)
        .parent()
        .removeClass("focus");
  });
});
</script>

<style scoped>
/* 配色方案:
背景:rgb(224,207,254),rgb(255,239,255)
按钮:rgb(181,154,254),rgb(245,189,253)
 */

* {
  margin: 0;
  padding: 0;
}
body {
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  background: linear-gradient(45deg, rgb(181, 154, 254), rgb(245, 189, 253));
  clear: both;
}
.container {
  /* display: flex; */
  flex: 1;
  justify-content: center;
  margin: auto auto;
  position: relative;
  width: 50%;
  height: 100%;
  background-color: red;
}
.switch span {
  color: #ccc;
  font-size: 1.4rem;
  cursor: pointer;
}
.switch span.active {
  color: rgb(181, 154, 254);
}
.panel {
  flex: 1;
  width: 100%;
  margin: 20px 0;
  padding: 30px;
  background-color: #e8e8e8;
  display: flex;
  justify-content: center;
}
.form {
  width: 16rem;
  margin: 1rem 0 0;
}

.form .input {
  position: relative;
  opacity: 1;
  height: 2rem;
  width: 100%;
  margin: 2rem 0;
  transition: 0.4s;
}
.input input {
  outline: none;
  display: block;
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 0.2rem;
  border-bottom: 1px solid rgb(181, 154, 254);
}
.input::after {
  content: attr(placeholder);
  position: absolute;
  left: 0;
  top: 10%;
  font-size: 1.4rem;
  color: rgb(129, 101, 207);
  transition: 0.3s;
}
.input.focus::after {
  top: -70%;
  font-size: 1rem;
}
.login .input#email,
.login .input#repeat {
  margin: 0;
  height: 0;
  opacity: 0;
}

.form span {
  display: block;
  color: rgb(110, 89, 167);
  font-size: 1rem;
  cursor: pointer;
}
.form button {
  border: none;
  outline: none;
  margin: 2rem 0 0;
  width: 100%;
  height: 2rem;
  border-radius: 1rem;
  background-color: linear-gradient(
    90deg,
    rgb(181, 154, 254),
    rgb(245, 189, 253)
  );
  box-shadow: 0 0 8px rgb(181, 154, 254);
  cursor: pointer;
  color: #070707;
}
</style>