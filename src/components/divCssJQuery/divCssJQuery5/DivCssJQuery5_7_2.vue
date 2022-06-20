<template>
  <div id="body1">
    <div id="top"></div>
    <div id="pic">
      <div id="pic01"><img src="@/assets/images5/57209.png" width="130" height="130" class="baseline"/>垂直对齐为baseline</div>
      <div id="pic01"><img src="@/assets/images5/57204.png" width="130" height="130" class="sub"/>垂直对齐为sub</div>
      <div id="pic01"><img src="@/assets/images5/57205.png" width="130" height="130" class="super"/>垂直对齐为super</div>
      <div id="pic01"><img src="@/assets/images5/57206.png" width="130" height="130" class="top"/>垂直对齐为top</div>
      <div id="pic01"><img src="@/assets/images5/57207.png" width="130" height="130" class="middle"/>>垂直对齐为middle</div>
      <div id="pic01"><img src="@/assets/images5/57208.png" width="130" height="130" class="bottom"/>垂直对齐为bottom</div>
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
  name:'DivCssJQuery5_5_2',
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
    background-image: url('@/assets/images5/57202.jpg');
  }

  #top {
    background-image: url('@/assets/images5/57201.jpg');
    background-repeat: no-repeat;
    background-position: center top;
    height: 388px;
  }

  #pic {
    width: 900px;
    height: auto;
    overflow: hidden;
    margin: 0px auto;
  }

  #pic01 {
    width: 255px;
    background-image: url('@/assets/images5/57203.png');
    background-repeat: no-repeat;
    margin-left: 7px;
    margin-right: 8px;
    margin-bottom: 10px;
    padding: 25px 15px 15px 15px;
    float: left;

    font-family: "微软雅黑";
    font-size: 20px;
  }

  .baseline {
    vertical-align: baseline;
  }

  .sub {
    vertical-align: sub;
  }

  .super {
    vertical-align: super;
  }

  .top {
    vertical-align: top;
  }

  .middle {
    vertical-align: middle;
  }

  .bottom {
    vertical-align: bottom;
  }
</style>