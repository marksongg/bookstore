<template>
  <div id="body1">
    <div id="box"><p>使用自动空白边居中</p>margin: 0 auto</div>

    <div id="box2"><p>使用定位和负值空白边居中</p>postion:relative left:24%</div>

    <div id="box3"><p>使用定位和负值空白边居中</p>postion:relative left:24% margin-left=-300px</div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      count: 0
    }
  },
  name:'DivCssJQuery4_3_1',
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
    background-color: pink;
    width: 1160px;
    height: 624px;
  }

  #box {
    width: 600px;
    height: 200px;
    color: white;
    text-align: left;
    /* 居中设定方法 */
    margin: 0 auto;
    background-color: #09F;
  }

  #box2 {
    width: 600px;
    height: 200px;
    margin-top: 10px;
    color: white;
    text-align: left;
    background-color: green;
    /* 居中设定方法 */
    position: relative;
    left: 24%;
  }

  #box3 {
    width: 600px;
    height: 200px;
    margin-top: 10px;
    color: white;
    text-align: left;
    background-color: brown;
    /* 居中设定方法 */
    position: relative;
    left: 50%;
    margin-left:-300px;
  }

</style>