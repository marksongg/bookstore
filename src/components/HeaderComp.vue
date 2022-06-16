<template>
  <div class="header">
    <img src="@/assets/images/logo.png"/>
    <header-search/>
    <header-cart/>
    <span v-if="!user">你好，请<router-link to="/login">登录</router-link> 免费<router-link to="/register">注册</router-link></span>
    <span v-else>欢 迎 您,{{user.username}}，<a href="javascript:;" @click="logout">退出登录</a></span>
  </div>
</template>

<script>
import HeaderCart from './HeaderCart.vue'
import HeaderSearch from './HeaderSearch.vue'
import {mapState, mapMutations} from 'vuex'
export default {
    name:'HeaderComp',
    components: { HeaderSearch, HeaderCart },
    // 计算属性
    computed:{
      ...mapState('user', [
        'user'
      ])
    },
    methods:{
      logout(){
        this.deleteUser();
      },
      ...mapMutations('user', [
        'deleteUser'
      ])
    }
}
</script>

<style scoped>
  .header {
    width: 100%;
  }

  .header img {
    width: 200px;
    height: 60px;
    margin: auto;
  }

  .header span {
    margin-left: 20px;
  }

  .header a {
    text-decoration: none;
    color: red;
  }
</style>