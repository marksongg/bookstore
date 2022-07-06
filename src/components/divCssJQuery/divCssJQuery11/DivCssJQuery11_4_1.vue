<template>
  <div id="body1">
    <div id="box">
      <div id="top"><img src="@/assets/images11/114102.jpg" width="800" height="424" alt=""/></div>
      <div id="text">
        <h1>什么是网页设计</h1>
        <p>随着时代的发展、科学的进步、需求的不断提高，网页设计已经在短短数年内跃升成为一个新的艺术门类，而不再仅仅是一门技术。相比其他传统的艺术设计门类而言，它更突出艺术与技术的结合、形式与内容的统一、交互与情感的诉求。</p>
        <p>在这种时代背景的要求下，人们对网页设计产生了更深层次的审美需求。网页不光是把各种信息简单地堆积起来，能看或者表达清楚就行，更要考虑通过各种设计后段与技术技巧，让受众能更多更有效地接收网页上的各种信息，从而对网站留下深刻的印象，催生消费行为，提升企业品牌形象。</p>
        <p>随着互联网技术的进一步发展与普及，当今时代的网站，更注重审美的要求和个性化的视觉表达，这也对网页设计师这一职业提出了更高层次的要求。一般来说，平面设计中的审美观点都可以套用到网页设计上来，以及利用各种色彩的搭配营造出不同氛围不同形式的美。</p>
        <p>但网页设计也有自己的独特性，在颜色的使用上，它有自己的标准色——&ldquo;安全色&rdquo;；在界面设计上，要充分考虑到浏览者使用的不同浏览器、不同分辨率的各种情况；在元素的使用上，它可以充分利用多媒体的长处，选择最恰当的音频与视频相结合的表达方式，给用户以身临其境的感觉和比交直观的印象。说到底，这还只是一个比较模糊抽象的概念，在网络世界中，有许许多多设计精美的网页值得去学习欣赏和借鉴。</p>
        <p>以上的网页，也仅仅是互联网海洋中众多优秀网页作品的一朵朵小浪花而已，但从以上作品不难看出，一般来说，好的网站应该给人有这样的感觉：干净整洁、条理清晰、专业水准、引人入胜。优秀的网页设计作品是艺术与技术的高度统一，它应该包含视听元素与版式设计两项内容；以主题鲜明、形式与内容相统一、强调整体为设计原则；具有交互性与持续性、多维性、综合性、版式的不可控性、艺术也技术结合的紧密性等五个特点。</p>
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
  name:'DivCssJQuery11_4_1',
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
    font-size: 12px;
    line-height: 20px;
    background-image: url("@/assets/images11/114101.jpg");
    background-repeat: no-repeat;
    height: 740px;
  }

  #box {
    width: 800px;
    height: 100%;
    overflow: hidden;
    margin: 0px auto; /**居中表示 */
    background-color: #F98139;
  }

  #top {
    width: 100%;
    height: 424px;
    background-repeat: no-repeat;
    background-position: right top;
  }

  h1 {
    background-color: #68A0D3;
    line-height: 40px;
    color: #FFF;
    text-align: center;
  }

  P {
    text-indent: 24px;
    text-align: left;
    color: #000000;
  }

  #text {
    -webkit-column-width: 380px;
  }

  
</style>