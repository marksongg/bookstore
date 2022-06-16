<template>
  <div id="body1">
    <div id="box">
      <img src="@/assets/images4/42402.jpg" width="300" height="400" class="pic01"/>
      <img src="@/assets/images4/42403.jpg" width="300" height="400" class="pic02"/>
      <img src="@/assets/images4/42404.jpg" width="300" height="400" class="pic03"/>
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
  name:'DivCssJQuery4_2_4',
}
</script>

<style scoped>
  * {
    margin: 0px;
    padding: 0px;
    border: 0px;
  }

  #body1 {
    font-family: 14px;
    color: #FFF;
    line-height: 30px;
    margin: 60px 1px 600px 40px; 
    background-image: url('@/assets/images4/42401.png');
    background-repeat: repeat;
    background-position: center top;
  }

  #box {
    width: 1000px;
    height: auto;
    overflow: hidden;
    margin: 0px auto 0px auto;
    text-align: center;
  }

  #box img {
    margin-left: 5px;
    margin-right: 5px;
  }

  .pic01 {
    border: solid 5px #2bf902;
  }

  .pic02 {
    border-top: dashed 5px #FFC;
    border-left: dotted 5px #CCF;
    border-bottom: solid 5px #99FF33;
    border-right: double 5px #FFCC00;
  }

  .pic03 {
    border-style: groove;
    border-width: 5px;
    border-color: #2200FF;
  }

</style>