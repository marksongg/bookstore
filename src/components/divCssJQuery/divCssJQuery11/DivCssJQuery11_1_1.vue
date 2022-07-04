<template>
  <div id="body1">
    <div id="box">
      <div id="main">
        <div id="title">WEB DESIGNER</div>
        <div id="text1">At the Worldwide Developers Conference 2011, at San Francisco Apple   executives released iOS5 for developers on 6th June 2011and available for users   by end 2011.iOS4.3.3 is Apple&rsquo;s last version upgrade for iOS devices.The iOS 5   update boasts 200 new</div>
        <div id="text2">At the Worldwide Developers Conference 2011, at San Francisco Apple   executives released iOS5 for developers on 6th June 2011and available for users   by end 2011.iOS4.3.3 is Apple&rsquo;s last version upgrade for iOS devices.The iOS 5   update boasts 200 new</div>
        <div id="text3">AttheWorldwideDevelopersConference2011atSanFranciscoAppleexecutivesreleasediOS5fordeveloperson6thJune2011andavailableforusersbyend2011iOS433isAppleslastversionupgradeforiOSdevicesTheiOSAttheWorldwideDevelopersConference2011atSanFranciscoAppleexecutivesreleasediOS5fordeveloperson6thJune2011andavailableforusersbyend2011iOS433isAppleslastversionupgradeforiOSdevicesTheiOS</div>
      </div>
      <div id="right">
        <div class="text1">我们是国内领先的互动多媒体设计公司</div>
        <div class="text2">我们是国内领先的互动多媒体设计公司</div>
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
  name:'DivCssJQuery11_1_1',
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
    color: #333;
    line-height: 25px;
    height: 480px;
  }

  #box {
    width: 1004px;
    height: 790px;
    background-image: url("@/assets/images11/111101.jpg");
    background-repeat: no-repeat;
  }

  #main {
    width: 400px;
    height: 100%;
    overflow: hidden;
    margin-right: 40px;
    float: left;
    margin: 50px 100px 30px 270px; /**设计完这个属性后，main部分的文字居中正常表示 */
  }

  #title {
    height: 100px;
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: 36px;
    font-weight: bold;
    line-height: 100px;
    color: #6D2C00;
    text-align: center;
    text-shadow: 5px 2px 6px #333; /**字体加阴影 */
  }

  #text1 {
    border: solid 1px #D2B57F;
    margin-top: 30px;
    text-align: left;
    text-indent: 24px; /**文章开始缩进 */
  }

  #text2 {
    border:solid 1px #D2B57F;
    margin-top: 30px;
    text-align: left;
    text-indent: 24px; /**文章开始缩进 */
  }

  #text3 {
    border:solid 1px #D2B57F;
    margin-top: 30px;
    text-align: left;
    text-indent: 24px; /**文章开始缩进 */
    word-wrap: break-word; /** 内容将在边界内换行，超出的部分将被隐藏不被表示 */
  }

  #right {
    color: #FFF;
    width: 164px;
    height: 440px;
    background-image: url("@/assets/images11/111102.png");
    background-repeat: no-repeat;
    padding: 60px 10px 165px 10px;
    float: left;
    text-align: left;
  }

  .text1{
    width: 160px;
    height: 30px;
    line-height: 30px;
    margin-bottom: 20px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: clip;
  }

  .text2{
    width: 160px;
    height: 30px;
    line-height: 30px;
    margin-bottom: 20px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis; /**如果文字溢出，则显示...省略号 */
  }


  

</style>