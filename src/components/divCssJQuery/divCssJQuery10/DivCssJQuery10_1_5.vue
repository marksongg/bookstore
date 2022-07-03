<template>
  <div id="body1">
    <div id="top">
      <div id="top-main">
        <div id="logo"><img src="@/assets/images10/101503.png" width="134" height="46"/></div>
        <div id="menu">我们的作品<span>|</span>我们的服务<span>|</span>我们是谁<span>|</span>新闻公告<span>|</span>联系我们<span>|</span>与好友分享</div>
      </div>
    </div>
    <div id="pic"><img src="@/assets/images10/101504.jpg" width="965" height="624" class="saturate"/></div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      count: 0
    }
  },
  name:'DivCssJQuery10_1_5',
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
    color: #333;
    line-height: 20px;
    height: 540px;
  }

  #top {
    width: 100%;
    height: 94px;
    border-bottom: solid 1px #D7D7D7;
  }

  #top-main {
    width: 990px;
    height: 70px;
    margin: 0px auto;
    padding-top: 24px;
  }

  #logo {
    width: 134px;
    height: 70px;
    background-image: url("@/assets/images10/101502.png");
    background-repeat: no-repeat;
    background-position: center bottom;
    float: left;
  }

  #menu {
    width: 700px;
    height: 30px;
    margin-left: 50px;
    margin-top: 20px;
    line-height: 30px;
    text-align: center;
    float: left;
  }

  #menu span {
    margin-left: 15px;
    margin-right: 15px;
  }

  #pic {
    width: 100%;
    height: 400px;
    margin-top: 10px;
    text-align: center;
  }

  .saturate  {
    filter: saturate(2);
  }

  


</style>