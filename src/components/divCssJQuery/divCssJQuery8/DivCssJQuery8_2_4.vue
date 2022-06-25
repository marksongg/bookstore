<template>
  <div id="body1">
    <div id="top"><img src="@/assets/ad03.jpg" width="1160" height="400"/></div>
    <div id="box">
      <div id="left">
        <ul>
          <li>童话故事</li>
          <li>图画图书</li>
          <li>儿童启蒙</li>
          <li>自然百科</li>
          <li>生物大观</li>
          <li>奇闻轶事</li>
          <li>明星少年</li>
          <li>搞笑幽默</li>
        </ul>
      </div>
      <div id="main">
        <table cellspacing="0" cellpadding="0">
          <caption>最新最全的幽默搞笑图文集</caption>
          <thead>
            <tr>
              <th id="title">标题</th>
              <th id="num">点击</th>
              <th id="time">时间</th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg01">
              <td class="list01">[组图]让人拍案叫绝的“变异” PS高手作品</td>
              <td class="font01">28965</td>
              <td class="font01">2016-9-15</td>
            </tr>
            <tr>
              <td class="list01">[组图]超尴尬的网络少儿识字卡片</td>
              <td class="font01">28643</td>
              <td class="font01">2016-9-15</td>
            </tr>
            <tr class="bg01">
              <td class="list01">[组图] 辨别“山寨版”明星脸 擦亮你的慧</td>
              <td class="font01">23456</td>
              <td class="font01">2016-9-14</td>
            </tr>
            <tr>
              <td class="list01">[组图] 未来世界可怕的生物武器</td>
              <td class="font01">23432</td>
              <td class="font01">2016-9-12</td>
            </tr>
            <tr class="bg01">
              <td class="list01">[组图] 如果孩子交给爸爸带请看后果如何</td>
              <td class="font01">23456</td>
              <td class="font01">2016-9-11</td>
            </tr>
            <tr>
              <td class="list01">[组图] 雷人的蝙蝠侠招摇过市</td>
              <td class="font01">23432</td>
              <td class="font01">2016-9-12</td>
            </tr>
            <tr class="bg01">
              <td class="list01">[组图] 妙趣横生的“下巴”</td>
              <td class="font01">23456</td>
              <td class="font01">2016-9-11</td>
            </tr>
            <tr>
              <td class="list01">[组图] 妙趣横生的人脸彩绘</td>
              <td class="font01">23432</td>
              <td class="font01">2016-9-10</td>
            </tr>
            <tr class="bg01">
              <td class="list01">[组图] 看大妈华丽变身为青春美女</td>
              <td class="font01">23456</td>
              <td class="font01">2016-8-25</td>
            </tr>
            <tr>
              <td class="list01">[组图] 马路上有趣一幕--狗狗背包</td>
              <td class="font01">23432</td>
              <td class="font01">2016-8-20</td>
            </tr>
            <tr class="bg01">
              <td class="list01">[组图] 可爱极了！ 猫咪扮成HelloKitty</td>
              <td class="font01">23456</td>
              <td class="font01">2016-8-18</td>
            </tr>
            <tr>
              <td class="list01">[组图] 最彪悍猫咪“武士”集锦</td>
              <td class="font01">23432</td>
              <td class="font01">2016-8-16</td>
            </tr>
            <tr class="bg01">
              <td class="list01">[组图] 淘气宝宝搞怪让人哭笑不得</td>
              <td class="font01">23456</td>
              <td class="font01">2016-8-12</td>
            </tr>
            <tr>
              <td class="list01">[组图] 熊猫也成了宠物！街头惊现“山寨熊猫”</td>
              <td class="font01">23432</td>
              <td class="font01">2016-8-8</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div id="bottom">
        <span>网站首页 | 关于我们 | 儿童乐园 | 教育资讯 | 联系我们 | 服务条款 | 广告服务 | 客服中心 | 网站导航</span><br/>
        CopyRight &copy; 儿童网站 版权所有<br/>
        地址：南京市江北新区柳州东路666号科技厦18层<br/>
        电话：13913843318 E-Mail：marksongg@163.com
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
  name:'DivCssJQuery8_2_4',
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
    line-height: 30px;
    color: #545454;
    background-color: #FFF;
    background-image: url("@/assets/images8/82401.jpg");
    background-repeat: repeat-x;
    height: 600px;
  }

  #top {
    height: 400px;
    width: 1160px;
  }

  #box {
    width: 1000px;
    /* height: 100%; */
    height: 650px;
    overflow: hidden;
    /* margin: 0px auto; */
  }

  #left {
    width: 181px;
    /* height: 100%; */
    overflow: hidden;
    margin-right: 50px;
    background-image: url("@/assets/images8/82402.gif");
    background-repeat: no-repeat;
    padding-top: 68px;
    float: left;
  }

  #left li {
    list-style-type: none;
    width: 100px;
    font-weight: bold;
    margin: 0px auto; /**设置完了后居中 */
    background-image: url("@/assets/images8/82403.gif");
    background-repeat: no-repeat;
    background-position: left center;
    padding-left: 0px;
    border-bottom: dashed 1px #CCC;
  }

  #main {
    width: 690px;
    /* height: 100%; */
    overflow: hidden;
    padding-top: 30px;
    float: left;
  }

  #bottom {
    width: 1000px;
    height: 130px;
    text-align: center;
    line-height: 20px;
    background-image: url("@/assets/images8/82408.gif");
    background-repeat: no-repeat;
    background-position: top center;
    float: left;
  }

  #bottom span {
    width: 800px;
    margin: 3px auto;
    display: block; /**创建一个灰色的块 */
    background-color: #EDEDED;
    line-height: 30px;
  }

  #table {
    width: 890px;
    border-collapse: collapse;
  }
  
  caption {
    font-size: 20px;
    font-family: "微软雅黑";
    color: #558193;
    line-height: 40px;
    width: 600px;
  }

  thead {
    /* width: 800px; */
    height: 25px;
    line-height: 25px;
    /* background-image: url("@/assets/images8/82404.gif");
    background-repeat: no-repeat; */
    border: 0 solid #eef1f6;
    border-bottom-width: 1px;
  }

  td {
    border-bottom: solid 1px #ccc;
  }

  .list01 {
    background-image: url("@/assets/images7/72304.gif");
    background-repeat: no-repeat;
    background-position: 5px center;
    padding-left: 20px;
    text-align: left;    
  }

  .font01 {
    text-align: center;
  }

  .bg01 {
    background-color: #F4F4F4;
  }

  tbody tr:hover {
    background-color: #ed2d2d;
    color: #FFF;
    cursor: pointer;
  }

</style>