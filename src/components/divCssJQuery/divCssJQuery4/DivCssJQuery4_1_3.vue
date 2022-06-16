<template>
  <div id="box">
    <div id= "top">顶部</div>
    <div id="main">
      <div id="left">左</div>
      <div id="right">右</div>
    </div>
    <div id="bottom">底部</div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      count: 0
    }
  },
  name:'DivCssJQuery4_1_3',
}
</script>

<style scoped>
  * {
    margin: 0px;
    padding: 0px;
    border: 0px;
  }

  div {
    margin: 1px 2px 3px 4px;
    padding: 1px 2px 3px 4px;
    border: solid 1px #000000;
  }

  #box {
    margin-top: 60px;
  }

 

</style>