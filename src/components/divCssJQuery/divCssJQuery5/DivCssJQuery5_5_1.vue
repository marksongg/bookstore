<template>
  <div id="body1">
    <div id="box">
      <div id="top">
        <img src="@/assets/images5/55107.png" width="142" height="71"/>
        <img src="@/assets/images5/55108.png" width="142" height="71"/>
        <img src="@/assets/images5/55109.png" width="142" height="71"/>
        <img src="@/assets/images5/55110.png" width="142" height="71"/>
      </div>
      <div id="pic">
        <img src="@/assets/images5/55104.png"/>
        <img src="@/assets/images5/55101.png"/>
      </div>
      <div id="text">
        <div id="text1"><img src="@/assets/images5/55103.png" width="124" height="133"/>从地球诞生之初，一种奇怪的生物便出现在这颗蓝色的星球上。他们不断进化、蜕变，终于成为我们所熟悉的小黄人的模样。小黄人们毕生寻找邪恶的老大，但努力最终化成一场空。经历了一段沉寂，名叫凯文的小黄人决定上路，他带着斯图尔特和鲍勃，漂洋过海来到美国。</div>
        <div id="text2"><img src="@/assets/images5/55102.png" width="124" height="133"/>三个小家伙偶然听说奥兰多即将召开“恶人大会”，于是忙不迭地赶了过去，并且阴差阳错成为女魔头斯嘉丽·杀人狂（桑德拉·布洛克 Sandra Bullock 配音）的随从。很快斯嘉丽交给他们一个任务，那就是窃取英国女王的王冠。</div>
      </div>
      <div id="text3">
        <div id="text1"><img src="@/assets/images5/55103.png" width="124" height="133"/>从地球诞生之初，一种奇怪的生物便出现在这颗蓝色的星球上。他们不断进化、蜕变，终于成为我们所熟悉的小黄人的模样。小黄人们毕生寻找邪恶的老大，但努力最终化成一场空。经历了一段沉寂，名叫凯文的小黄人决定上路，他带着斯图尔特和鲍勃，漂洋过海来到美国。</div>
        <div id="text2"><img src="@/assets/images5/55102.png" width="124" height="133"/>三个小家伙偶然听说奥兰多即将召开“恶人大会”，于是忙不迭地赶了过去，并且阴差阳错成为女魔头斯嘉丽·杀人狂（桑德拉·布洛克 Sandra Bullock 配音）的随从。很快斯嘉丽交给他们一个任务，那就是窃取英国女王的王冠。</div>
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
  name:'DivCssJQuery5_5_1',
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
    background-image: url("@/assets/images5/55105.png");
    background-repeat: repeat;
    background-position: center top;
  }

  #box {
    width: 980px;
    margin: 5px auto; /**设置完了后，4张图片居中了 */
  }

  #top {
    width: 608px;
    margin: 5px auto;
  }

  #top img {
    margin: 5px;
  }

  #pic img {
    margin-top: 70px;
    vertical-align: center;
  }

  #text, #text3 {
    background-image: url('@/assets/images5/55111.png');
    background-repeat: no-repeat;
    background-position: center top;
    padding: 28px 37px;
    height: 226px;
  }

  #text1 {
    width: 415px;
    height: auto;
    overflow: hidden;
    float: left;
    margin-top: 20px;
    margin-left: 20px;
    margin-right: 28px;
    text-align: left;
  }

  #text2 {
    width: 415px;
    height: auto;
    overflow: hidden;
    float: left;
    margin-top: 20px;
    margin-right: 28px;
    text-align: left;
  }

  #text img {
    float: right;
  }

  #text3 img {
    float: left;
    margin: 8px 15px;
  }

</style>