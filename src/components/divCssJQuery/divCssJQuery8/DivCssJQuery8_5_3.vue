<template>
  <div id="body1">
    <div id="box">
      <img src="@/assets/images8/85302.gif" width="199" height="39"/>
      <div id="main">
        <span class="font">会员登录</span>
        <form id="form1" name="form2" method="post" action="javascript:;">
          <input type="submit" name="button" id="button" value="登录"/>
          <input name="name" type="text" class="name01" id="name" placeholder="用户名"/>
          <input name="password" type="password" class="name01" id="password" placeholder="密码"/>
        </form>
        <br/>
        <p>忘记密码<span> | </span>注册新用户</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      count: 0
    }
  },
  name:'DivCssJQuery8_5_3',
}
</script>

<style scoped>
  * {
    margin: 0px;
    padding: 0px;
    border: 0px;
  }

  #body1 {
    margin: 60px 1px auto 40px; /**这里只有设置了这个参数值后，画面布局才能正常 */
    font-family: "宋体";
    font-size: 12px;
    color: #06F;
    line-height: 20px;
    background-image: url("@/assets/images8/85201.gif");
    background-repeat: repeat-x;
    height: 390px;
  }

  #box {
    width: 209px;
    height: 185px;
    margin: 150px auto 0px auto;
    background-image: url("@/assets/images8/85301.gif");
    background-repeat: no-repeat;
    padding-top: 5px; /**控件box图层中一个元素img的初期表示位置 */
    /* padding-left: 5px; 
     padding-right: 5px; */
  }

  #main {
    width: 170px;
    height: 98px;
    margin: 15px 15px 24px 15px; /**设置完了后居中表示 */
  }

  .font {
    font-size: 16px;
    line-height: 20px;
    font-weight: bold;
  }

  #name, #password {
    width: 112px;
    height: 23px;
    margin-top: 3px;
    margin-bottom: 3px;
    float: left;
  }

  #button {
    float: right;
    margin-top: 4px;
    width: 50px;
    height: 50px;

    /**设置为边框有弧度的椭圆型 */
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    color: #fff;
    font-family: "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;
    background: #40a46f;
    cursor: pointer;
    font-size: 10px;
    transition: all 0.5s ease-out;
    outline: none;
  }

  p{
    float: left;
    padding-left: 30px;
  }

  #main span {
    color: #C60;
  }

  .name01 {
    border: none;
    /**设置为边框有弧度的椭圆型 */
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    font-family: "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;
    background: #FFF;
    font-size: 10px;
    outline: none;
  }


</style>