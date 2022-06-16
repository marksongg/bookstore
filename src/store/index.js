import { createStore } from 'vuex'
import cart from './modules/cart'
import user from './modules/user'
import createPersistedState from 'vuex-persistedstate'

// Vue.use(Vuex)

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    cart,
    user
  },
  plugins: [createPersistedState({
    reducer(data){
      return {
        cart: data.cart
      }
    }
  })]
})
