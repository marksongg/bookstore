<template>
  <div class="bookListItem">
      <div>
        <img :src="item.bigImgUrl">
      </div>
      <p class="title">
          <!-- TODO <router-link :to="{name: 'book', params: {id: item.id}}"> -->
            {{item.title}}
         <!-- TODO </router-link> -->
      </p>
      <p>
          <span class="factPrice">
              {{currency(factPrice(item.price, item.discount))}}
          </span>
          <span>
              定价：<i class="price">{{item.price}}</i>
          </span>
      </p>
      <p>
          <span>{{item.author}}</span> /
          <span>{{item.publishDate}}</span> /
          <span>{{item.bookConcern}}</span>
      </p>
      <p>
          {{item.brief}}
      </p>
      <p>
          <button class="addCartButton" @click="addCartItem(item)">加入购物车</button>
      </p>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    name: 'BookListItem',
    props:{
        item: {
            type: Object,
            default: () => {}
        }
    },
    inject:['factPrice', 'currency'],
    methods:{
        ...mapActions('cart', {
            addCart: 'addProductToCart'
        }),
        addCartItem(item){
          
            let quantity = 1;
            let newItem = {
                ...item, // 类假于clone，将item所有的属性和值复制到newItem对象中
                price: this.factPrice(item.price, item.discount), //
                quantity
            }
            
            // 调用mapActions里的方法addCart，通知store中的方法addProductToCart
            this.addCart(newItem);
            this.$router.push('/cart');
        }
    }
}
</script>



<style scoped>
.bookListItem {
  border-bottom: solid 1px #ccc;
  margin-top: 10px;
  margin-left: 30px;
  margin-right: 30px;
}
.bookListItem p{
  text-align: left;
}
.bookListItem p span{
  padding-left: 10px;
}
.bookListItem img{
  width: 180px;
  height: 180px;
  float: left;
}
.bookListItem .title{
  color: #e00;
}
.addCartButton{
	padding: 5px 10px 6px;
	color: #fff;
	border: none;
	border-bottom: solid 1px #222;
	border-radius: 5px;
	box-shadow: 0 1px 3px #999;
	text-shadow: 0 -1px 3px #444;
	cursor: pointer;
  background-color: #e33100;
}
.addCartButton:hover {
  text-shadow: 0 1px 1px #444;
}
.bookListItem .price {
  color: #cdcdcd;
  text-decoration: line-through;
}
.bookListItem .factPrice {
  color: red;
  font-weight: bold;
}


</style>