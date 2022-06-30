<template>
  <div id="body1">
    <div id="menu-bg">
      <div id="menu">
        <ul>
          <li><a href="javascript:;">天气预报</a></li>
          <li><a href="javascript:;">空气质量</a></li>
          <li><a href="javascript:;">降水量</a></li>
          <li><a href="javascript:;">风力方向</a></li>
          <li><a href="javascript:;">24小时温度</a></li>
          <li><a href="javascript:;">相关指数</a></li>
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
  name:'DivCssJQuery9_5_1',
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
    font-size: 12px;
    line-height: 25px;
    color: #FFF;
    background-image: url("@/assets/images9/95101.jpg");
    background-repeat: no-repeat;
    background-position: center center;
    overflow-x: hidden;
    height: 500px;
  }

  #menu-bg {
    position: absolute;
    top: 400px;
    left: 20px;
    width: 100%;
    height: 25px;
    background-color: #E95383;
    transform: rotate(-10deg); /**通过这个属性进行旋转 */
    -moz-transform: rotate(-10deg);
    -ms-transform: rotate(-10deg);
    -o-transform: rotate(-10deg);
    -webkit-transform: rotate(-10deg);
  }

  #menu {
    width: 900px;
    height: 25px;
    margin: 0px auto;
  }

  #menu li {
    list-style-type: none;
    float: left;
    width: 150px; /**设置width，类似于设置了间隔 */
    text-align: center;
  }

  #menu li a:link {
    color: #FFF;
    text-decoration: none;
  }

  #menu li a:hover {
    color: #F4B3C1;
    text-decoration: underline;
  }

  #menu li a:active {
    color: #F4B3C1;
    text-decoration: underline;
  }

  #menu li a:visited {
    color: #FFF;
    text-decoration: none;
  }

  
</style>