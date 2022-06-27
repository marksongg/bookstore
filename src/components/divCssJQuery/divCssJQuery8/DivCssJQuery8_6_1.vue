<template>
  <div id="body1">
    <div id="box">
      <form id="form1" name="form" method="post" action="javascript:;">
        <label>
          <input type="text" name="uname" id="uname" placeholder="请输入用户名">
        </label>
        <label>
          <input type="text" name="upass" id="upass" placeholder="请输入密码">
        </label>
        <input type="checkbox" name="checkbox" id="checkbox"><span class="checkLabel" id="checkLabel">记住密码</span><label for="checkbox"></label>
        <input name="btn" type="button" id="btn" value="登    录">
      </form>
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
  name:'DivCssJQuery8_6_1',
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
    font-size: 12px;
    line-height: 28px;
    color: #FFF;
    background-color: #CFCCCC;
    background-image: url("@/assets/images8/86101.png");
    background-repeat: repeat-x;
    height: 800px;
  }

  #box {
    width: 1000px;
    height: 800px;
    background-image: url("@/assets/images8/86102.jpg");
    background-repeat: no-repeat;
    margin: 0px auto;
  }

  #form1 {
    width: 210px;
    height: 150px;
    margin: 0px auto;
    padding-top:300px;
    padding-left:435px
  }

  #uname,#upass {
    width: 210px;
    height: 33px;
    line-height: 33px;
    border: solid 1px #5A96D2;
    float: left;
    margin-top: 15px;
  }

  #checkbox  {
    float: left;
    margin-top: 7px;
    margin-right: 3px;
  }

  #checkLabel {
    float: left;
    vertical-align: top;
    padding-top: 0px;
  }

  #btn {
    float: right;
    width: 60px;
    height: 24px;
    margin-top: 4px;

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

  #uname:focus, #upass:focus {
    background-color: yellow;
    border-color: #F30;
  }


</style>