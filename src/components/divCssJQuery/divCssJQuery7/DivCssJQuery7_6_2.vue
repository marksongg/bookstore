<template>
  <div id="body1">
    <div id="box">
      <div id="text">
        <ul>
          <li class="special">即将到来的平衡性调整，战歌指挥官</li>
          <li class="special">[ 冠军的试练 ]活动第二弹</li>
          <li class="special">[ 冠军的试练 ]截图分享活动</li>
          <li class="special">你好，旅行者！</li>
          <li>论坛新增卡牌属性显示功能！</li>
          <li>论坛功能更新，帖子列表</li>
          <li>社区MVP玩家计划指南</li>
          <li>春季特惠活动时间预告</li>
          <li>冬季特惠活动即将下线</li>
        </ul>
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
  name:'DivCssJQuery7_6_2',
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
    font-size: 23px;
    line-height: 35px;
    color: #ffb980;
    background-image: url('@/assets/images7/123.png');
    background-repeat: no-repeat;
    background-position: top center;
    height: 800px;
  }

  #box {
    width: 900px;
    margin: 330px auot 50px auto;
  }

  #text {
    height: 280px;
    padding-top: 355px;
    padding-left: 450px;
    text-align: left;
  }

  #text li {
    list-style-position: inside;
  }

  .special {
    list-style-type: square;
  }
  
</style>