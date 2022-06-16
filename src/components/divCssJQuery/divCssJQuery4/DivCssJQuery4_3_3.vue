<template>
  <div id="body1">
      <div id="left"></div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      count: 0
    }
  },
  name:'DivCssJQuery4_3_3',
}
</script>

<style scoped>
  * {
    margin: 0px;
    padding: 0px;
    border: 0px;
  }

  #body1 {
    margin: 0px;
    height: 100%;
  }

  #left {
    margin: 50px 0px 0px 40px;
    width: 400px;
    height: 100%;
    background-color: #09f;
    border: 2px solid #06F;
    position: absolute;
    float: left;
  }
</style>