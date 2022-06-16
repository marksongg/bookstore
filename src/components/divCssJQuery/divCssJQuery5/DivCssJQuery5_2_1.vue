<template>
  <div id="body1">
    <div id="top">主页  关于我们</div>
    <div id="center"><img src="@/assets/images5/52102.png" /></div>
    <div id="bottom"></div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      count: 0
    }
  },
  name:'DivCssJQuery5_2_1',
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
    font-size: 28px;
    font-family: "楷体";
    color: #FFF;
    line-height: 30px;
    text-align: center;
    font-weight: bold;
    background-color: #C3F;
  }

  #top {
    width: 100%;
    height: 38px;
    padding-top: 10px;
  }

  #center {
    width: 100%;
    height: 200px;
  }

  #center img {
    margin-top: 100px;
    margin-left: 50px;
    border: solid 3px #000000;
  }

  #bottom {
    width: 100%;
    height: 300px;
    background-image: url('@/assets/images5/52101.png');
    background-repeat: no-repeat;
    background-position: center top;
    padding-bottom: 30px;
  }

  
</style>