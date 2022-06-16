<template>
  <div id="body1">
    <div id="box"><img src="@/assets/images5/53101.png" /></div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      count: 0
    }
  },
  name:'DivCssJQuery5_3_1',
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
    color: #333;
    line-height: 25px;
    background-image: url('@/assets/images5/53102.jpg');
  }

  
  
</style>