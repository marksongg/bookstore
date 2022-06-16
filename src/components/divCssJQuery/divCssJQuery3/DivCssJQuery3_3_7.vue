<template>
  <div id="body1">
    <div id="box">
      <div id="title">最省心省力的<span class="font01">国际旅行套餐</span></div>
      <div id="main">
        <!-- img的width和height必须要设置，否则图片显示不正确 -->
        <div class="list01"><img src="../../../assets/images3/33701.jpg" width="480" height="450"/><br/><a href="javascript:;">&gt;&gt;国际旅游专线1</a></div>
        <div class="list01"><img src="../../../assets/images3/33702.jpg" width="480" height="450"/><br/><a href="javascript:;">&gt;&gt;国际旅游专线2</a></div>
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
  name:'DivCssJQuery3_3_7',
}
</script>

<style scoped>
  * {
    margin: 0px;
    padding: 0px;
    border: 0px;
  }

  #body1 {
    font-family: 微软雅黑;
    font-size: 14px;
    color: #FFF;
    line-height: 30px;
    margin: 60px 1px 900px 40px; 
    border: solid 1px;
    background-color: #0bb9f8;
  }

  #box {
    width:1000px;
    height: auto;
    overflow: hidden;
    margin: 0px auto;
  }

  #title {
    height: 80px;
    line-height: 80px;
    text-align: center;
    color: #E1D8BF;
    font-size: 36px;
    letter-spacing: 10px;
  }

  .font01 {
    color: #FFF;
    font-weight: bold;
  }

  #main {
   height: auto;
   overflow: hidden;
  }

  .list01 { /**类的选择器使用. ID的选择器使用# */
    width: 480px;
    height: auto;
    overflow: hidden;
    margin-left: 10px;
    margin-right: 10px;
    text-align: center;
    float: left;
  }

  /* 伪类选择器 */
  a:link {
    color: #960;
    text-decoration: none;
  }

  a:hover {
    color: #FFF;
    text-decoration: underline;
  }

  a:active {
    color: #F30;
    text-decoration: underline;
  }

  a:visited {
    color: #960;
    text-decoration: none;
  }
  
  

</style>