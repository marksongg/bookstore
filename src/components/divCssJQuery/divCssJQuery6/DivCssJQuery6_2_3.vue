<template>
  <div id="body1">
    <div id="box">
      <div id="pic"><img src="@/assets/images6/62302.png" width="550" height="147"/></div>
      <div id="text" class="font01">
        您那佝偻的背影，勾起了我无限的伤情；您那勤劳的双手，唤起了我无限的激情。母亲，天地下最辛苦的名词；母亲，天底下最慈祥的名词。十月怀胎，一丝快乐，一份痛苦；三年哺乳，几分期望，几份辛苦。我们呱呱坠地，呀呀学步，不知道您要受尽多少的辛苦；我们头痛发热，学习退步，不知道您要承受多少的痛楚。我们远离家乡，您在家守望；我们回家看看，你却无限唠叨。字字句句，无不是对我们的期望。母亲，伟大的母亲。
      </div>
      <div id="welcome" class="font02">
        &gt;&gt;Welcome
      </div>
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
  name:'DivCssJQuery6_2_3',
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
    background-image: url('@/assets/images6/62301.jpg');
    background-repeat: no-repeat;
    background-position: center -150px;
    background-color: #FF9393;
    line-height: 30px;
    font-family: "宋体";
  }

  #box {
    width: 660px;
    height: auto;
    overflow: hidden;
    margin: 0px auto;
    padding-top: 50px; /**设置dear mum图片出现的位置 */
  }

  #pic {
    width: 550px;
    height: 147px;
    margin: 0px auto;
  }

  #text {
    width: 600px;
    height: 200px;
    text-align: center;
    margin: 0px auto;
    margin-top:20px; /**设置text文本出现的位置 */
  }

  #welcome {
    text-align: center;
    margin-top: 60px; /**设置welcome文本出现的位置 */
    margin-bottom: 40px;
  }

  .font01 {
    font-family: 幼圆;
    font-size: 20px;
    color: #000000;
  }

  .font02 {
    font-family: "Arial Black";
    font-size: 2em; /** 1em =16px */
    color: #FF0004;
  }


  
</style>