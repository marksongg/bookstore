<template>
  <div id="body1">
    <div id="login">
      <form id="form1" name="form1" method="post" action="javascript:;">
        <label for="uname">用户名：<img id="button" src="@/assets/images8/88202.jpg" @click.prevent="login"/></label><input name="uname" type="text" class="border01" id="uname" placeholder="请输入用户名"><br/>
        <label for="upass">密&nbsp;码：</label><input name="upass" type="text" class="border01" id="upass" placeholder="请输入密码"><br/>
        <label for="yanzheng">验证码：</label><input name="yanzheng" type="text" class="border01" id="yanzheng" placeholder="请输入验证码">
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      image: "@/assets/images8/88202.jpg",
      count: 0
    }
  },
  watch:{
    
  },
  methods: {
    login(){
      alert('登録処理中....');
    }
  },
  
  name:'DivCssJQuery8_8_2',
}
</script>

<style scoped>
  * {
    margin: 0px;
    padding: 0px;
    border: 0px;
  }

  #body1 {
    /**这里只有设置了这个参数值后，画面布局才能正常 */
    margin: 60px 1px auto 40px;
    font-family: "宋体";
    font-size: 12px;
    color: #333;
    line-height: 30px;
    background-image: url("@/assets/images8/88201.jpg");
    background-repeat: repeat-x;
    background-position: center top;
    height: 800px;
  }

  #login {
    width: 365px;
    height: 95px;
    padding-top: 237px;
    padding-left: 60px;
    margin: 0px auto;
  }

  #uname, #upass {
    width: 180px;
    height: 18px;
  }

  #yanzheng {
    width: 100px;
    height: 18px;
  }

  #button {
    float: right;
    margin-top: 20px;
    margin-right: 10px;
  }

  .border01 {
    border: solid 1px #FB0509;
  }

  


</style>