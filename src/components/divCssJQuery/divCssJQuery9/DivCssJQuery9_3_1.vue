<template>
  <div id="body1">
    <div id="box">
      <div id="menu">
        <ul>
          <li><a href="javascript:;">个人主义</a></li>
          <li><a href="javascript:;">我的音乐</a></li>
          <li><a href="javascript:;">我的日记</a></li>
          <li><a href="javascript:;">我的留言</a></li>
          <li><a href="javascript:;">我的访客</a></li>
          <li><a href="javascript:;">我的相册</a></li>
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
  name:'DivCssJQuery9_3_1',
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
    font-size: 14px;
    font-weight: bold;
    color: #ffffff;
    height: 500px;
  }

  #box {
    width: 100%;
    height: 602px;
    background-image: url("@/assets/images9/93101.jpg");
    background-repeat: no-repeat;
    background-position: center;
  }

  #menu {
    width: 852px;
    height: 29px;
    margin: 30px auto 0px auto; /**设置完了后，表示居中 */
    padding-top: 30px;
  }

  #menu li  {
    list-style-type: none;
    float: left;
  }

  #menu li a {
    width: 130px;
    height: 25px;
    line-height: 25px;
    color: #000000;
    text-align: center;
    margin-left: 4px;
    margin-right: 4px;
    float: left;
  }

  #menu li a:link, #menu li a:visited {
    border: solid 1px #0099FF;
    background-color: #FFF;
    color: #000000;
    text-decoration: none;
  }

  #menu li a:hover{
    border: solid 1px #F90;
    background-color: #39F;
    color: #FFF;
    /* text-decoration: underline; */
  }

  

</style>