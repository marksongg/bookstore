<template>
  <div class="headerSearch">
      <input type="search" v-model.trim="keyword"/>
      <button @click="search">検索</button>
  </div>
</template>

<script>
export default {
    name: 'HeaderSearch',
    data(){
        return {
            keyword: ''
        }
    },
    methods: {
      search(){
        // 当查询关键字与当前路由对象中的查询参数wd值不同时，才调用$router.push方法
        // if(this.keyword != this.$router.query.wd)
        //     this.$router.push({path: '/search', query: {wd: this.keyword}})
        this.$router.push({
                path: '/search',
                query: {wd: this.keyword}
            });
      }
    },
}
</script>
<style scoped>
    .headerSearch {
        display: inline-block;
        position: relative;
    }
    .headerSearch input {
        width: 400px;
        height: 30px;
    }
    .headerSearch button {
        position: absolute;
        right: 0px;
        top: 0px;
        width: 60px;
        height: 30px;
        margin: 0;
        border: none;
        color: white;
        background-color: red;
        cursor: pointer;
    }
</style>