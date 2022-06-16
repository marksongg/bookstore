<template>
  <div>
      <LoadingComp v-if="loading"/>
      <h3 v-else>{{title}}</h3>
      <BookList :list="books"/>
      <h1>{{message}}</h1>
      <el-pagination
        :hide-on-single-page="true"
        @size-change="handleSizeChnage"
        :page-sizes="[2, 10, 20, 40]"
        @current-change="handleCurrentChange"
        :current-page="pageNum"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
      </el-pagination>
  </div>
</template>

<script>
import LoadingComp from "@/components/LoadingComp.vue"
import BookList from '@/components/BookList.vue'
export default {
    name: 'BooksView',
    data(){
      return {
        title: '検索結果',
        books:[],
        message: '',
        loading: true,
        total: 5,
        pageNum: 1,
        pageSize: 2
      }
    },
    beforeRouteEnter(to, from, next){
      next(vm => {
        vm.title = to.meta.title;
        let url = vm.setRequestUrl(to.fullPath);
        vm.getBooks(url, vm.pageNum, vm.pageSize);

      });
    },
    beforeRouteUpdate(to){
      let url = this.setRequestUrl(to.fullPath);
      this.getBooks(url, this.pageNum, this.pageNum);
      return true;
    },
    components:{
      LoadingComp,
      BookList
    },
    methods:{
      //动态设置服务端数据接口的请求URL
      setRequestUrl(path){
        let url = path;
        if(path.indexOf("/category") != -1){
          url = "/book" + url;
        }

        return url;
      },
      // 当修改了每页显示的条数时，重新请求数据
      handleSizeChnage(selectedSize){
        this.pageSize = selectedSize;
        let url = this.setRequestUrl(this.$route.fullPath);
        this.getBooks(url, this.pageNum, this.pageSize);
      },
      // 当用户切换而选择某一页时，重新请求数据
      handleCurrentChange(currentPage){
        this.pageNum = currentPage;
        let url = this.setRequestUrl(this.$route.fullPath);
        this.getBooks(url, this.pageNum, this.pageSize);
      },
      // 使用axiox查询数据
      getBooks(url, pageNum, pageSize){
        this.message = '';
        this.axios.get(url, {params: {pageNum, pageSize}})
        .then(response => {
            if(response.data.code === 200){
                this.loading = false;
                this.books = response.data.data;
                this.total = response.data.total
            }
        })
        .catch(error => console.log(error));
      }
    }
}
</script>

<style>

</style>