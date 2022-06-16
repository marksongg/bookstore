<template>
  <div id="app">
    <HeaderComp/>
    <MenusComp/>
    <router-view/>
  </div>
</template>

<script>
import HeaderComp from '@/components/HeaderComp.vue'
import MenusComp from '@/components/MenusComp.vue'
// 引入共通util.js共通文件
import {factPrice, currency, formatTime} from './utils/util.js'

export default {
  components:{
    HeaderComp,
    MenusComp,

  },
  provide(){
    return {
      // 提供2个共通方法，供子类使用
      // 子类使用使用inject方法： inject: ['factPrice', 'currency'],
      factPrice, 
      currency,
      formatTime
    }
  }
}
</script>

<style>
/* ☆songg 2021/06/01 这里的style必须追加，否则影响到整体的对齐网格*/
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 1200px;
}
</style>