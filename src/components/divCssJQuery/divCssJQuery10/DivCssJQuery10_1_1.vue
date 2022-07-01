<template>
  <div id="body1">
    <div id="box">
      <img src="@/assets/images10/101103.png" width="800" height="494" alt="">
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
  name:'DivCssJQuery10_1_1',
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
    color: #333;
    /* background-image: url("@/assets/images10/101101.jpg");
    background-repeat: repeat; */
    background-position: center top;
    height: 480px;
    filter: grayscale(1); /**处理为黑白灰度的效果 */
  }

  #box {
    width: 860px;
    height: 594px;
    background-image: url("@/assets/images10/101102.jpg");
    background-repeat: no-repeat;
    margin: 0px auto;
    padding: 100px 10px 30px 30px;
  }

  img {
    margin-top: -30px;
    margin-left: -60px;
  }

</style>