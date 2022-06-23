<template>
  <div id="body1">
    <div id="daoh">
      <ul class="li">
        <li>专区首页</li>
        <li>新闻公告</li>
        <li>攻略大全</li>
        <li>新手指南</li>
        <li>精彩视频</li>
        <li>部落工具</li>
        <li>加入收藏</li>
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
  name:'DivCssJQuery7_3_1',
}
</script>

<style scoped>
  * {
    margin: 0px;
    padding: 0px;
    border: 0px;
  }

  #body1 {
    margin: 0px 1px auto 40px; /**这里只有设置了这个参数值后，画面布局才能正常 */
    background-image: url('@/assets/images7/73102.png');
    background-repeat: no-repeat;
    background-position: top center;
    font-family: "幼圆";
    font-size: 15px;
    color: #FC1B1B;
    font-weight: bold;
    height: 800px;
  }

  #daoh {
    margin-top: 220px;
    float: left;
    margin-left: 100px;
    background-image: url('@/assets/images7/73101.png');
    background-repeat: no-repeat;
    background-position: left;
    width: 1100px;
  }

  .li {
    padding-left: 40px;
    float: left;
  }

  #daoh li {
    list-style-type: none;
    float: left;
    margin: 35px 30px;
  }

  
  
</style>