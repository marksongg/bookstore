<template>
  <div id="body1">
    <div id="top">
      <div id="left">
        <ul>
          <li>首页</li>
          <li>展示</li>
          <li>收藏</li>
          <li>关于我们</li>
          <li>联系我们</li>
        </ul>
      </div>
    </div>
    <div id="pic">
      <img src="@/assets/images5/54201.jpg" class="img3"/>
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
  name:'DivCssJQuery5_4_2',
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
  }

  #top {
    height: 71px;
    width: 100%;
    border-top: solid 11px #d31245;
  }

  #left {
    width: 520px;
    height: 70px;
    margin-left: 50px;
  }

  #left li {
    list-style-type: none;
    float: left;
    padding: 26px 20px;
    border-right: solid 1px #d8d5d5;
    letter-spacing: 2px;
  }

  

</style>