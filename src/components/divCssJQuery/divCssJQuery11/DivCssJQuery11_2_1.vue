<template>
  <div id="body1">
    <div id="box">
      <div id="bg"></div>
    </div>
  </div>
  <div id="body2">
    <div id="box2">
      <div id="bg2"></div>
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
  name:'DivCssJQuery11_2_1',
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
    color: #fff;
    background-image: url("@/assets/images11/111201.jpg");
    background-repeat: no-repeat;
    background-position: center top;
    height: 480px;
  }

  #body2 {
    margin: 0px 1px auto 40px; /**这里只有设置了这个参数值后，画面布局才能正常 */
    font-size: 12px;
    color: #fff;
    background-image: url("@/assets/images11/111201.jpg");
    background-repeat: no-repeat;
    background-position: center top;
    height: 480px;
  }

  #box,#box2 {
    width: 936px;
    height: 402px;
    border-bottom: solid 1px #FFF;
    background-color: #000;
    margin: 113px auto 0px auto;
    padding: 12px;
  }

  #bg {
    width: 938px;
    height: 397px;
    background-image: url("@/assets/images11/111202.jpg");
    background-repeat: no-repeat;
    background-size: contain; /**图像包含进到这个图片中 */
  }

  #bg2 {
    width: 938px;
    height: 397px;
    background-image: url("@/assets/images11/111202.jpg");
    background-repeat: no-repeat;
  }
  

</style>