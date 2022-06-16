<template>
  <div id="body1">
    <div id="box">
      <div id="title">
        YOUR SHOE,<br/>
        JUST DO IT
      </div>
      <div id="text">
        <ul>
          <li>现在购买&gt;</li>
          <li>店铺地址&gt;</li>
        </ul>
      </div>
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
  name:'DivCssJQuery3_3_6',
}
</script>

<style scoped>
  * {
    margin: 0px;
    padding: 0px;
    border: 0px;
  }

  #body1 {
    font-family: 楷体;
    font-size: 24px;
    font-weight: bold;
    color: #FFF;
    margin: 60px 1px 900px 40px; /**使用margin来控制起始坐标 */
    border: solid 1px;
    background-image: url('../../../assets/images3/33601.jpg');
    background-repeat: no-repeat;
    
  }

  #box {
    width:370px;
    height: 1800px;
    overflow: hidden;
    margin-top: 150px;
    margin-left: 600px;
  }

  #title {
    font-family: Tahoma, Geneva, sans-serif;
    font-size: 55px;
    line-height: 55px;
    overflow: hidden;
    background-repeat: no-repeat;
    background-position: left bottom;
    padding-bottom: 5px;
  }

  #text {
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom: solid 1px #FFF;  /* 一根白线 */
    height: auto;
    overflow: hidden;
  }

  /* 派生选择器 */
  #text li {
    list-style-type: none;
    width: 175px;
    height: 31px;
    background-color: #E90202;
    color: #000;
    line-height: 31px;
    float: left;
    margin-left: 5px;
    margin-right: 5px;
  }

</style>