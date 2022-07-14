<template>
  <div id="body1">
    <div id="pic-top">
      <TopComp/>
    </div>
    <div id="pic-center">
      <CenterComp/>
    </div>
    <div id="pic-main">
      <MainComp/>
    </div>
    <div id="pic-bottom">
      <BottomComp/>
    </div>
  </div>
</template>

<script>
import TopComp from '@/components/divCssJQuery/divCssJQuery14/TopComp.vue'
import CenterComp from '@/components/divCssJQuery/divCssJQuery14/CenterComp.vue'
import MainComp from '@/components/divCssJQuery/divCssJQuery14/MainComp.vue'
import BottomComp from '@/components/divCssJQuery/divCssJQuery14/BottomComp.vue'
export default {
  data(){
    return {
      count: 0
    }
  },
  name:'DivCssJQuery14_1',
  components:{
    TopComp,
    CenterComp,
    MainComp,
    BottomComp
  }
}
</script>

<style scoped>
  * {
    margin: 0px;
    padding: 0px;
    border: 0px;
  }

  #body1 {
    margin: 60px 1px 0px 40px; /**这里只有设置了这个参数值后，画面布局才能正常 */
    height: 480px;
  }

  #pic-top, #pic-center, #pic-main, #pic-bottom {
    margin-left: -45px;
  }

  #pic-center {
    margin-top: -152px;
  }

  #pic-main {
    margin-top: -138px;
  }
</style>