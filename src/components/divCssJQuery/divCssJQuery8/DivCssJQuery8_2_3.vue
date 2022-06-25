<template>
  <div id="body1">
    <div id="box">
      <table border="8">
        <caption>计算机课程</caption>
        <tbody>
          <tr>
            <th id="title" scope="col">分类</th>
            <th id="time" scope="col">时间</th>
          </tr>
          <tr>
            <td class="list01">网页设计</td>
            <td>星期一</td>
          </tr>
          <tr>
            <td class="list01">网站建设理论</td>
            <td>星期二</td>
          </tr>
          <tr>
            <td class="list01">Div+CSS<span class="list01">布局</span></td>
            <td>星期三</td>
          </tr>
          <tr>
            <td class="list01">Photoshop平面设计</td>
            <td>星期四</td>
          </tr>
          <tr>
            <td class="list01">色彩理论</td>
            <td>星期五</td>
          </tr>
          <tr>
            <td class="list01">Flash动画制作</td>
            <td>星期六</td>
          </tr>
        </tbody>
      </table>
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
  name:'DivCssJQuery8_2_3',
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
    color: #464646;
    line-height: 30px;
    background-image: url("@/assets/images8/82301.jpg");
    background-repeat: repeat-x;
    height: 500px;
  }

  #box {
    padding-top: 120px; /**增加一个box的DIV层，可以方便图层移动 */
  }

  table{
    width: 660px;
    margin: 10px auto 0px auto;
    padding-top: 100px;
    border: solid 1px #C30;
    border-collapse: collapse;
  }

  caption {
    font-size: 14px;
    color: #930;
    font-weight: bold;
    text-align: left;
    padding-left: 15px;
    border-top: solid 1px #C30;
    border-left: solid 1px #C30;
    border-right: solid 1px #C30;
    background-image: url("@/assets/images8/82302.jpg");
    background-repeat: repeat;
  }

  /* thread th {
    font-weight: bold;
    color: #F60;
    border: solid 1px #C30;
    background-color: #FC9;
  } */

  #title {
    width: 580px;
    text-align: left;
    padding-left: 15px;
    font-weight: bold;
    color: #F60;
    border: solid 1px #C30;
    background-color: #FC9;
  }

  #time {
    width: 80px;
    font-weight: bold;
    color: #F60;
    border: solid 1px #C30;
    background-color: #FC9;
  }

  tbody {
    margin-top: 15px;
  }

  td {
    padding-left: 20px;
    border-bottom: solid 1px #CC9966;
  }

  .list01 {
    background-image: url("@/assets/images8/82303.gif");
    background-repeat: no-repeat;
    background-position: 10px center;
    text-align: left;
  }

 
  
</style>