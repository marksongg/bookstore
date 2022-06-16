<template>
  <div id="body1">
    <div id="box">
      <div id="top"><img src="@/assets/images5/53403.png" width="469" height="132"/></div>
      <div id="text">
        <p class="font01">WE ARE FAMILY</p>
        <p>每一次挖掘，都必须小心翼翼，小小的失误，都可能导致无法挽回的损失。寻找品牌价值的工作，同样如此。</p>
        <p>对于尊敬的客户，我们同样谨小慎微，未敢丝毫懈怠，始终保持热忱与感激，因为我们珍视您长久的信任。</p>
        <p>在中国市场，我们与众多优秀的知名企业合作，用卓越的创意与互动体验为客户提供互联网解决方案，成为他们长期信赖的合作伙伴。我们的专业领域涵盖互动整合行销与企业网站创意设计、MiniSite产品活动网站设计，互动多媒体设计等服务。</p>
        <p>品质：无论是整体的框架，还是局部的细节，您都能感受到我们对于品质的追求。</p>
        <p>创新：从新思想、新创意开始，作为我们工作的主要推动力，您将获得与众不同的策略思想，并且我们将和您一起实施执行。</p>
      </div>
      <div id="pic">
        <p class="font02">我们所提供的服务</p>
        <img src="@/assets/images5/53401.jpg" width="198" height="224"/>
        <img src="@/assets/images5/53402.jpg" width="198" height="224"/>
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
  name:'DivCssJQuery5_3_4',
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
    font-family: "宋体";
    font-size: 12;
    color: #FFF;
    line-height: 24px;
    background-color: #000;
    background-image: url('@/assets/images5/53405.jpg');
    background-repeat: repeat-x;
    background-position: center top;
    background-attachment: fixed; /**背景图像固定 */
  }

  #box {
    width: 500px;
    height: 100%;
    overflow: hidden;
    background-image: url('@/assets/images5/53404.png');
    background-repeat: no-repeat;
    margin: 0px auto; /**设置完这个属性后，图片居中了 */
  }

  #top {
    height: 132px;
    margin-top: 48px;
  }

  #text {
    width:480px;
    height: 100%;
    overflow: hidden;
    margin: 20px auto 0px auto;
  }

  #text p {
    text-indent: 24px; /**文章开始的缩进字节 */
    text-align: left; /**不设置的话，图形不会居中 */
  }

  .font01 {
    font-size: 14px;
    font-weight: bold;
    color: #fd3f92;
    line-height: 50px;
    text-align: left;
  }

  #pic {
    width: 450px;
    height: 100%;
    overflow: hidden;
    margin: 20px auto 20px auto;
  }

  #pic img {
    margin-left: 3px;
    margin-right: 3px;
    border: solid 7px #FFF;
  }

  .font02 {
    font-size: 14px;
    font-weight: bold;
    color: #2EC9FF;
    line-height: 50px;
    text-align: left;
  }

  
  
  
</style>