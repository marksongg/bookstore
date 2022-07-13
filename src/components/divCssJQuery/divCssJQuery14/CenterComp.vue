<template>
  <div id="body1">
    <div id="box">
      <div id="left">
        <div id="title01">春之微风</div>
        <div id="pic01"><img src="@/assets/images14/14105.jpg" width="141" height="119" alt=""/></div>
        <div id="text01">
          <span class="font01">骑行时听入耳即融心的调调</span><br>
          <br>一生中至少要有两次冲动<br>
          一次为奋不顾身的爱情，一次<br>
          为说走就走的旅行。-----<br>
          亲爱的，这不只是一场旅行
        </div>
        <div id="jinru">
          <img src="@/assets/images14/14117.png"/>
        </div>
      </div>

      <div id="center">
        <div id="title01">看书听歌</div>
        <div id="pic01"><img src="@/assets/images14/14106.jpg" width="141" height="119" alt=""/></div>
        <div id="text01">
          <span class="font01">小电幻想，梦里星辰开成花</span><br>
          <br>那些适合午后时光看书发<br>
          呆写字时候听的歌，音乐<br>
          有时是慰藉，在低声吟唱<br>
          时刻给人予力量与思想
        </div>
        <div id="jinru">
          <img src="@/assets/images14/14117.png"/>
        </div>
      </div>

      <div id="right">
        <div id="title01">阿密特</div>
        <div id="pic01"><img src="@/assets/images14/14107.jpg" width="141" height="119" alt=""/></div>
        <div id="text01">
          <span class="font01">天气很好，适合想你</span><br>
          <br>冬天还是有些冷的，我试着把手从兜里拿出来，风吹的掌心好痒呢！<br>
          <br>
        </div>
        <div id="jinru">
          <img src="@/assets/images14/14117.png"/>
        </div>
      </div>

      <div id="list">
        <div id="title04">媒体报道</div>
        <div id="ul">
          <ul>
            <li>引吭高歌校园音乐会唱响京城</li>
            <li>告别乏味的铃声 《多彩铃声》</li>
            <li>iPhone 5S用哪个听音乐？</li>
            <li>歌单人气高看电影开抢票新形式</li>
            <li>社交化将成手机音乐新突破口</li>
            <li>联通沃多米 打响数字音乐集结号</li>
            <li>音乐付费制度 能走多远？</li>
            <li>七大主流音乐播放器横向评测</li>
            <li>艾媒中国无线音乐报告出炉 </li>
            <li>用户体验可提升听觉广告价</li>
          </ul>
          <img src="@/assets/images14/14114.png" id="button" alt=""/>
        </div>
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
  name:'TopComp',
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
    font-family: "微软雅黑";
    font-size: 12px;
    color: #000;
    height: 480px;
  }

  #box {
    width: 1173px;
    height: 402px;
    background-image: url("@/assets/images14/14104.jpg");
    background-repeat: no-repeat;
  }

  #left {
    width: 192px;
    height: 366px;
    margin-left: 200px;
    margin-top: 25px;
    float: left;
    text-align: left;
  }

  #title01 {
    height: 50px;
    font-size: 12px;
    font-weight: bold;
    line-height: 100px;
    color: #0f568b;
    margin-left: 25px;
  }

  #pic01 {
    width: 141px;
    height: 119px;
    margin-left: 25px;
    margin-top: 30px;
  }

  #text01 {
    color: #000000;
    margin-left: 15px;
    margin-top: 20px;
  }

  .font01 {
    color: #208700;
    font-weight: bold;
    font-size: 12px;
  }

  #jinru {
    width: 116px;
    height: 31px;
    margin-left: 22px;
    margin-top: 21px;
  }

  #center, #right {
    width: 192px;
    height: 366px;
    margin-left: 5px;
    margin-top: 25px;
    float: left;
    text-align: left;
  }

  #list {
    width: 150px;
    height: 366px;
    margin-top: 40px;
    margin-left: 20px;
    float: left;
    text-align: left;
  }

  #title04 {
    height: 30px;
    font-size: 12px;
    font-weight: bold;
    color: #F5F2F2;
    margin-left: 20px;
    margin-top: 10px;
  }

  ul {
    width: 205px;
    height: 270px;
    float: inherit;
  }

  ul li {
    line-height: 25px;
    font-size: 12px;
    list-style-type: disc;
    color: #F5F2F2;
    margin-left: 15px;
  }

  #button {
    margin-left: 40px;
  }

</style>