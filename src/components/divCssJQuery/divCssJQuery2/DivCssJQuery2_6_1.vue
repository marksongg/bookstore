<template>
  <div class="body1">
    <div class="box">
        <div class="movie">
          <video controls width="484" height="273" autoplay="true">
            <!-- <source type="video/mp4" src="@/assets/images2/movie.mp4"> -->
          </video>
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
  name:'DivCssJQuery2_6_1',
}
</script>

<style scoped>
  .body1 {
    margin-top: 60px;
    background-image: url('../../../assets/images2/26101.jpg');
    background-repeat: no-repeat;
    background-position: center top;
  }

  .movie {
    width: 484px;
    height: 273px;
    background-image: url('../../../assets/images2/26102.png');
    background-repeat: no-repeat;
    padding: 80px 248px 247px 248px;
    color: #FFF;
  }


</style>