import Vue from "vue";
import VueRouter from 'vue-router'
import Books from '../books'
import BookCreate from '../BookCreate'
import BookView from '../app-view'

Vue.use(VueRouter)

let router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/books'
    },
    {
      path: '/books',
      component: Books
    },
    {
      path: '/book-view',
      component: BookView
    },
    {
      path: '/book-create',
      component: BookCreate
    }
  ]
})

export default router
