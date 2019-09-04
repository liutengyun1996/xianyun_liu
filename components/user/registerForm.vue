
<template>
  <el-form :model="form" ref="form" :rules="rules" class="form">
    <el-form-item class="form-item" v-model="form.username">
      <el-input placeholder="用户名手机"></el-input>
    </el-form-item>

    <el-form-item class="form-item" v-model="form.captcha">
      <!-- 文档地址：https://element.eleme.cn/#/zh-CN/component/input#fu-he-xing-shu-ru-kuang -->
      <el-input placeholder="验证码">
        <template slot="append">
          <el-button @click="handleSendCaptcha">发送验证码</el-button>
        </template>
      </el-input>
    </el-form-item>

    <el-form-item class="form-item" v-model="form.nickname">
      <el-input placeholder="你的名字"></el-input>
    </el-form-item>

    <el-form-item class="form-item" v-model="form.password">
      <el-input placeholder="密码" type="password"></el-input>
    </el-form-item>

    <el-form-item class="form-item" v-model="form.checkPassword">
      <el-input placeholder="确认密码" type="password"></el-input>
    </el-form-item>

    <el-button class="submit" type="primary" @click="handleRegSubmit">注册</el-button>
  </el-form>
</template>

 <script>
export default {
  data() {
    //rule当前的规则,目前是空的
    //value输入框的值
    //callback是回调函数,必须要调用 是市场 踩踩踩踩踩踩踩踩踩踩踩踩踩踩踩踩踩踩从                                                                                                                                                                                               
    const checkPassword=()=>{
      if(value===''){
        callback(new Error("请再次输入密码"));
      }else if(value !== this.form.password){
        callback(new Error("两次密码输入不一致！"));
      }else{
        //代表验证通过
        callback();
      }
    }
    return {
      // 表单数据
      form: {
        username:'', //用户名
        nickname:'', //昵称
        captcha:'', //验证码
        password:'', //密码
        checkPassword:'',  //确认密码
      },
      // 表单规则
      rules: {
        username:[{require:true,message:"用户名不能为空",trigger:"blur"}],
        nickname:[{require:true,message:"昵称不能为空",trigger:"blur"}],
        captcha:[{require:true,message:"验证码不能为空",trigger:"blur"}],
        password:[{require:true,message:"密码不能为空",trigger:"blur"}],
        //validator 不能改，表示指向验证函数
        checkPassword:[{validator:checkPassword,trigger:'blur'}]
      }
    }
  },
  methods: {
    // 发送验证码
    handleSendCaptcha() {},
    // 注册
    handleRegSubmit() {
      console.log(this.form);
    }
  }
};
</script>

 <style scoped lang="less">
.form {
  padding: 25px;
}
.form-item {
  margin-bottom: 20px;
}
.form-text {
  font-size: 12px;
  color: #409eff;
  text-align: right;
  line-height: 1;
}
.submit {
  width: 100%;
  margin-top: 10px;
}
</style> 