<template>
  <div id="body1">
    <div id="menu">
      <ul>
        <li><a href="javascript:;">网站首页</a></li>
        <li><a href="javascript:;">新闻活动</a></li>
        <li><a href="javascript:;" class="after">道具商城</a></li>
        <li><a href="javascript:;">好友闯关</a></li>
        <li><a href="javascript:;">幸运抽奖</a></li>
      </ul>
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
  name:'DivCssJQuery9_7_2',
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
    font-weight: bold;
    background-image: url("@/assets/images9/97201.jpg");
    background-repeat: none;
    background-position: center;
    height: 480px;
  }

  #menu {
    width: 700px;
    height: 115px;
    margin: 0px auto;
    padding: center;
  }

  #menu li {
    list-style-type: none;
    float: left;
  }

  #menu li a {
    width: 129px;
    height: 45px;
    padding-top: 70px;
    margin-left: 6px;
    margin-right: 5px;
    line-height: 25px;
    text-align: center;
    float: left; /**加上这个属性后，显示才算正常 */
  }

  #menu li a:link, #menu li a:active,#menu li a:visited {
    background-image: url("@/assets/images9/97202.gif");
    background-repeat: no-repeat;
    color: #FFF;
    text-decoration: none;
  }

  #menu li a:hover {
    background-image: url("@/assets/images9/97203.gif");
    background-repeat: no-repeat;
    color: yellow;
    text-decoration: none;
  }

  .after {
    cursor: wait; /**鼠标变更等待图标 */
  }
</style>