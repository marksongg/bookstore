<template>
  <div id="body1">
    <div id="box">
      <div id="pic">
        <img src="@/assets/images6/63403.png"/>
        <h1>&nbsp;</h1>
        <div id="title">
          <h1 class="font">沙源隐泉</h1>
          <h1 class="font">余秋雨</h1>
        </div>
      </div>
      <div id="text">
        <p class="font1">
          <span class="font2">惟</span>有大漠中如此一湾，风沙中如此一静，荒凉中如此一景，高坡后如此一跌，才深得天地之韵律，造化之机巧、让人神醉情驰。
        </p>
        <p class="font3">以此推衍、人生、世界、历史，莫不如此。</p>
        <p class="font3">给浮嚣以宁静，给躁急以清冽，给高蹈以平实，给粗犷以明丽。</p>
        <p class="font3">惟其这样，人生才见灵动，世界才显精致，历史才有风韵。</p>
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
  name:'DivCssJQuery6_3_4',
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
    background-image: url('@/assets/images6/63401.png');
    background-repeat: no-repeat;
    background-position: 100px 100px;
    height: 547px;
  }

  #box {
    width: auto;
    background-image: url('@/assets/images6/63402.png');
    background-repeat: no-repeat;
  }

  #pic {
    width: 900px;
    height: 306px;
    margin-top: 35px;
  }

  #pic img {
    float: left;
  }

  #text {
    width: 400px;
    height: 230px;
    margin: 0px auto; /**设置完后，文字居中 */
    margin-top: 0px;
    margin-left: 400px; /**定位文字显示的开始位置 */
    border: dashed 5px #adcfec;
  }

  #title {
    float: left;
    text-align: left;
  }

  .font {
    letter-spacing: 0.5em; /**字与字的间隔 */
  }

  .font1 {
    line-height: 30px; /**行高 */
    text-align: left; /**这个必须追加，不然字的显示会有问题（默认文字居中） */
  }

  .font2 {
    font-size: 36px;
    float: left;
    line-height: 50px;
  }

  .font3 {
    text-indent: 2em; /**首行文字开始前缩进几格，这里是23em == 32px */
    text-align: left; /**这个必须追加，不然字的显示会有问题（默认文字居中） */
  }



  
</style>