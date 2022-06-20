<template>
  <div id="body1">
    <div id="top">
      <div id="daoh"><span>首页</span><span>收藏</span><span>意见反馈</span><span>联系我们</span></div>
    </div>
    <div id="pic">
      <div id="pic01"><img src="@/assets/images5/54302.jpg" class="img"/></div>
      <div id="pic02"><img src="@/assets/images5/54303.jpg" class="img"/></div>
      <div id="pic03"><img src="@/assets/images5/54304.jpg" class="img"/></div>
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
  name:'DivCssJQuery5_4_3',
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
    background-image: url('@/assets/images5/54301.jpg');
  }

  #top {
    height: 47px;
    background-color: #dff1fd;
    padding-top: 30px;
  }

  #daoh {
    height: 47px;
    background-color: #3f2626;
    border-top: solid 2px #000000;
    border-bottom: solid 2px #000000;
    text-align: center;
    line-height: 45px;
    color: #ffffff;
  }

  #top span {
    border-right: solid 1px #fff;
    margin-left: 4px;
    margin-right: 4px;
    letter-spacing: 10px;
  }

  #pic {
    margin:  0px auto;
    margin-top: 4px;
  }

  #pic01 {
    width: 500px;
    margin: 30px auto 0px auto;
    padding-bottom: 25px;
    border-bottom: dashed 3px #FFCC00;
    text-align: left;
  }

   #pic02 {
    width: 500px;
    margin: 30px auto 0px auto;
    padding-bottom: 25px;
    border-bottom: dashed 3px #FFCC00;
    text-align: center;
  }

   #pic03 {
    width: 500px;
    margin: 30px auto 0px auto;
    padding-bottom: 25px;
    border-bottom: dashed 3px #FFCC00;
    text-align: right;
  }

</style>