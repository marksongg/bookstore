<template>
  <div class="booksNew">
    <div class="canvas">
      <button @click="drawCanvas">变换Canvas颜色</button>
      <canvas id="myCanvas" width="400" height="400"></canvas>
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
  name:'DivCssJQuery2_8_2',
  mounted(){
      this.drawCanvas();
  },
  methods:{
    drawCanvas(){
      this.count++;
      var canvas = document.getElementById('myCanvas');
      var ctx = canvas.getContext('2d');
      ctx.beginPath();
      ctx.arc(150, 150, 150, 0, Math.PI*2, true);
      // 随机取得颜色
      ctx.fillStyle = 'hsl(' + 360 * Math.random() + ', 50%, 50%)';
      ctx.fill();
    }
  }
}
</script>

<style scoped>
  .booksNew {
      width: 100%;
      float: left;
      text-align: center;
      align-content: center;
  }

  .canvas {
    float: center;
    margin-top: 60px;
  }
</style>