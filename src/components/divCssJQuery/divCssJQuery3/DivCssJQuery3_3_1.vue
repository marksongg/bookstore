<template>
  <div class="box">
      <div class="text">
        太空冒险之旅
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
  name:'DivCssJQuery3_3_1',
}
</script>

<style scoped>
  .box {
    margin-top: 60px;
    margin-left: 20px;
    width: 100%;
    height: 200px;
    padding-top: 520px;
    background-image: url('../../../assets/images3/32101.jpg');
    background-repeat: no-repeat;
    background-position: center top;
  }

  .text {
    width: 377px;
    height: 125px;
    background-image: url('../../../assets/images3/32102.png');
    margin: 0px auto;
    font-family: 楷体;
    font-size: 34px;
    line-height: 70px;
    font-weight: bold;
    color: #fff;
    text-align: center;
    letter-spacing: 10px;
  }

</style>