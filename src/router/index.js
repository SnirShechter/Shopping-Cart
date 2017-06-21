import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import bookList from '@/components/bookList'
import cart from '@/components/cart'
import about from '@/components/about'
import contact from '@/components/contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/booklist',
      name: 'bookList',
      component: bookList
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact
    }
  ]
})
