<template>
  <div id="body1">
    <div id="box">
      <div id="bg"></div>
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
  name:'DivCssJQuery11_2_2',
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

  #box {
    width: 979px;
    height: 731px;
    border-bottom: solid 1px #FFF;
    background-color: #000;
    margin: 113px auto 1px auto;
    padding: 12px;
  }

  #bg {
    margin: 0px auto; /**加完此属性，画像居中表示 */
    width: 930px;
    height: 700px;
    border: dashed 15px #FFF;
    background-image: url("@/assets/images11/111202.jpg");
    background-repeat: no-repeat;
    background-size: 930px 700px;
    background-origin: content-box;
  }
</style>