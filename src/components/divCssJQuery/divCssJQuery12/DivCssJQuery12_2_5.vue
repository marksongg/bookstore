
<template>
  <div id="body1">
    <h2>与jquery的综合应用</h2>
    <p>Javascript与jQuery</p>
    <p>jQuery事件</p>
    <button type="button">提交</button>
  </div>
</template>

<script>
// 定义jquery
const $ = window.$;
export default {
  data(){
    return {}
  },
  name:'DivCssJQuery12_2_5',
  mounted(){
    // 程序刚加载的时候，调用下面的方法
    this.buttonClickEvent()
  },
  methods: {
    buttonClickEvent(){
      // 点击按钮时
     $("button").click(function(){
      // 所有的p元素隐藏
      $("p").hide();
      })
    }
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
    margin: 60px 1px auto 40px; /**这里只有设置了这个参数值后，画面布局才能正常 */
    font-size: 12px;
    color: #333;
    line-height: 25px;
    height: 480px;
  }

  button {
    width: 100px;
    height: 30px;
    background-color: #255f9e;
    color: #FFF;
    outline-color: #7F7B7B;
    outline-style: groove; /**立体有槽的边框风格 */
    outline-width: 3px;
  }

  button:hover {
    color: #fff;
    background: #ffb100;
  }

  

</style>