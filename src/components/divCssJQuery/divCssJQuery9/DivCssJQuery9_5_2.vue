<template>
  <div id="body1">
    <div id="top-bg">
      <div id="menu">
        <ul>
          <li><a href="javascript:;"><span class="ico01"></span>最新</a></li>
          <li><a href="javascript:;"><span class="ico02"></span>电台</a></li>
          <li><a href="javascript:;"><span class="ico03"></span>单曲</a></li>
          <li><a href="javascript:;"><span class="ico04"></span>专辑</a></li>
          <li><a href="javascript:;"><span class="ico05"></span>MV</a></li>
          <li><a href="javascript:;"><span class="ico06"></span>查找</a></li>
          <li><a href="javascript:;"><span class="ico07"></span>留言</a></li>
        </ul>
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
  name:'DivCssJQuery9_5_2',
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
    font-family: 微软雅黑;
    font-size: 12px;
    line-height: 25px;
    background-image: url("@/assets/images9/95201.jpg");
    background-repeat: no-repeat;
    background-position: center top;
    height: 480px;
  }

  #top-bg {
    width: 100%;
    height: 50px;
    background-color: #3E3D3D;
    box-shadow:  0px 3px 3px #00FFFB;
  }

  #menu {
    width: 900px;
    height: 50px;
    line-height: 50px;
    margin: 0px auto;
  }

  #menu li {
    list-style-type: none;
    font-weight: bold;
    float: left;
  }

  #menu li a {
    width:128px;
    display: block; /**设定宽度width后，并没有分开，但是加上这个display:block后，距离产生了 */
    height: 50px;
    color: #FFF;
    text-decoration: none;
  }

  .ico01 {
    display: block;
    width: 40px;
    height: 32px;
    float: left;
    background-image: url("@/assets/images9/ico01.png");
    background-repeat: no-repeat;
    margin-top: 10px;
    margin-left: 14px;
  }

   .ico02 {
    display: block;
    width: 40px;
    height: 32px;
    float: left;
    background-image: url("@/assets/images9/ico02.png");
    background-repeat: no-repeat;
    margin-top: 10px;
    margin-left: 14px;
  }

  .ico03 {
    display: block;
    width: 40px;
    height: 32px;
    float: left;
    background-image: url("@/assets/images9/ico03.png");
    background-repeat: no-repeat;
    margin-top: 10px;
    margin-left: 14px;
  }

  .ico04 {
    display: block;
    width: 40px;
    height: 32px;
    float: left;
    background-image: url("@/assets/images9/ico04.png");
    background-repeat: no-repeat;
    margin-top: 10px;
    margin-left: 14px;
  }

  .ico05 {
    display: block;
    width: 40px;
    height: 32px;
    float: left;
    background-image: url("@/assets/images9/ico05.png");
    background-repeat: no-repeat;
    margin-top: 10px;
    margin-left: 14px;
  }

  .ico06 {
    display: block;
    width: 40px;
    height: 32px;
    float: left;
    background-image: url("@/assets/images9/ico06.png");
    background-repeat: no-repeat;
    margin-top: 10px;
    margin-left: 14px;
  }

  .ico07 {
    display: block;
    width: 40px;
    height: 32px;
    float: left;
    background-image: url("@/assets/images9/ico07.png");
    background-repeat: no-repeat;
    margin-top: 10px;
    margin-left: 14px;
  }

  #menu li a:hover {
    color: #F4B3C1;
    text-decoration: underline;
    height: 48px;
    border-bottom: 2px solid #FFF;
  }

  #menu li a:hover .ico01,
  #menu li a:hover .ico02,
  #menu li a:hover .ico03,
  #menu li a:hover .ico04,
  #menu li a:hover .ico05,
  #menu li a:hover .ico06,
  #menu li a:hover .ico07 {
    background-position: left -32px;
    transition: all 0.25s linear 0.01s;
    -webkit-transition: all 0.25s linear 0.01s;
    -moz-transition: all 0.25s linear 0.01s;
    -ms-transition: all 0.25s linear 0.01s;
    -o-transition: all 0.25s linear 0.01s;
  }

  
  
</style>