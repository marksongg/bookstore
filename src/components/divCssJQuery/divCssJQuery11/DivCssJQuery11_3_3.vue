<template>
  <div id="body1">
    <div id="box">
      <div id="top">
        <div id="logo">
          <div id="menu">首页<span class="font">|</span>公司简介<span class="font">|</span>作品展示<span class="font">|</span>联系我们<span class="font">|</span>客户论坛<span class="font">|</span>留言</div>
        </div>
      </div>
      <div id="pic">
        <img src="@/assets/images11/113103.jpg" width="470" height="400" class="img01" alt=""/>
        <img src="@/assets/images11/113104.jpg" width="470" height="400" class="img01" alt=""/>
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
  name:'DivCssJQuery11_3_3',
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
    font-family: 宋体;
    font-size: 14px;
    color: #000;
    line-height: 37px;
    font-weight: bold;
    background-image: url("@/assets/images11/113101.png");
    background-repeat: repeat-x;
    height: 1480px;
  }

  #box {
    /* width: 960px; */
    height: 100%;
    overflow: hidden;
    margin: 0px auto;
  }

  #logo {
    width: 880px;
    height: 191px;
    margin: 0px auto;
    background-image: url("@/assets/images11/113102.png");
    background-repeat: no-repeat;
    background-position: 30px 42px; /**★控制背景图片出现的位置，很重要 */
    padding-left: 180px;
  }

  #menu {
    width: 505px;
    height: 37px;
    text-align: center;
    margin-top: 70px;
    margin-left: 230px;
    border-width: 0px 20px;
    -webkit-border-image:url("@/assets/images11/113105.png") 0 20 0 20 stretch stretch; /**给menu加上类似于背景图像的的属性 */
  }

  .font {
    font-weight: normal;
    margin-left: 15px;
    margin-right: 15px;
  }

  #pic {
    width: 100%; 
    height: 380px;
    padding-bottom: 50px;
    text-align: center;
    background-image: url("@/assets/images11/113103.png");
    /* background-origin: content-box; */
    background-size: 960px 1000px;
    background-repeat: repeat-x;
    padding-top: 20px;
    float: left;
  }

  #pic img {
    margin: 5px;
  }

  .img01 {
    border: 5px solid #FFF;
    /**IE 中可以使用*/
    border-top-color:#0099FF;
    border-right-color:#00CC00;
    border-bottom-color:#FF6600;
    border-left-color:#FF99FF;
    /**下面的属性只有在救援Firefox中使用 */
    -moz-border-top-colors:#0FF #00CCFF #0099FF #0066FF #0033FF;
    -moz-border-right-colors:#0F0 #00CC00 #009900 #006600 #003300;
    -moz-border-bottom-colors:#FF0 #FFCC00 #FF9900 #FF6600 #FF3300;
    -moz-border-left-colors:#FCF #FF99FF #FF66FF #FF33FF #FF00FF;
  }
  
</style>