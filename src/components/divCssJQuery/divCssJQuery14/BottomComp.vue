<template>
  <div id="body1">
    <div id="bottom">
      <div id="list">
        <ul>
          <li>帮助中心</li>
          <li>分类找歌</li>
          <li>音乐专题</li>
          <li>友情链接</li>
          <li>关于我们</li>
          <li>网站留言</li>
          <li>合作伙伴</li>
        </ul>
        <br><br><br>创建日期（C）2005-2022 MarkMusic.com<br>
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
  name:'BottomComp',
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
    font-family: "微软雅黑";
    font-size: 12px;
    color: #FFFFFF;
    text-align: center;
    height: 480px;
  }

  #bottom {
    width: 1173px;
    height: 111px;
    background-image: url("@/assets/images14/14113.jpg");
    background-repeat: no-repeat;
  }

  #list {
    width: 503px;
    height: 27px;
    margin: 35px auto 0px auto;
    padding-top: 20px;
    text-align: center;
  }

  #list li {
    float: left;
    color: #F4F4F4;
    list-style-type: none;
    width: 60px;
    text-align: center;
  }

</style>