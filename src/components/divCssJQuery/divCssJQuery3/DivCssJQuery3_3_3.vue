<template>
  <div id="box">
    <div id="main">
      <div class="font01" id="title">欢迎来到万圣节游乐园</div>
      <div id="text">这里充满了惊喜、活动精彩、无限刺激、充满恐怖，快进入网站惊险之旅吧！</div>
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
  name:'DivCssJQuery3_3_3',
}
</script>

<style scoped>
  * {
    margin: 0px;
    padding: 0px;
    border: 0px;
    font-family: 微软雅黑;
    color: #FFF;
  }

  #box {
    margin-top: 60px;
    margin-left: 20px;
    width: 100%;
    height: 678px;
    padding-top: 200px; /* 这里很重要，控件div里面最初表示行信息*/
    background-image: url('../../../assets/images3/33301.jpg');
    background-repeat: no-repeat;
    background-position: center top;
  }

  #main {
    width: 800px;
    height: auto;
    overflow: hidden;
    margin: 0px auto;
  }

  #title {
    height: 50px;
    text-align: center;
  }

  #text {
    height: 30px;
    text-align: center;
    margin-top: 45px;
  }

  .font01 {
    font-size:  28px;
    font-weight: bold;
    color: #FF6;
    line-height: 50px;
    letter-spacing: 5px;
  }

</style>