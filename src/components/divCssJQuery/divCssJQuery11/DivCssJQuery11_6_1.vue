<template>
  <div id="body1">
    <div id="box">
      判断页面的宽度从而改变盒子的背景颜色~_~!!!
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
  name:'DivCssJQuery11_6_1',
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
    height: 740px;
  }

  #box {
    padding: 10px;
    font-weight: bold;
    text-align: center;
    color: #FFF;
    background-color: #FF0004;
  }

  @media all and (min-width: 200px) {
    #box {
      color: #FFF;
      background-color: #FF0004;
    }
  }

  @media screen and (max-width: 500px) {
    #box {
      color: #000;
      background-color: #F8F71F;
    }
  }
  
</style>