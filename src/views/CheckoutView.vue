<template>
  <div class="shoppingCart">
      <h1 v-if="success">{{message}}</h1>
      <table>
          <caption>商品结算</caption>
          <tr>
              <th></th>
              <th>商品名称</th>
              <th>单价</th>
              <th>数量</th>
              <th>金额</th>
          </tr>
          <tr v-for="book in books" :key="book.id">
              <td><img :src="book.imgUrl"></td>
              <td>{{book.title}}</td>
              <td>{{currency(book.price)}}</td>
              <td>{{book.quantity}}</td>
              <td>{{currency(cartItemPrice(book.id))}}</td>
          </tr>
      </table>
      <p>
          <span><button class="pay" @click="pay">支付</button></span>
          <span>总价：{{cartTotalPrice}}</span>
      </p>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapState } from 'vuex'
export default {
    name: 'CheckoutView',
    data(){
        return {
            success: false,
            message: '付款成功'
        }
    },
    inject:['currency'],
    computed:{
        ...mapState('cart', {
            books: 'items'
        }),
        ...mapGetters('cart', [
            'cartItemPrice',
            'cartTotalPrice'
        ])
    },
    methods: {
        ...mapMutations('cart', [
            'setCartItems'
        ]),
        pay(){
            this.setCartItems({items: []})
            this.success = true;
        }
    }
}
</script>

<style scoped>
  .shoppingCart {
      text-align: center;
      margin-left: 45px;
      width: 96%;
      margin-top: 70px;
  }

  .shoppingCart table {
      border: solid 1px black;
      width: 100%;
      background-color: #eee;
  }

  .shoppingCart table > caption {
      font-size: 1.5em;
      font-weight: bold;
      margin: 5px 0 8px 0;
  }

  .shoppingCart th {
      height: 50px;
  }

  .shoppingCart th, .shoppingCart td {
      border-bottom: solid 1px #ddd;
      text-align: center;
  }

  .shoppingCart span {
      float: right;
      padding-right: 15px;
  }
  .shoppingCart img {
      width:50px;
      height: 50px;
  }

  .shoppingCart .pay {
      float: right;
      width: 60px;
      height: 30px;
      margin: 0;
      border: none;
      color: white;
      background-color: red;
      cursor: pointer;
  }
</style>