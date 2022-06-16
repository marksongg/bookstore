<template>
  <div id="body1">
    <div id="text">
      <span class="font01">RIO锐澳鸡尾酒新品上市！</span><br/>
      是由各种列酒，果汁混合而成，含有适应的酒精成分，是一种使人感到爽洁愉快的浪漫饮品。而它之所以受喜爱，只是因为那种似醉微熏，欲拒还迎的美妙感觉像极了爱情的滋味。它是属于年轻人的时尚至酷，代表不羁与个性、叛逆与张扬、率真与纯真、独立与自我。
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
  name:'DivCssJQuery3_5_3',
}
</script>

<style scoped>
  * {
    margin: 0px;
    padding: 0px;
    border: 0px;
  }

  #body1 {
    font-size: 12px;
    color: #9FC119;
    line-height: 30px;
    margin: 60px 1px 600px 40px; 
    background-image: url('../../../assets/images3/35301.jpg');
    background-repeat: no-repeat;
    background-size: 100%;
    height: 600px;
    border: solid 1px;
  }

  #text {
    width: 300px;
    height: auto;
    overflow: hidden;
    margin-left: 12%;
    margin-top: 170px;
    text-align: left;
  }

  .font01 {
    font-family: 微软雅黑;
    font-weight: bold;
    font-size: 14px;
    line-height: 45px;
    display: inline-block;
    border-bottom: 1px dashed #690;
  }
  
  

</style>