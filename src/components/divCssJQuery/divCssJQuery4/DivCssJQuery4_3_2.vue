<template>
  <div id="body1">
    <div id="box">
      <div id="left3"></div>
      <div id="right3"></div>
      <div id="left"></div>
      <div id="right"></div>
      <div id="left2"></div>
      <div id="right2"></div>
      <div id="left4"></div>
      <div id="main4"></div>
      <div id="right4"></div>
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
  name:'DivCssJQuery4_3_2',
}
</script>

<style scoped>
  * {
    margin: 0px;
    padding: 0px;
    border: 0px;
  }

  #body1 {
    margin: 60px 0px 10px 40px;
    width: 1160px;
    height: 624px;
  }

  #box {
    width:804px;
    margin: 60px auto;
  }

  #left {
    width: 400px;
    height: 400px;
    background-color: #F907A8;
    border: solid 1px #06F;
    float: left;
    margin-top: 10px;
  }

  #right {
    width: 400px;
    height: 400px;
    background-color: #FFCCEE;
    border: solid 1px #06F;
    float: left;
    margin-top: 10px;
  }

  #left2 {
    width: 20%;
    height: 400px;
    background-color: #F907A8;
    border: solid 1px #06F;
    float: left;
    margin-top:10px
  }

  #right2 {
    width: 79%;
    height: 400px;
    background-color: #FFCCEE;
    border: solid 1px #06F;
    float: left;
    margin-top:10px
  }

  #left3 {
    width: 100px;
    height: 400px;
    background-color: #F907A8;
    border: solid 1px #06F;
    float: left;
    margin-top:10px
  }

  #right3 {
    width: 300px;
    height: 400px;
    background-color: #FFCCEE;
    border: solid 1px #06F;
    float: left;
    margin-top:10px
  }

  #left4 {
    width: 200px;
    height: 200px;
    background-color: #F907A8;
    margin-top: 10px;
    float: left;
    /* border: solid 1px #06F; */
    /* position: absolute; */
    /* top: 0px; */
    /* left: 0px; */
  }

  #right4 {
    width: 200px;
    height: 200px;
    background-color: #FFCCEE;
    float: left;
    margin-top:10px
    /* border: solid 1px #06F; */
    /* position: absolute; */
    /* top: 0px; */
    /* right: 0px; */
  }

  #main4 {
    width: 400px;
    height: 200px;
    background-color: #EF0F13;
    float: left;
    margin-top:10px
     /* border: solid 1px #06F; */
  }

  

</style>