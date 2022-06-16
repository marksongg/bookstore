<template>
  <div class="body1">
      <div class="music">
        <!-- 自动播放 -->
        <!-- <audio controls autoplay="true"> -->
        <audio controls>
          <source src="../../../assets/images2/music.wav">
        </audio>
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
  name:'DivCssJQuery2_6_2',
}
</script>

<style scoped>
  .body1 {
    margin-top: 60px;
    background-color: #000;
    background-image: url('../../../assets/images2/26201.jpg');
    background-repeat: no-repeat;
    background-position: center top;
  }

  .music {
    position: relative;
    top: 30px;
    left: 800px;
    width: 400px;
    height: 700px;
    text-align: center;
    color: #FFF;
  }

</style>