<template>
  <div id="body1">
    <div id="box">
      <form id="form1" name="form1" method="post" action="javascript:;">
        <label for="select"></label>
        <select name="select" id="select">
          <option v-for="(item,index) in list1" :id="item.id" :key="index">{{item.value}}</option>
        </select>
        <br/>
        <label for="select2"></label>
        <select name="select2" id="select2">
          <option v-for="(item,index) in list2" :id="item.id" :key="index">{{item.value}}</option>
        </select>
        <br/>
        <label for="select3"></label>
        <select name="select3" id="select3">
          <option v-for="(item,index) in list3" :id="item.id" :key="index">{{item.value}}</option>
        </select>
        <br/>
        <label for="select4"></label>
        <select name="select4" id="select4">
          <option v-for="(item,index) in list4" :id="item.id" :key="index">{{item.value}}</option>
        </select>
        <br/>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      list1: [{id: '', value: '购物网站'}, {id: 'color', value: '淘宝'}, {id: 'color1', value: '天猫'}, {id: 'color2', value: '京东'}, {id: 'color3', value: '唯品会'}],
      list2: [{id: '', value: '招聘网站'}, {id: 'color', value: '赶集'}, {id: 'color1', value: '58同城'}, {id: 'color2', value: '前程无忧'}, {id: 'color3', value: 'Boss直聘'}],
      list3: [{id: '', value: '娱乐网站'}, {id: 'color', value: '腾讯娱乐'}, {id: 'color1', value: '搜狐娱乐'}, {id: 'color2', value: '网易娱乐'}, {id: 'color3', value: '新浪微博'}],
      list4: [{id: '', value: '军事网站'}, {id: 'color', value: '中华军事'}, {id: 'color1', value: '凤凰军事'}, {id: 'color2', value: '战略军事'}, {id: 'color3', value: '米尔军情网'}],
      count: 0
    }
  },
  name:'DivCssJQuery8_5_2',
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
    font-family: "宋休";
    font-size: 12px;
    counter-reset: #999;
    background-image: url("@/assets/images8/85201.gif");
    background-repeat: repeat-x;
    height: 440px;
  }

  #box {
    width: 208px;
    height:190px;
    background-image: url("@/assets/images8/85202.jpg");
    background-repeat: no-repeat;
    margin: 100px auto 0px auto; /**居中表示 */
    padding-top: 60px;
    text-align: center;
  }

  #select, #select2, #select3, #select4 {
    width: 130px;
    height: 22px;
    margin-top: 6px;
    margin-bottom: 6px;
    border: solid 1px #ccc;
  }

  #color {
    background-color: #86F;
  }

  #color1 {
    background-color: #89F;
  }

  #color2 {
    background-color: #0CF;
  }

  #color3 {
    background-color: #0FF;
  }

  

</style>