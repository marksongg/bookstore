<template>
  <div id="body1">
    <div id="box">
      <img src="@/assets/images10/103201.png" width="800" height="494" class="brightness"/>
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
  name:'DivCssJQuery10_1_9',
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
    font-size: 12px;
    color: #333;
    background-image: url("@/assets/images10/101101.jpg");
    height: 540px;
  }

  #box {
    margin: 0px auto;
    padding: 20px 30px 30px 30px;
  }

  .brightness {
    filter: brightness(0.7);
  }

  img {
    border: solid 11px #FFF;
  }

</style>