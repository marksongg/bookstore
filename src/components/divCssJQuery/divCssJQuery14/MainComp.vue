<template>
  <div id="body1">
    <div id="box">
      <div id="left">
        <div id="title01">热门板块</div>
        <div id="list01">
          <ul>
            <li>版本公告</li>
            <li>活动区域</li>
            <li>常见问题</li>
            <li>音乐电台</li>
            <li>联系我们</li>
            <li>音乐粉丝</li>
            <li>音乐DJ</li>
          </ul>
        </div>
        <div id="title02">最新活动</div>
        <div id="list02">
          <ul>
            <li>我们一起去台北</li>
            <li>巡回演唱会</li>
            <li>来吧灰姑娘</li>
            <li>天黑了，你还记得我吗？</li>
            <li>与星共舞</li>
            <li>金色好声音</li>
          </ul>
        </div>
      </div>


      <div id="center">
        <div id="title03">最新专辑</div>


        <div id="pic01">
          <img src="@/assets/images14/14109.jpg" width="93" height="118" alt="" class="img"/>
          <span class="font01">Let the Road</span><br>
          <br><p>英国流行男团Rixton首张专辑《Let the Road》将于3月2日发行。歌曲共12首</p><br>
          <br>
        </div>

        <div id="pic01">
          <img src="@/assets/images14/14110.jpg" width="93" height="118" alt="" class="img"/>
          <span class="font01">Rebel Heart</span><br>
          <br><p>流行女王，唯一的麦当娜回来再次去破坏世界流行，期待她再回到音乐现场。</p><br>
          <br>
        </div>

        <div id="pic01">
          <img src="@/assets/images14/14111.jpg" width="93" height="118" alt="" class="img"/>
          <span class="font01">Cinderella</span><br>
          <br><p>为了支持深受的父亲，艾拉热情欢迎继母和她的两位女儿进入自己的家庭。然后当父亲也意外去世后，艾拉被继母当作女仆对待，还被恶意稍作“灰姑娘”</p><br>
          <br>
        </div>
      </div>
      <div id="right">
        <div id="xuanxiang">
          <br>
          <span class="font02">问题</span><br><br>
          <form id="form1" name="form1" method="post" action="">
            请选择你喜欢的音乐<br><br>
            <input type="radio" name="m1" value="rock" checked>摇滚乐<br>
            <input type="radio" name="m1" value="jazz">爵士乐<br>
            <input type="radio" name="m1" value="pop">流行乐<br>
            <input type="radio" name="m1" value="Classical">古典乐<br>
            <input type="radio" name="m1" value="New Age">新世纪<br>
          </form>
        </div>

        <div id="delete">
          <span class="font02">留言</span><br><br>
          用户可以通过电子邮件以及其他方式跟我们留言，你的保贵意见是我们最珍贵的财富。<br><br>
        </div>

        <div id="search-bar">
          <ul>
            <li><input type="text"></li>
            <img src="@/assets/images14/14112.png" class="btn" id="searchsubmit"/>
          </ul>
        </div>
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
  name:'MainComp',
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
    color: #000;
    height: 480px;
  }

  #box {
    width: 1173px;
    height: 618px;
    background-image: url("@/assets/images14/14108.jpg");
    background-repeat: no-repeat;
  }

  #left {
    width: 185px;
    height: 563px;
    margin-left: 200px;
    margin-top: 15px;
    float: left;
  }

  #title01 {
    height: 50px;
    font-size: 14px;
    font-weight: bold;
    line-height: 50px;
    color: #0F568B;
    text-align: left;
  }

  #list01 {
    width: 170px;
    height: 180px;
    margin-top: 30px;/**这里需要特别设置list01的高度 */
    float: left;
  }

  #list01 li, #list02 li {
    line-height: 22px;
    font-size: 12px;
    list-style-type: square;
    margin-left: 20px;
    text-align: left;
  }

  #title02 {
    float: left; /**这里是和title01不同的地方，不加上则无法换行。下面其他的参数都是一样的 */
    height: 50px;
    font-size: 14px;
    font-weight: bold;
    line-height: 150px;
    color: #0F568B;
  }

  #list02 {
    width: 170px;
    height: 180px;
    margin-top: 65px; /**这里需要特别设置list02的高度 */
    float: left;
  }

  #center {
    width: 406px;
    height: 566px;
    margin-top: 4px;
    float: left;
  }

  #title03 {
    height: 50px;
    font-size: 14px;
    font-weight: bold;
    line-height: 70px;
    margin-left: 30px;
    color: #0f568b;
    text-align: left;
  }

  #pic01 {
    width: 329px;
    height: 125px;
    margin-left: 30px;
    margin-top: 20px;
    text-align: left;
  }

  #pic01 p{
        text-indent: 24px; /**增加缩进，2空格占位符 */
  }

  .img {
    background-color: #000000;
    height: 125px;
    margin-left: 30px;
    margin-top: 2px;
    float: left;
    margin-right: 10px;
  }

  .font01 {
    color: #208700;
    font-weight: bold;
    font-size: 14px;
    text-align: left;
  }

  #right {
    width: 100px;
    height: 300px;
    text-align: left;
    float: left;
  }

  #xuanxiang {
    width: 158px;
    height: 200px;
    margin-top: 16px;
    margin-left: 20px;
  }

  .font02 {
    color: #004b84;
    font-weight: bold;
    font-size: 14px;
  }

  #delete {
    width: 180px;
    height: 100px;
    margin-top: 16px;
    margin-left: 20px;
  }

  #search-bar {
    width: 179px;
    height: 22px;
    background: #FFFFFF;
    border: solid 1px #939393;
    margin-left: 20px;
  }

  #search-bar input[type="text"] {
    border: none;
    outline: none;
    background: none;
    width: 150px;
  }

  .btn {
    display: inline-block;
    margin-left: 134px;
  }

  #search-bar ul li {
    display: inline-block;
    width: 18px;
  }

</style>