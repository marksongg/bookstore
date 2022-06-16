<template>
  <div id="body1">
    <div id="box">
      <img src="@/assets/images4/42502.png" width="527" height="380"/>
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
  name:'DivCssJQuery4_2_5',
}
</script>

<style scoped>
  * {
    margin: 0px;
    padding: 0px;
    border: 0px;
  }

  #body1 {
    background-image: url('@/assets/images4/42501.jpg');
    background-repeat: no-repeat;
    background-position: center top;
  }

  #box {
    width: 527;
    height: 340;
    margin-top: 60px;
    margin-left: 150px;
  }

</style>