<template>
  <div id="body1">
    <div id="box"><img src="@/assets/images7/73202.jpg" width="1024" height="630"/></div>
    <div id="daoh">
      <div id="text">
        <ul>
          <li>店长推荐</li>
          <li>本月热卖</li>
          <li>新品上架</li>
          <li>男装专区</li>
          <li>女装专区</li>
          <li>电子专区</li>
        </ul>
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
  name:'DivCssJQuery7_3_2',
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
    height: 800px;
  }

  #daoh {
    height: 613px;
    width: 157px;
    background-image: url('@/assets/images7/73201.png');
    background-repeat: no-repeat;
    position: absolute; /**绝对定位，元素可以通过top. left等属性进行设置 */
    top: 150px;
    left: 120px;
  }

  #text {
    padding-left: 18px;
    margin-top: 190px;
    width: 120px;
    color: #000000;
    line-height: 40px;
  }

  #text li {
    list-style-type: none;
    font-family: "微软雅黑";
    font-weight: bold;
    border-bottom: dashed 2px #CCCCCC;
  }



  
  
</style>