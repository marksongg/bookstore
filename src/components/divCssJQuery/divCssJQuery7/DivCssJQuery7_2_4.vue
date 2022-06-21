<template>
  <div id="body1">
    <div id="box">
      <dl>
        <dt>3月5日准点在线 厚奖空前 全新永久黄金武器登场</dt><dd>03-01</dd>
        <dt>3月5日全民嗨翻天，史无前例大奖来袭</dt><dd>03-01</dd>
        <dt>RAZER携手腾讯游戏发布炼狱蝰蛇3500金典版</dt><dd>03-01</dd>
        <dt>官网《幸运子弹》活动即将下线公告</dt><dd>03-01</dd>
        <dt>CFPL S8常规赛倒计时 锋芒毕露抢分忙</dt><dd>03-01</dd>
      </dl>
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
  name:'DivCssJQuery7_2_4',
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
    line-height: 30px;
    background-image: url('@/assets/images7/72402.gif');
    height: 400px;
  }

  #box {
    width: 530px;
    height: 170px;
    padding: 58px 10px 12px 220px;
    margin-top: 30px;
    margin-left: 230px;
    background-image: url('@/assets/images7/72401.gif');
    background-repeat: no-repeat;
    background-position: top center;
    text-align: left;
  }

  #box dt {
    width: 290px;
    float: left;
  }

  #box dd {
    float: left;
  }



  

  
</style>