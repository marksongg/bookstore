<template>
  <div id="body1">
    <div id="box">
      <div id="logo"><img src="@/assets/images14/logo.png" alt="" width="263" height="73" class="logo"/></div>
      <div id="sousuo">
        <input type="text" name="name" id="name" class="name01"/>
        <img id="imageField" src="@/assets/images14/14103.png"/>
      </div>
    </div>
    <div id="main"></div>
    <div id="menu">
      <ul>
        <li><a href="#">发现音乐</a>
          <ul>
            <li><a href="#">经典</a></li>
            <li><a href="#">摇滚</a></li>
            <li><a href="#">网络</a></li>
            <li><a href="#">舞曲</a></li>
            <li><a href="#">疗伤</a></li>
          </ul>
        </li>

        <li><a href="#">专辑</a>
          <ul>
            <li><a href="#">当你老了</a></li>
            <li><a href="#">1989</a></li>
            <li><a href="#">夜色</a></li>
            <li><a href="#">勇敢</a></li>
            <li><a href="#">征服</a></li>
          </ul>
        </li>

        <li><a href="#">排行榜</a>
          <ul>
            <li><a href="#">华语榜</a></li>
            <li><a href="#">韩国榜</a></li>
            <li><a href="#">欧美榜</a></li>
            <li><a href="#">粤语榜</a></li>
            <li><a href="#">日本榜</a></li>
          </ul>
        </li>
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
  name:'TopComp',
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
    font-size: 15px;
    color: #FDFBFB;
    height: 480px;
  }

  #box {
    width: 1173px;
    height: 101px;
    background-image: url("@/assets/images14/14101.jpg");
    background-repeat: no-repeat;
  }

  #logo {
    width: 269px;
    height: 73px;
    margin-left: 60px;
    margin-top: 15px;
    float: left;
  }

  #sousuo {
    float: left;
    width: 250px;
    height: 30px;
    margin-left: 550px;
    margin-top: 50px;
  }

  .name01 {
    margin-top: 5px;
    height: 20px;
    border: solid 1px #8C8C8C;
    background-color: #FFF;
  }

  #imageField {
    position: relative;
    top: 5px;
    left: 5px;
    height: 20px;
  }

  #main {
    width: 1173px;
    height: 288px;
    background-image: url("@/assets/images14/14102.jpg");
    background-repeat: no-repeat;
    margin: 0px;
  }

  #menu {
    border-right: none;
    overflow: hidden;
    float: left;
    margin: -75px 0 0 200px;
  }

  ul, li {
    list-style-type: none;
  }

  a {
    text-decoration: none;
  }

  #menu ul li {
    float:left
  }

  #menu ul li a {
    width: 80px;
    height: 35px;
    text-align: center;
    line-height: 40px;
    display: block;
    color: #F4F4F4;
  }
  #menu ul li a:hover {
    color: #f00;
  }

  #menu ul li ul {
    position:absolute;
    display: none;
  }

  #menu ul li ul li {
    float: left;
    padding-right: 3px;
  }

  #menu ul li ul li a {
    border-right: none;
  }

  #menu ul li:hover ul{
    display: block;
  }

  

  

</style>