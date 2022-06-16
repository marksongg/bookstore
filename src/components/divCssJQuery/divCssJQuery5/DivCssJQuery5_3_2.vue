<template>
  <div id="body1">
    <div id="box">
      <div id="text">
        <span class="font">I HAVE A DREAM</span>当我睁开眼，全世界都在跳舞。
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
  name:'DivCssJQuery5_3_2',
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
    font-size: 12px;
    color: #333;
    line-height: 32px;
    background-image: url('@/assets/images5/53202.jpg');
    background-repeat: repeat;/**竖长型的渐变图型进行重复 */
  }

  #box {
    width: 100%;
    height: 528px;
    background-image: url('@/assets/images5/53201.png');
    margin-top: 79px; /**控件图像的初始位置 */
  }

  #text {
    width: 350px;
    height: 150px;
    color: #462f91;
    margin-left: 300px;
    padding-top: 0px;
    font-family: "微软雅黑";
    font-size: 24px;
    font-weight: bold;
  }

  .font {
    font-size: 40px;
    float: left;
    line-height: 50px;
  }

  
  
</style>