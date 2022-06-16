import store from '@/store'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    // 重新定向到home页面
    redirect:{
      name: 'home'
    }
  },
  {
    path: '/home',
    name: 'home',
    meta:{
      title: '首页'
    },
    // 使用引用的的方法加载组件
    // 需要提前就使用import的方法来导入进来：
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    /* webpackChunkName: "about" */
    // 使用import的方法动态加载组件：import HomeView from '../views/HomeView.vue'
    component: () => import( '../views/AboutView.vue')
  },
  {
    path: '/search',
    name: 'search',
    meta: {
      title: '搜索结果'
    },
    /* webpackChunkName: "about" */ 
    component: () => import('../views/BooksView.vue')
  },
  {
    path: '/newBooks',
    name: 'newBooks',
    meta: {
      title: '新书上市'
    },
    component: ()=> import('../components/BooksNew.vue')
  },
  {
    path: '/book/:id',
    name: 'book',
    meta: {
      title: '图书'
    },
    component: ()=> import('../views/BookView.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    meta: {
      title: '购物车'
    },
    component: ()=> import('../views/ShoppingCart.vue')
  },
  {
    path: '/check',
    name: 'check',
    meta: {
      title: '结算',
      requireAuth: true
    },
    component: ()=> import('../views/CheckoutView.vue')
  },
  {
    path: '/register',
    name: 'register',
    meta: {
      title: '注册'
    },
    component: ()=> import('../components/UserRegister.vue')
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '登録'
    },
    component: ()=> import('../components/UserLogin.vue')
  },
  {
    path: '/divCssJQuery',
    name: 'divCssJQuery',
    meta: {
      title: 'Div+Css+jQuery布局精粹'
    },
    component: ()=> import('../components/DivCssJQuery.vue')
  },
  {
    path: '/divCssJQuery1',
    name: 'divCssJQuery1',
    meta: {
      title: '网页网站基础知识'
    },
    component: ()=> import('../components/divCssJQuery/divCssJQuery1/DivCssJQuery1.vue')
  },
  {
    path: '/divCssJQuery2_4_3',
    name: 'divCssJQuery2_4_3',
    meta: {
      title: '网页网站基础知识'
    },
    component: ()=> import('../components/divCssJQuery/divCssJQuery2/DivCssJQuery2_4_3.vue')
  },
  {
    path: '/divCssJQuery2_6_1',
    name: 'divCssJQuery2_6_1',
    meta: {
      title: 'video标签'
    },
    component: ()=> import('../components/divCssJQuery/divCssJQuery2/DivCssJQuery2_6_1.vue')
  },
  {
    path: '/divCssJQuery2_6_2',
    name: 'divCssJQuery2_6_2',
    meta: {
      title: 'video标签'
    },
    component: ()=> import('../components/divCssJQuery/divCssJQuery2/DivCssJQuery2_6_2.vue')
  },
  {
    path: '/divCssJQuery2_8_2',
    name: 'divCssJQuery2_8_2',
    meta: {
      title: 'video标签'
    },
    component: ()=> import('../components/divCssJQuery/divCssJQuery2/DivCssJQuery2_8_2.vue')
  },
  {
    path: '/divCssJQuery3_3_1',
    name: 'divCssJQuery3_3_1',
    meta: {
      title: '通用选择器'
    },
    component: ()=> import('../components/divCssJQuery/divCssJQuery3/DivCssJQuery3_3_1.vue')
  },
  {
    path: '/divCssJQuery3_3_3',
    name: 'divCssJQuery3_3_3',
    meta: {
      title: '类选择器'
    },
    component: ()=> import('../components/divCssJQuery/divCssJQuery3/DivCssJQuery3_3_3.vue')
  },
  {
    path: '/divCssJQuery3_3_4',
    name: 'divCssJQuery3_3_4',
    meta: {
      title: '类选择器'
    },
    component: ()=> import('../components/divCssJQuery/divCssJQuery3/DivCssJQuery3_3_4.vue')
  },
  {
    path: '/divCssJQuery3_3_5',
    name: 'divCssJQuery3_3_5',
    meta: {
      title: '群选择器'
    },
    component: ()=> import('../components/divCssJQuery/divCssJQuery3/DivCssJQuery3_3_5.vue')
  },
  {
    path: '/divCssJQuery3_3_6',
    name: 'divCssJQuery3_3_6',
    meta: {
      title: '派生选择器'
    },
    component: ()=> import('../components/divCssJQuery/divCssJQuery3/DivCssJQuery3_3_6.vue')
  },
  {
    path: '/divCssJQuery3_3_7',
    name: 'divCssJQuery3_3_7',
    meta: {
      title: '派生选择器'
    },
    component: ()=> import('../components/divCssJQuery/divCssJQuery3/DivCssJQuery3_3_7.vue')
  },
  {
    path: '/divCssJQuery3_5_3',
    name: 'divCssJQuery3_5_3',
    meta: {
      title: '派生选择器'
    },
    component: ()=> import('../components/divCssJQuery/divCssJQuery3/DivCssJQuery3_5_3.vue')
  },
  {
    path: '/divCssJQuery3_6_2',
    name: 'divCssJQuery3_6_2',
    meta: {
      title: '派生选择器'
    },
    component: ()=> import('../components/divCssJQuery/divCssJQuery3/DivCssJQuery3_6_2.vue')
  },
  {
    path: '/divCssJQuery3_9_2',
    name: 'divCssJQuery3_9_2',
    meta: {
      title: '派生选择器'
    },
    component: ()=> import('../components/divCssJQuery/divCssJQuery3/DivCssJQuery3_9_2.vue')
  },
  {
    path: '/divCssJQuery4_1_3',
    name: 'divCssJQuery4_1_3',
    meta: {
      title: 'Div的嵌套和固定格式'
    },
    component: ()=> import('../components/divCssJQuery/divCssJQuery4/DivCssJQuery4_1_3.vue')
  },
  {
    path: '/divCssJQuery4_2_3',
    name: 'divCssJQuery4_2_3',
    meta: {
      title: '可视化盒模型'
    },
    component: ()=> import('../components/divCssJQuery/divCssJQuery4/DivCssJQuery4_2_3.vue')
  },
  {
    path: '/divCssJQuery4_2_4',
    name: 'divCssJQuery4_2_4',
    meta: {
      title: 'border(边框)'
    },
    component: ()=> import('../components/divCssJQuery/divCssJQuery4/DivCssJQuery4_2_4.vue')
  },
  {
    path: '/divCssJQuery4_2_5',
    name: 'divCssJQuery4_2_5',
    meta: {
      title: 'border(边框)'
    },
    component: ()=> import('../components/divCssJQuery/divCssJQuery4/DivCssJQuery4_2_5.vue')
  },
  {
    path: '/divCssJQuery4_3_1',
    name: 'divCssJQuery4_3_1',
    meta: {
      title: '居中布局设计'
    },
    component: ()=> import('../components/divCssJQuery/divCssJQuery4/DivCssJQuery4_3_1.vue')
  },
  {
    path: '/divCssJQuery4_3_2',
    name: 'divCssJQuery4_3_2',
    meta: {
      title: '浮动布局设计'
    },
    component: ()=> import('../components/divCssJQuery/divCssJQuery4/DivCssJQuery4_3_2.vue')
  },
  {
    path: '/divCssJQuery4_3_3',
    name: 'divCssJQuery4_3_3',
    meta: {
      title: '自适应高度'
    },
    component: ()=> import('../components/divCssJQuery/divCssJQuery4/DivCssJQuery4_3_3.vue')
  },
  {
    path: '/divCssJQuery4_4_2',
    name: 'divCssJQuery4_4_2',
    meta: {
      title: '相对定位'
    },
    component: ()=> import('../components/divCssJQuery/divCssJQuery4/DivCssJQuery4_4_2.vue')
  },
  {
    path: '/divCssJQuery4_4_4',
    name: 'divCssJQuery4_4_4',
    meta: {
      title: '固定定位'
    },
    component: ()=> import('../components/divCssJQuery/divCssJQuery4/DivCssJQuery4_4_4.vue')
  },
  {
    path: '/divCssJQuery4_7_2',
    name: 'divCssJQuery4_7_2',
    meta: {
      title: '空白边叠加在网页中的应用'
    },
    component: ()=> import('../components/divCssJQuery/divCssJQuery4/DivCssJQuery4_7_2.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(to => {
  // 判断路由是否需要登录权限
  if(to.matched.some(record => record.meta.requireAuth)){
    // 路由需要验证，判断用户是否已经登录
    if(store.state.user.user){
      return true;
    } else {
      return {
        path: '/login',
        query: {redirect: to.fullPath}
      }
    }
  }
})

router.afterEach(to => {
  document.title = to.meta.title;
  // 解决vue中路由跳转时，让滚动条显示在顶部
  window.scrollTo(0, 0)
})



export default router