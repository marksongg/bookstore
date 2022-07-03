<template>
  <div id="body1">
    <div id="box">
      <div id="pic1">
        <img src="@/assets/images10/101703.jpg" width="544" height="168" class="invert"/>
        <img src="@/assets/images10/101704.jpg" width="544" height="168" class="invert"/>
      </div>
      <div id="pic2">
        <img src="@/assets/images10/101705.png" width="100" height="100" class="invert"/>
        <img src="@/assets/images10/101706.png" width="100" height="100" class="invert"/>
        <img src="@/assets/images10/101707.png" width="100" height="100" class="invert"/>
        <img src="@/assets/images10/101708.png" width="100" height="100" class="invert"/>
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
  name:'DivCssJQuery10_1_7',
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
    font-family: 宋体;
    font-size: 12px;
    background-color: #333;
    background-image: url("@/assets/images10/101701.gif");
    background-repeat: repeat-x;
    height: 540px;
  }

  #box {
    width: 550px;
    height: 450px;
    background-image: url("@/assets/images10/101702.png");
    padding: 30px 28px;
    margin: 75px auto 0px auto;
  }

  #pic1 {
    height: 355px;
    text-align: center;
  }

  #pic1 img {
    margin-bottom: 10px;
  }

  #pic2 {
    text-align: center;
  }

  #pic2 img {
    margin-left: 5px;
    margin-right: 5px;
  }

  .invert {
    filter: invert(1);
  }

</style>