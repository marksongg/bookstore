<template>
  <div id="body1">
    <div id="box">
      <div id="left">
        <img src="@/assets/images7/72302.png" width="128" height="128">
        <img src="@/assets/images7/72303.png" width="128" height="128">
      </div>
      <div id="right">
        <ul>
          <li v-for="(msg, index) in messageList" :key="index">{{msg}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      messageList: [
        '[新聞]「謎の地殻変動が起きている」石川・能登地方で、震度6弱に続き…',
        '[新聞]「夫は母や姉とも肉体関係がある」“ママ友”に洗脳された母親“…',
        '[新聞]「いじめた人は一瞬で忘れるが僕は一生恨んでいる」“ジャンポケ”…',
        '[新聞]横断歩道お先にどうぞ」の落とし穴…実は交通違反?警察に確認する',
        '[速報]岸田総理、節電した家庭や企業を優遇する新制度発表',
        '[新聞]「ママもう無理。一緒に死のう…」あの病で夫が死亡　わが子刺した”',
        '[新聞]「一生恨んでいる」“ジャンポケ”斉藤慎二さんの過酷ないじめ体験…',
        '[新聞]防犯カメラが捉えた嫌がらせ行為、1年間ほぼ毎日…',
        '[新聞]カラオケで飲酒後、五稜郭公園の堀に飛び込む…',
        '[新聞]福島県で114人感染 宿泊療養5か月ぶり100人下回る',
      ],
      count: 0
    }
  },
  name:'DivCssJQuery7_2_3',
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
    color: #333333;
    /* background-color: #EAEAEA; */
    height: 800px;
  }

  #box {
    width: 800px;
    height: 800px;
    margin: 0px auto;
    background-image: url('@/assets/images7/72301.jpg');
    background-repeat: no-repeat;
    margin-top: 10px;
    padding: 51px 24p 37px 18px;
  }

  #left {
    margin-top: 50px;
    float: left;
    width: 128px;
    height: 260px;
  }

  #left img {
    margin: top 2px;
    margin-bottom: 2px;
  }

  #right {
    float: left;
    width: 511px;
    height: 200px;
    margin-left: 0px;
    margin-top: 57px;
    margin-bottom: 8px;
  }

  #right li {
    line-height: 20px;
    list-style-type: none;
    background-image: url('@/assets/images7/72304.gif');
    background-repeat: no-repeat;
    background-position: left center;
    padding-left: 15px;
    text-align: left;
  }

  

  
</style>