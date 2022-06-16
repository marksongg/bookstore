<template>
  <div id="body1">
    <div id="top"><img src="@/assets/images4/44203.png" width="172" height="28"/></div>
    <div id="main">
      <div id="pic01"><img src="@/assets/images4/44205.jpg" width="600" height="379"/></div>
      <div id="pic02"><img src="@/assets/images4/44206.png" width="130" height="130"/></div>
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
  name:'DivCssJQuery4_4_2',
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
    font-family: 微软雅黑;
    font-size: 14px;
    color: #FFF;
    line-height: 30px;
    background-color: #363432;
    background-image: url('@/assets/images4/44201.png');
    background-repeat: repeat;
  }

  #top {
    height: 55px;
    background-image: url('@/assets/images4/44202.png');
    background-repeat: repeat-x;
    padding-top: 25px;
    padding-left: 25px;
    text-align: left;
  }

  #main {
    width: 620px;
    height: auto;
    margin: 0px auto; /**设置完了后，图片会居中 */
    padding-top: 50px; /**使用padding-top来定位图片初始的高度 */
  }

  #pic01 {
    width: 600px;  /**宽度和img的宽度一致 */
    height: 379px; /**高度和img的高度一致 */
    background-color: #FFF;
    padding: 10px; /**因为div背景设置为白色，加完padding后增加了四周白边 */
  }

  #pic02 {
    width: 130px;  /**宽度和img的宽度一致 */
    height: 130px; /**高度和img的高度一致 */
    position: relative;
    left: 530px;
    top: -440px;
  }


</style>