<template>
  <div id="body1">
    <div id="bg">
      <div id="logo"><img src="@/assets/images7/74202.png" width="357" height="181"/></div>
      <div id="box">
        <div id="menu">
          <ul>
            <li>舞团简介</li>
            <li>师资力量</li>
            <li>获奖记录</li>
            <li>演出剪辑</li>
            <li>演员活动</li>
          </ul>
        </div>
        <div id="title"></div>
        <div id="main">
          <img src="@/assets/images7/74203.jpg" width="200" height="200" class="img01"/>
          <img src="@/assets/images7/74204.jpg" width="200" height="200" class="img02"/>
          <img src="@/assets/images7/74205.jpg" width="200" height="200" class="img03"/>
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
  name:'DivCssJQuery7_4_2',
}
</script>

<style scoped>
  * {
    margin: 0px;
    padding: 0px;
    border: 0px;
  }

  #body1 {
    margin: 0px 1px auto 40px; /**这里只有设置了这个参数值后，画面布局才能正常 */
    color: #FFF;
    font-weight: bold;
    background-image: url('@/assets/images7/74201.jpg');
    background-repeat: no-repeat;
    background-position: top center;
    height: 525px;
  }

  #box {
    position: relative;
    top: -10px;
    z-index: 1;
    width: 800px;
    height: 100%;
    background-color: #181818;
    margin: 0px auto;
  }

  #menu {
    height: 45px;
    line-height: 45px;
    background-color: #262626;
  }

  #menu li {
    list-style-type: none;
    float: right;
    width: 100px; /**控制每个li的宽度，产生间隔 */
    text-align: center;
    border-left: solid 1px #333;
  }

  #logo {
    width: 357px;
    height: 181px;
    position: relative;
    top: 0px;
    left: 140px;
    z-index: 2;
  }

  #title {
    height: 45px;
    line-height: 45px;
    text-align: center;
    font-size: 20px;
  }

  #main {
    text-align: center;
    padding: 20px;   /**控件图片显示初始位置 */
    background-color: #262626;
  }

  #main img {
    margin-left: 20px;
    border: solid 7px #FFF;
  }

  #title::before {
    content: "舞法舞天";
  }

  .img01 {
    opacity: 0.2;
  }

  .img02 {
    opacity: 0.5
  }

  .img03 {
    opacity: 0.95;
  }

  
  
</style>