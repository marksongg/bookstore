<template>
  <div id="body1">
    <div id="pic">
      <img src="@/assets/images5/54102.jpg" width="147" height="218"/>
      <img src="@/assets/images5/54103.jpg" width="147" height="218"/>
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
  name:'DivCssJQuery5_4_1',
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
    background-image: url('@/assets/images5/54101.jpg');
    background-repeat: no-repeat;
    background-color: #82cdf9;
    height: 540PX;
  }

  #pic {
    width: 490px;
    padding-top: 200px;
    padding-left: 400px;
    /* margin: 335px 0px 0px 550px ; */
  }

  #pic img {
    margin-right: 50px;
    border-style: solid;
    border-color: #0093FF;
    border-width: 8px;
  }

  
</style>