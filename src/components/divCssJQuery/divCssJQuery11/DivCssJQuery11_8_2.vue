<template>
  <div id="body1">
    <div id="box">
      <h1>我们的宗旨</h1>
      <p>企业文化的灵魂花旗银行企业文化的最优之处就是把提高服务质量和以客户为中心作为银行的长期策略，并充分认识到实施这一战略的关键是要有吸引客户的品牌，为客户供专业、全面的服务。</p>
      <img src="@/assets/images11/115102.jpg" width="300" height="300" alt=""/>
      <img src="@/assets/images11/115103.jpg" width="300" height="300" alt=""/>
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
  name:'DivCssJQuery11_8_2',
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
    color: #F5F3F3;
    line-height: 25px;
    background-image: url("@/assets/images11/115101.jpg");
    background-repeat: no-repeat;
    background-position: center top;
    height: 740px;
  }

  #box {
    width: 800px;
    /* height: 100%; */
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.5); /**黑色，半透明的背景色 */
    /* padding: 20px; */
    /* margin: 250px auto; */
    position: relative;
    top: 100px;
    left: 15%;
    resize: both; /**可以调节黑色背景div的长度和高度 */
    padding: 20px;
  }

  #box h1 {
    line-height: 70px;
    font-weight: bold;
    color: rgb(25, 163, 67);
  }

  #box p {
    text-indent: 24px;
    text-align: left;
  }

  #box img {
    margin-top: 10px;
    margin-left: 70px;
    border: solid 11px #F98307;
    -webkit-box-sizing: border-box; /**虽然设置了，但未起到什么作业 */
    float: left;

    /**边框风格设置 */
    outline-color: #7F7B7B;
    outline-style: groove; /**立体有槽的边框风格 */
    outline-width: 8px;
    outline-offset: 5px;    
  }



  
  
</style>