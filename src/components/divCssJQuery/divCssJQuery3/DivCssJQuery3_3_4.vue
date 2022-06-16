<template>
  <body>
    <div id="menu">
      <p>&nbsp;</p>
      <p>网站首页</p>
      <p>我们的服务</p>
      <p>合作客户</p>
      <p>我们的作品</p>
      <p>联系我们</p>
    </div>
  </body>
</template>

<script>
export default {
  data(){
    return {
      count: 0
    }
  },
  name:'DivCssJQuery3_3_4',
}
</script>

<style scoped>
  * {
    margin: 0px;
    padding: 0px;
    border: 0px;
  }

  /* body 标签选择器 */
  body {
    font-family: 微软雅黑;
    background-color: #002D78;
    background-image: url('../../../assets/images3/33401.jpg');
    background-repeat: no-repeat;
    background-position: bottom bottom;
    height: 700px;
  }

  #menu {
    margin-top: 60px;
    margin-left: 20px; /*整个div层的位置 */
    width: 120px;
    height: 100%;
    text-align: left;
    padding-left: 20px; /*整个div层里内容的初始位置 */
    font-size: 14px;
    font-weight: bold;
    line-height: 50px;
    color: #FFF;
    background-color: #F60;

  }

</style>