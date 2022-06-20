<template>
  <div id="body1">
    <div id="box">
      <img src="@/assets/images6/62702.png" width="243" height="58" alt=""/>
      <div id="text">
        <p class="font01">it is spring again and the window can be left open as often as one would like. </p>
        <p class="font02"> s spring comes in through the windows, </p>
        <p class="font03">so people -- unable to bear staying inside any longer -- go outdoors. </p>
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
  name:'DivCssJQuery6_2_7',
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
    background-image: url('@/assets/images6/62701.jpg');
    background-repeat: no-repeat;
    height: 547px;
  }

  #box {
    padding-top: 30px;
    width: 450px;
    height: 120px;
    padding-left: 680px;
    line-height: 30px;
  }

  #text {
    margin-top: 30px;
    width: 250px;
    height: 120px;
    padding-left: 110px;
    line-height: 30px;
    text-align: left;
  }

  p {
    margin-top: 20px;
  }

  .font01 {
    text-transform: capitalize;/**首字母大写 */
    text-decoration: underline;/**下划线 */
  }

  .font02 {
    
    text-transform: uppercase; /**全大写 */
    text-decoration: overline; /**上面划一条线 */
  }

  .font03 {
    text-transform: lowercase;/**全小写 */
    text-decoration: line-through;/**删除线 */
  }
</style>