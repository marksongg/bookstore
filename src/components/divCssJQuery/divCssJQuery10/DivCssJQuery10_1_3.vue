<template>
  <div id="body1">
    <div id="box">
      <div id="logo"><img src="@/assets/images10/101202.gif" width="259" height="76"></div>
      <div id="menu">
        <ul>
          <li>网站首页</li>
          <li>关于我们</li>
          <li>我们的服务</li>
          <li>我们的作品</li>
          <li>联系我们</li>
        </ul>
      </div>
      <div id="banner"><img src="@/assets/images10/101203.jpg" width="900" height="563" class="alpha"></div>
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
  name:'DivCssJQuery10_1_3',
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
    font-family:宋刚;
    font-size: 12px;
    line-height: 25px;
    color: #F6CC07;
    background-image: url("@/assets/images10/101201.jpg");
    background-repeat: no-repeat;
    height: 540px;
  }

  #box {
    width: 802px;
    height: 100%;
    overflow: hidden;
    margin: 0px auto;
  }

  #logo {
    width: 287px;
    height: 127px;
    padding-top: 19px;
    float: left;
  }

  #menu {
    width: 515px;
    height: 51px;
    padding-top: 88px;
    float: left;
  }

  #menu li {
    list-style-type: none;
    padding-left: 15px;
    padding-right: 15px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    float: left;
    background-color: #321A04;
    margin-right: 20px;
  }

  #banner {
    clear: both;
    width: 800px;
    height: 555px;
    margin-top: -10px;
  }

  .alpha {
    filter: opacity(0.6); /**透明风格 */
  }


</style>