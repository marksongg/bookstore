<template>
  <div id="body1">
    <div id="top">网站首页<span>|</span>博客<span>|</span>网页设计<span>|</span>图标<span>|</span>平面设计<span>|</span>服务品质<span>|</span>联系我们</div>
    <div id="box">
      <img src="@/assets/images4/44402.jpg" width="298" height="234"/>
      <img src="@/assets/images4/44403.jpg" width="298" height="234"/>
      <img src="@/assets/images4/44404.jpg" width="298" height="234"/>
      <img src="@/assets/images4/44405.jpg" width="298" height="234"/>
      <img src="@/assets/images4/44406.jpg" width="298" height="234"/>
      <img src="@/assets/images4/44407.jpg" width="298" height="234"/>
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
  name:'DivCssJQuery4_4_4',
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
    font-family: 微软雅黑;
    font-size: 14px;
    color: #333;
    line-height: 30px;
    background-color: #EBEBEB;
    background-image: url('@/assets/images4/44401.jpg');
    background-repeat: no-repeat;
    background-position: center top;
  }

  #top {
    position: fixed;
    /* width: 100%; */
    width: 1160px;
    height: 50px;
    text-align: center;
    background-color: #FFF;
    border-top: solid 4px #D31245;
    border-bottom: solid 1px #CCC;
  }

  #top span {
    margin-left: 20px;
    margin-right: 20px;
  }

  #box {
    width: 960px;
    height: auto;
    overflow: hidden;
    margin: 60px auto; /**设置完这个属性值后，图片居中 */
    padding: 250px 0px 20px 0px; /**设定图片起始的位置 */
  }

  #box img {
    border: solid 7px #FFF; /**给图片四个边增加白边，类似于[DivCssJQuery4_4_2.vue]->#pic01[background-color][padding] */
    margin: 2px;
  }

  #box img:hover {
    border: solid 7px red;
    cursor: pointer;
  }

  


</style>