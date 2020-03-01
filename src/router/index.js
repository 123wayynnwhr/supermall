import Vue from 'vue'
import VueRouter from 'vue-router'




// import Index from '../views/home/Index.vue'
const Index = () => import('../views/home/Index')
const SFurniture = () => import('../views/singlePage/SFurniture')

const Login = () => import('../views/login/Login')
const Register = () => import('../views/login/Register')

const SLamps = () => import('../views/singlePage/SLamps')
const SChild = () => import('../views/singlePage/SChild')
const SKitchen = () => import('../views/singlePage/SKitchen')
const SCurtain = () => import('../views/singlePage/SCurtain')
const SDecorate = () => import('../views/singlePage/SDecorate')
const SHome = () => import('../views/singlePage/SHome')
const Sale = () => import('../views/singlePage/Sale')
const SpaceGuide = () => import('../views/singlePage/SpaceGuide')
const Taste = () => import('../views/singlePage/Taste')
const HomePlus = () => import('../views/singlePage/HomePlus')
const Cart = () => import('../views/singlePage/Cart')


const Decoration = () => import('../views/product/Decoration')
const Vase = () => import('../views/product/Vase')
const Paint = () => import('../views/product/Paint')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'Index',
    redirect: '/index'
  },
  {
    path: '/index',
    name: 'Index',
    component: Index
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/sfurniture',
    name: 'SFurniture',
    component: SFurniture
  },
  {
    path: '/slamps',
    name: 'SLamps',
    component: SLamps
  },
  {
    path: '/schild',
    name: 'SChild',
    component: SChild
  },
  {
    path: '/skitchen',
    name: 'SKitchen',
    component: SKitchen
  },
  {
    path: '/scurtain',
    name: 'SCurtain',
    component: SCurtain
  },
    {
    path: '/sdecorate',
    name: 'SDecorate',
    component: SDecorate
  },
  {
    path: '/shome',
    name: 'SHome',
    component: SHome
  },
  {
    path: '/sale',
    name: 'Sale',
    component: Sale
  },
    {
    path: '/spaceGuide',
    name: 'SpaceGuide',
    component: SpaceGuide
  },
  {
    path: '/taste',
    name: 'Taste',
    component: Taste
  },
  {
    path: '/homePlus',
    name: 'HomePlus',
    component: HomePlus
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/cart',
    name: 'Cart',
    component:Cart
  },
  {
    path: '/decoration',
    name: 'Decoration',
    component:Decoration
  },
  {
    path: '/vase',
    name: 'Vase',
    component:Vase
  },
  {
    path: '/paint',
    name: 'Paint',
    component:Paint
  },
  
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
