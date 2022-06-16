<template>
  <div id="body1">
    <div id="box">
      <div id="logo"><img src="../../../assets/images3/39202.png" width="251" height="42"/></div>
      <div id="text"><span class="font01">南京搞笑的SOGO工作室</span><br/>
      工作室负责人为宋刚先生。2005年毕业于盐城工学院计算机科学与技术专业，已经从事过10多个大型软件的设计、开发、测试、管理等工作。有较强的责任心和团队合作精神！<br/>
      一生懸命頑張りましょう ( ´∀｀ )</div>
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
  name:'DivCssJQuery3_9_2',
}
</script>

<style scoped>
  * {
    margin: 0px;
    padding: 0px;
    border: 0px;
  }

  #body1 {
    font-size: 14px;
    color: #48BEDC;
    margin: 60px 1px 600px 40px; 
    background-image: url('../../../assets/images3/39201.jpg');
    background-repeat: no-repeat;
    background-size: 100%;
    height: 800px;
    border: solid 1px;
  }

  #box {
    width: 700px;
    height: auto;
    overflow: hidden;
    margin: 0px auto;
    padding-top: 40px;
  }

  #logo {
    width: 301px;
    height: 52px;
    margin-top: 0px;
    margin-left: 150px;
  }

  #text {
    width:400px;
    height: auto;
    overflow: hidden;
    margin-top: 120px;
    color: #194959;
    line-height: 25px;
    text-align: left;
  }

  .font01 {
    font-family: 微软雅黑;
    font-size: 20px;
    font-weight: bold;
    line-height: 40px;
  }
  
  

</style>