<template>
  <div id="body1">
    <div id="text">
      <p class="font">昨天因为你的存在而精彩。</p>
      <p class="font">今天因为你的鼓励而阳光。</p>
      <p class="font">明天因为你而自豪。</p>
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
  name:'DivCssJQuery6_6_2',
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
    background-color: #699b66;
    background-image: url('@/assets/images6/66201.png');
    background-repeat: no-repeat;
    background-position: 128px 100px;
    height: 547px;
  }

  #text {
    width: 600px;
    height: 130px;
    padding-top: 180px;
    padding-left: 430px;
    font-family: "楷体";
    color:#a5c3c2;
    line-height: 30px;
    font-weight: bold;
    font-size: 30px;
  }

  #pic {
    width: 324px;
    padding-left: 430px;
  }

  .font {
    text-align: center;
  }

  
</style>