<template>
  <div id="body1">
    <div id="box">
      <div id="pic"><img src="@/assets/images4/47201.jpg" width="700" height="200"/></div>
      <div id="pic01"><img src="@/assets/images4/47202.jpg" width="700" height="200"/></div>
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
  name:'DivCssJQuery4_7_2',
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
    background-image: url('@/assets/images4/47203.jpg');
    background-repeat: repeat;
    background-position: center top;
  }

  #box {
    width: 860px;
    height: 472px;
    margin: 60px auto; /**设置完这个属性值后，图片居中 */
    background-image: url('@/assets/images4/47204.png');
    background-repeat: no-repeat;
    background-position: center top;
    margin-bottom: 15px;
    padding-top: 75px;
    padding-left: 160px;
  }

  #box img {
    border: solid 7px rgb(247, 239, 239);
  }

  #pic {
    width: 700px;
    height: 200px;
    margin-bottom: 20px;
  }

  #pic01 {
    width: 700px;
    height: 200px;
    margin-top: 10px;
  }
</style>