import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Engagements from '@/components/Engagements'
import Blog from '@/components/Blog'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/engagements',
      name: 'Engagements',
      component: Engagements
    },
    {
      path: '/writes',
      name: 'Blog',
      component: Blog
    }
  ]
})
