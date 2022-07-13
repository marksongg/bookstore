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
  },
  {
    path: '/divCssJQuery5_2_1',
    name: 'divCssJQuery5_2_1',
    meta: {
      title: '设置背景颜色'
    },
    component: ()=> import('../components/divCssJQuery/divCssJQuery5/DivCssJQuery5_2_1.vue')
  },
  {
    path: '/divCssJQuery5_3_1',
    name: 'divCssJQuery5_3_1',
    meta: {
      title: '设置背景图像'
    },
    component: ()=> import('../components/divCssJQuery/divCssJQuery5/DivCssJQuery5_3_1.vue')
  },
  {
    path: '/divCssJQuery5_3_2',
    name: 'divCssJQuery5_3_2',
    meta: {
      title: '背景图像重复方式'
    },
    component: ()=> import('../components/divCssJQuery/divCssJQuery5/DivCssJQuery5_3_2.vue')
  },
  {
    path: '/divCssJQuery5_3_4',
    name: 'divCssJQuery5_3_4',
    meta: {
      title: '背景图像固定'
    },
    component: ()=> import('../components/divCssJQuery/divCssJQuery5/DivCssJQuery5_3_4.vue')
  },
  {
    path: '/divCssJQuery5_4_1',
    name: 'divCssJQuery5_4_1',
    meta: {
      title: '图像边框'
    },
    component: ()=> import('../components/divCssJQuery/divCssJQuery5/DivCssJQuery5_4_1.vue')
  },
  {
    path: '/divCssJQuery5_4_2',
    name: 'divCssJQuery5_4_2',
    meta: {
      title: '图像缩放'
    },
    component: ()=> import('../components/divCssJQuery/divCssJQuery5/DivCssJQuery5_4_2.vue')
  },
  {
    path: '/divCssJQuery5_4_3',
    name: 'divCssJQuery5_4_3',
    meta: {
      title: '图像水平对齐'
    },
    component: ()=> import('../components/divCssJQuery/divCssJQuery5/DivCssJQuery5_4_3.vue')
  },
  {
    path: '/divCssJQuery5_5_1',
    name: 'divCssJQuery5_5_1',
    meta: {
      title: '图像水平对齐'
    },
    component: ()=> import('../components/divCssJQuery/divCssJQuery5/DivCssJQuery5_5_1.vue')
  },
  {
    path: '/divCssJQuery5_7_2',
    name: 'divCssJQuery5_7_2',
    meta: {
      title: '网页图片垂直对齐'
    },
    component: ()=> import('../components/divCssJQuery/divCssJQuery5/DivCssJQuery5_7_2.vue')
  },
  {
    path: '/divCssJQuery6_2_3',
    name: 'divCssJQuery6_2_3',
    meta: {
      title: '为网页中的文字设置样式'
    },
    component: ()=> import('../components/divCssJQuery/divCssJQuery6/DivCssJQuery6_2_3.vue')
  },
  {
    path: '/divCssJQuery6_2_7',
    name: 'divCssJQuery6_2_7',
    meta: {
      title: '设置英文大小写并修饰'
    },
    component: ()=> import('../components/divCssJQuery/divCssJQuery6/DivCssJQuery6_2_7.vue')
  },
  {
    path: '/divCssJQuery6_3_4',
    name: 'divCssJQuery6_3_4',
    meta: {
      title: '设置文字不同式样'
    },
    component: ()=> import('../components/divCssJQuery/divCssJQuery6/DivCssJQuery6_3_4.vue')
  },
  {
    path: '/divCssJQuery6_6_2',
    name: 'divCssJQuery6_6_2',
    meta: {
      title: '文字小平居中对齐'
    },
    component: ()=> import('../components/divCssJQuery/divCssJQuery6/DivCssJQuery6_6_2.vue')
  },
  {
    path: '/divCssJQuery7_2_3',
    name: 'divCssJQuery7_2_3',
    meta: {
      title: '制作网站列表'
    },
    component: ()=> import('../components/divCssJQuery/divCssJQuery7/DivCssJQuery7_2_3.vue')
  },
  {
    path: '/divCssJQuery7_2_4',
    name: 'divCssJQuery7_2_4',
    meta: {
      title: '定义列表'
    },
    component: ()=> import('../components/divCssJQuery/divCssJQuery7/DivCssJQuery7_2_4.vue')
  },
  {
    path: '/divCssJQuery7_3_1',
    name: 'divCssJQuery7_3_1',
    meta: {
      title: '游戏网站导航'
    },
    component: ()=> import('../components/divCssJQuery/divCssJQuery7/DivCssJQuery7_3_1.vue')
  },
  {
    path: '/divCssJQuery7_3_2',
    name: 'divCssJQuery7_3_2',
    meta: {
      title: '购物网站导航'
    },
    component: ()=> import('../components/divCssJQuery/divCssJQuery7/DivCssJQuery7_3_2.vue')
  },
  {
    path: '/divCssJQuery7_4_2',
    name: 'divCssJQuery7_4_2',
    meta: {
      title: '内容和透明度属性'
    },
    component: ()=> import('../components/divCssJQuery/divCssJQuery7/DivCssJQuery7_4_2.vue')
  },
  {
    path: '/divCssJQuery7_6_2',
    name: 'divCssJQuery7_6_2',
    meta: {
      title: '更改部分项目列表符号'
    },
    component: ()=> import('../components/divCssJQuery/divCssJQuery7/DivCssJQuery7_6_2.vue')
  },
  {
    path: '/divCssJQuery8_2_3',
    name: 'divCssJQuery8_2_3',
    meta: {
      title: '设置表格边框及背景'
    },
    component: ()=> import('../components/divCssJQuery/divCssJQuery8/DivCssJQuery8_2_3.vue')
  },
  {
    path: '/divCssJQuery8_2_4',
    name: 'divCssJQuery8_2_4',
    meta: {
      title: '设置斑马式表格'
    },
    component: ()=> import('../components/divCssJQuery/divCssJQuery8/DivCssJQuery8_2_4.vue')
  },
  {
    path: '/divCssJQuery8_5_1',
    name: 'divCssJQuery8_5_1',
    meta: {
      title: '制作网站登录页面'
    },
    component: ()=> import('../components/divCssJQuery/divCssJQuery8/DivCssJQuery8_5_1.vue')
  },
  {
    path: '/divCssJQuery8_5_2',
    name: 'divCssJQuery8_5_2',
    meta: {
      title: '使用CSS样式控制列表与跳转菜单'
    },
    component: ()=> import('../components/divCssJQuery/divCssJQuery8/DivCssJQuery8_5_2.vue')
  },
  {
    path: '/divCssJQuery8_5_3',
    name: 'divCssJQuery8_5_3',
    meta: {
      title: '使用CSS样式定义圆角文本字段'
    },
    component: ()=> import('../components/divCssJQuery/divCssJQuery8/DivCssJQuery8_5_3.vue')
  },
  {
    path: '/divCssJQuery8_6_1',
    name: 'divCssJQuery8_6_1',
    meta: {
      title: '制作文字字段提示语效果'
    },
    component: ()=> import('../components/divCssJQuery/divCssJQuery8/DivCssJQuery8_6_1.vue')
  },
  {
    path: '/divCssJQuery8_8_2',
    name: 'divCssJQuery8_8_2',
    meta: {
      title: '总结 美化登录框'
    },
    component: ()=> import('../components/divCssJQuery/divCssJQuery8/DivCssJQuery8_8_2.vue')
  },
  {
    path: '/divCssJQuery9_2_4',
    name: 'divCssJQuery9_2_4',
    meta: {
      title: '制作网页文字超链接'
    },
    component: ()=> import('../components/divCssJQuery/divCssJQuery9/DivCssJQuery9_2_4.vue')
  },
  {
    path: '/divCssJQuery9_3_1',
    name: 'divCssJQuery9_3_1',
    meta: {
      title: '制作网页文字超链接'
    },
    component: ()=> import('../components/divCssJQuery/divCssJQuery9/DivCssJQuery9_3_1.vue')
  },
  {
    path: '/divCssJQuery9_3_2',
    name: 'divCssJQuery9_3_2',
    meta: {
      title: '制作浮雕式超链接'
    },
    component: ()=> import('../components/divCssJQuery/divCssJQuery9/DivCssJQuery9_3_2.vue')
  },
  {
    path: '/divCssJQuery9_5_1',
    name: 'divCssJQuery9_5_1',
    meta: {
      title: '制作倾斜导航菜单'
    },
    component: ()=> import('../components/divCssJQuery/divCssJQuery9/DivCssJQuery9_5_1.vue')
  },
  {
    path: '/divCssJQuery9_5_2',
    name: 'divCssJQuery9_5_3',
    meta: {
      title: '制作倾斜导航菜单'
    },
    component: ()=> import('../components/divCssJQuery/divCssJQuery9/DivCssJQuery9_5_2.vue')
  },
  {
    path: '/divCssJQuery9_7_2',
    name: 'divCssJQuery9_7_3',
    meta: {
      title: '控件鼠标箭头'
    },
    component: ()=> import('../components/divCssJQuery/divCssJQuery9/DivCssJQuery9_7_2.vue')
  },
  {
    path: '/divCssJQuery10_1_1',
    name: 'divCssJQuery10_1_1',
    meta: {
      title: 'grayscale滤镜'
    },
    component: ()=> import('../components/divCssJQuery/divCssJQuery10/DivCssJQuery10_1_1.vue')
  },
  {
    path: '/divCssJQuery10_1_2',
    name: 'divCssJQuery10_1_2',
    meta: {
      title: 'sepia滤镜'
    },
    component: ()=> import('../components/divCssJQuery/divCssJQuery10/DivCssJQuery10_1_2.vue')
  },
  {
    path: '/divCssJQuery10_1_3',
    name: 'divCssJQuery10_1_3',
    meta: {
      title: 'opacity滤镜'
    },
    component: ()=> import('../components/divCssJQuery/divCssJQuery10/DivCssJQuery10_1_3.vue')
  },
  {
    path: '/divCssJQuery10_1_4',
    name: 'divCssJQuery10_1_4',
    meta: {
      title: 'blur滤镜'
    },
    component: ()=> import('../components/divCssJQuery/divCssJQuery10/DivCssJQuery10_1_4.vue')
  },
  {
    path: '/divCssJQuery10_1_5',
    name: 'divCssJQuery10_1_5',
    meta: {
      title: 'saturate滤镜'
    },
    component: ()=> import('../components/divCssJQuery/divCssJQuery10/DivCssJQuery10_1_5.vue')
  },
  {
    path: '/divCssJQuery10_1_6',
    name: 'divCssJQuery10_1_6',
    meta: {
      title: 'hue-rotate滤镜'
    },
    component: ()=> import('../components/divCssJQuery/divCssJQuery10/DivCssJQuery10_1_6.vue')
  },
  {
    path: '/divCssJQuery10_1_7',
    name: 'divCssJQuery10_1_7',
    meta: {
      title: 'invert滤镜'
    },
    component: ()=> import('../components/divCssJQuery/divCssJQuery10/DivCssJQuery10_1_7.vue')
  },
  {
    path: '/divCssJQuery10_1_8',
    name: 'divCssJQuery10_1_8',
    meta: {
      title: 'drop-shadow滤镜'
    },
    component: ()=> import('../components/divCssJQuery/divCssJQuery10/DivCssJQuery10_1_8.vue')
  },
  {
    path: '/divCssJQuery10_1_9',
    name: 'divCssJQuery10_1_9',
    meta: {
      title: 'brightness滤镜'
    },
    component: ()=> import('../components/divCssJQuery/divCssJQuery10/DivCssJQuery10_1_9.vue')
  },
  {
    path: '/divCssJQuery10_1_10',
    name: 'divCssJQuery10_1_10',
    meta: {
      title: 'contrast滤镜'
    },
    component: ()=> import('../components/divCssJQuery/divCssJQuery10/DivCssJQuery10_1_10.vue')
  },
  {
    path: '/divCssJQuery11_1_1',
    name: 'divCssJQuery11_1_1',
    meta: {
      title: 'CSS3文字属性'
    },
    component: ()=> import('../components/divCssJQuery/divCssJQuery11/DivCssJQuery11_1_1.vue')
  },
  {
    path: '/divCssJQuery11_2_1',
    name: 'divCssJQuery11_2_1',
    meta: {
      title: 'CSS3图像背景属性'
    },
    component: ()=> import('../components/divCssJQuery/divCssJQuery11/DivCssJQuery11_2_1.vue')
  },
  {
    path: '/divCssJQuery11_2_2',
    name: 'divCssJQuery11_2_2',
    meta: {
      title: 'CSS3图像背景位置定位'
    },
    component: ()=> import('../components/divCssJQuery/divCssJQuery11/DivCssJQuery11_2_2.vue')
  },
  {
    path: '/divCssJQuery11_2_3',
    name: 'divCssJQuery11_2_3',
    meta: {
      title: 'CSS3背景图像裁剪区域'
    },
    component: ()=> import('../components/divCssJQuery/divCssJQuery11/DivCssJQuery11_2_3.vue')
  },
  {
    path: '/divCssJQuery11_3_1',
    name: 'divCssJQuery11_3_1',
    meta: {
      title: 'CSS3图像边框'
    },
    component: ()=> import('../components/divCssJQuery/divCssJQuery11/DivCssJQuery11_3_1.vue')
  },
  {
    path: '/divCssJQuery11_3_2',
    name: 'divCssJQuery11_3_2',
    meta: {
      title: 'CSS3圆角边框'
    },
    component: ()=> import('../components/divCssJQuery/divCssJQuery11/DivCssJQuery11_3_2.vue')
  },
  {
    path: '/divCssJQuery11_3_3',
    name: 'divCssJQuery11_3_3',
    meta: {
      title: 'CSS3多重边框颜色'
    },
    component: ()=> import('../components/divCssJQuery/divCssJQuery11/DivCssJQuery11_3_3.vue')
  },
  {
    path: '/divCssJQuery11_4_1',
    name: 'divCssJQuery11_4_1',
    meta: {
      title: 'CSS3新增的多列布局属性'
    },
    component: ()=> import('../components/divCssJQuery/divCssJQuery11/DivCssJQuery11_4_1.vue')
  },
  {
    path: '/divCssJQuery11_4_2',
    name: 'divCssJQuery11_4_2',
    meta: {
      title: 'CSS3新增的多列布局属性'
    },
    component: ()=> import('../components/divCssJQuery/divCssJQuery11/DivCssJQuery11_4_2.vue')
  },
  {
    path: '/divCssJQuery11_5_1',
    name: 'divCssJQuery11_5_1',
    meta: {
      title: 'CSS3新增的多列布局属性'
    },
    component: ()=> import('../components/divCssJQuery/divCssJQuery11/DivCssJQuery11_5_1.vue')
  },
  {
    path: '/divCssJQuery11_6_1',
    name: 'divCssJQuery11_6_1',
    meta: {
      title: 'CSS3新增的多列布局属性'
    },
    component: ()=> import('../components/divCssJQuery/divCssJQuery11/DivCssJQuery11_6_1.vue')
  },
  {
    path: '/divCssJQuery11_8_2',
    name: 'divCssJQuery11_8_2',
    meta: {
      title: 'CSS3新增的多列布局属性'
    },
    component: ()=> import('../components/divCssJQuery/divCssJQuery11/DivCssJQuery11_8_2.vue')
  },
  {
    path: '/divCssJQuery12_2_5',
    name: 'divCssJQuery12_2_5',
    meta: {
      title: 'jQuery事件'
    },
    component: ()=> import('../components/divCssJQuery/divCssJQuery12/DivCssJQuery12_2_5.vue')
  },
  {
    path: '/topComp',
    name: 'topComp',
    meta: {
      title: 'musicTop'
    },
    component: ()=> import('../components/divCssJQuery/divCssJQuery14/TopComp.vue')
  },
  {
    path: '/centerComp',
    name: 'centerComp',
    meta: {
      title: 'musicCenter'
    },
    component: ()=> import('../components/divCssJQuery/divCssJQuery14/CenterComp.vue')
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
