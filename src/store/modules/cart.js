const state = {
    items: []
}

// muatations
const mutations = {
    // 添加商品到购物中
    pushProductToCart(state, {id, imgUrl, title, price, quantity}){
        if(!quantity){
            quantity = 1;
        }
        state.items.push({id, imgUrl, title, price, quantity});
    },

    // 增加商品数量
    incrementItemQuantity(state, {id, quantity}){
        let cartItem = state.items.find(item => item.id === id);
        if(cartItem){
            cartItem.quantity += quantity;
        }
    },
    // 用于清空购物车
    setCartItems(state, {items}){
        state.items = items;
    },
    // 删除购物车中的商品
    deleteCartItem(state, id){
        let index = state.items.findIndex(item => item.id === id);

        if(index > -1){
            state.items.splice(index, 1)
        }
    }
}

// getters 类似于计算属性
const getters = {
    // 计算购物车中所有商品总价
    cartTotalPrice: (state) => {
        let totalPrice =  state.items.reduce((sum, item) => {
            return sum + item.price * item.quantity;
        }, 0)
        return totalPrice;
    },

    // 计算购物车中单项商品的价格
    cartItemPrice: (state) => (id) => {
        const cartItem = state.items.find(item => item.id === id);
        if(cartItem){
            return cartItem.price * cartItem.quantity;
        }
    },

    // 获取购物车中商品的数量
    itemsCount:(state) => {
        return state.items.length;
    }
}

// actions:可以异步调用mutations
const actions = {
    // 增加任意数量的商品到购物车
    addProductToCart({state, commit}, {id, imgUrl, title, price, inventory, quantity}){
        if(inventory){
            const cartItem = state.items.find(item => item.id === id);
            if(!cartItem){
                // 通过commit来调用mutations里面的方法
                commit('pushProductToCart',  {id, imgUrl, title, price, quantity});
            } else {
                commit('incrementItemQuantity', {id, quantity});
            }
        }
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    getters,
    actions
}