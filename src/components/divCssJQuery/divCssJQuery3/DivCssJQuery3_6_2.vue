<template>
  <div id="body1">
    <h1>中华人民共和国的首都<em>北京</em></h1>
    <p>欢迎来到世界上拥有文化遗产项目最多的城市<em>北京</em><strong>历史文化名城</strong></p>
    <ul>
      <li>你在这里可以感受到：</li>
      <ul>
        <li>北京的昌盛繁华</li>
        <li>千年古城的魅力</li>
        <li>众多的历史名胜和人文景观</li>
      </ul>
    </ul>
    <br/>
    <p id="main" class="font01">内容（<small>类选择器font01</small>）</p>
  </div>
</template>

<script>
export default {
  data(){
    return {
      count: 0
    }
  },
  name:'DivCssJQuery3_6_2',
}
</script>

<style scoped>
  * {
    margin: 0px;
    padding: 0px;
    border: 0px;
  }

  #body1 {
    margin: 60px 1px 600px 40px; 
    text-align: left;
  }

  /* 标签选择器 */
  h1 {
    color: blue;
    text-decoration: underline;
  }

  /* 派生选择器 */
  h1 em {
    color: #007700;
    font-size: 45px;
  }

  p {
    color: black;
  }

  /* 类选择器 */
  .font01 {
    /* color: blue; */
    color: blue !important;

  }
  /* ID选择器 */
  #main {
    color: red;
  }

</style>