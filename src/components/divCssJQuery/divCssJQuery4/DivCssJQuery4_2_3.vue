<template>
  <div id="body1">
    <!-- 冰蓝 -->
    <div id="box"><img src="../../../assets/images4/42302.jpg" width="580" height="220"/></div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      count: 0
    }
  },
  name:'DivCssJQuery4_2_3',
}
</script>

<style scoped>
  * {
    margin: 0px;
    padding: 0px;
    border: 0px;
  }

  #body1 {
    margin: 60px 1px 600px 40px; 
    /* 紫色背景 */
    background-image: url('../../../assets/images4/42303.jpg');
    background-repeat: repeat;
    height: 600px;
  }

  #box {
    width: 595px;
    height: 270px;
    /* 电视机 */
    background-image: url('../../../assets/images4/42301.jpg');
    background-repeat: no-repeat;
    margin: 30px auto 0px auto;
    padding-top: 15px;
    /* padding-left: 10px; */
  }

</style>