<template>
  <div id="body1">
    <div id="box">
      <div id="title">
        <img src="../../../assets/images3/33505.png"><br/>
        甜品是一个很广的概念，大致分为甜点心和广式糖水。甜品在中国有悠久的历史。一般来说，喜欢吃甜食的人，脾气都不坏，他们的情绪可以被巧克力、蛋糕、布丁、奶酪等一切甜美的食物代谢殆尽。中国食物中的甜品，花样之多，食法讲究，在世界上，恐怕称得是数一数二的了。
      </div>
      <div id="pic">
        <div id="pic1"><img src="../../../assets/images3/33501.jpg" width="225" height="216"/></div>
        <div id="pic2"><img src="../../../assets/images3/33502.jpg" width="225" height="216"/></div>
        <div id="pic3"><img src="../../../assets/images3/33503.jpg" width="225" height="216"/></div>
        <div id="pic4"><img src="../../../assets/images3/33504.jpg" width="225" height="216"/></div>
      </div>
      <div id="btn"><img src="../../../assets/images3/33506.png" width="195" height="53"/></div>
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
  name:'DivCssJQuery3_3_5',
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
    color: #B6B6B6;
    line-height: 30px;
    background-color: #F5AFA1;
    margin: 60px 0px 510px 40px;
    border: solid 1px; /*加个border后，就能显示整个画面了，太棒了！！！ */
  }

  #box {
    height: auto;
    overflow: hidden;
    padding-bottom: 20px;
    margin: 10px 10px 100px 10px;
    background-color: #FFF;
    background-image: url('../../../assets/images3/33507.png');
    background-repeat: repeat-y;
    background-position: center top;
  }

  #title {
    width: 480px;
    height: auto;
    overflow: hidden;
    margin: 0px auto 0px auto; /* 需要设置margin，才能让它居中表示 */
    padding-top: 100px;
    text-align: center;
  }

  #pic {
    width: 980px;
    height: auto;
    overflow: hidden;
    margin: 40px auto;
  }

  #btn {
    text-align: center;
  }

  #pic1, #pic2, #pic3, #pic4 {
    width: 225px;
    height: 216px;
    padding: 2px;
    border: dashed 2px #F5AFA1;
    margin-left: 6px;
    margin-right: 6px;
    float: left;
  }

  

</style>