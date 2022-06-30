<template>
  <div id="body1">
    <div id="box">
      <ul>
        <li><a href="#" class="link1">关于官方网站系统升级优化的说明</a></li>
        <li><a href="#" class="link2">智能宝宝向前冲海选赛开始啦，快报名吧</a>！</li>
        <li><a href="#" class="link2">网络晋级赛圆满结束，终级决赛即将开始</a>！</li>
      </ul>
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
  name:'DivCssJQuery9_2_4',
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
    color: #EC5024;
    line-height: 20px;
    height: 500px;
  }

  #box {
    width: 400px;
    height: 474px;
    background-image: url('@/assets/images9/92401.jpg');
    background-repeat: no-repeat;
    margin: 10px auto 0px auto;
    padding: 70px 35px 13px 68px;
  }

  #box li {
    list-style-type: none;
    line-height: 28px;
    margin-bottom: 8px;
    padding-left: 0px;
    float: left; /**设置完了后，link居左表示 */
  }

  .link1:link {
    color: #F60;
    text-decoration: none;
  }

  .link1:hover {
    color: #06C;
    text-decoration: underline;
  }
  .link1:active{
    color: #003;
    text-decoration: underline;
  }
  .link:visited {
    color: #666;
    text-decoration: underline;
  }

  .link2:link {
    color:#F60;
    text-decoration: underline;
  }

  .link2:hover{
    color: #003;
    text-decoration: none;
    margin-top: 1px;
    margin-left: 1px;
  }

  .link2:active {
    color: #333;
    text-decoration: none;
    margin-top: 1px;
    margin-left: 1px;
  }

</style>