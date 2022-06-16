<template>
  <div class="booksNew">
      <div class="book">
          首次制作HTML页面<br/>
          慢慢掌握制作网站页面
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
  name:'DivCssJQuery2_4_3',
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

  video {
    margin: 6px 10px;
  }
  
  h2 {
    color: blue;

  }
</style>