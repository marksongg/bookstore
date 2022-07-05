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
  name:'DivCssJQuery11_2_3',
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
    color: #FFF;
    background-image: url("@/assets/images11/111201.jpg");
    background-repeat: no-repeat;
    background-position: center 250px; /**背景图片出现位置：居中，距离上面250px */
    height: 480px;
  }

  #box {
    width: 530px;
    height: 331px;
    border-bottom: solid 1px #FFF;
    background-color: #000;
    margin: 113px auto 1px auto;
    padding: 12px;
  }

  #bg {
    margin: 0px auto;
    width: 530px; /**图层bg的宽度 */
    height: 331px; /**图层bg的高度 */
    background-image: url("@/assets/images11/111202.jpg");
    background-repeat: no-repeat;
    background-size: 900px 700px; /**设置图像大小，还可以设置为contain全包含 */
    background-origin: content-box; /**表示的位置 */
    background-clip: padding-box; /**剪裁属性：只显示表示部分 */
  }

  
</style>