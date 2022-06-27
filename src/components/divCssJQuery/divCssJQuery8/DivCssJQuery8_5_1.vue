<template>
  <div id="body1">
    <div id="box">
      <!-- action中变成了javascript:;不进行迁移 -->
      <form id="form1" name="form1" method="post" action="javascript:;">
        <p>
          <input type="text" name="uname" id="uname" placeholder="请输入用户名">
        </p>
        <p>
          <input type="text" name="upass" id="upass" placeholder="请输入密码">
        </p>
        <p>
          <input type="checkbox" name="checkbox" id="checkbox"><span class="checkLabel">记住密码</span><label for="checkbox"></label>
          <input type="submit" name="button" id="button" value="登录">
        </p>
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
  name:'DivCssJQuery8_5_1',
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
    font-size: 12px;
    line-height: 25px;
    color: #F9F3F3;
    height: 600px;
    background-image: url("@/assets/images8/85101.jpg");
    background-repeat: no-repeat;
    background-position: top center;
  }

  #box {
    width: 1000px;
    height: 468px;
    margin: 0px auto;
    padding-top: 330px;
    padding-left: 250px;
    text-align: left; /**默认居中表示，如果想用padding-top/padding-left属性，必须要设置此属性 */
    color: #FFF;
  }

  #uname, #upass {
    width: 195px;
    height: 25px;
    background-color: #DAF5FE;
    border: solid 1px #006699;
    margin: 5px;
  }

  #checkbox {
    border: solid 1px #006699;
    margin-top: 20px;
  }

  #button {
    margin-top: 30px;
    margin-left: 20px;
    padding: 10px 50px; /**让按钮变得长和宽。 */
    color: #fff;
    font-family: "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;
    background: #40a46f;
    cursor: pointer;
    font-size: 10px;
    transition: all 0.5s ease-out;
    outline: none;
  }

  .checkLabel {
    color: #000;
    padding-top: 0px;
  }

  

</style>