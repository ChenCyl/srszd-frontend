import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Welcome from './views/Welcome.vue'
import Videos from './views/Videos.vue'
import Images from './views/Images.vue'
import Timeline from './views/Timeline.vue'
import More from './views/More.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // { path: '*', name: '/404', component: Nofind },
    { path: '/', redirect: '/welcome' },
    {
      path: '/welcome',
      name: 'welcome',
      component: Welcome,
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
        { path: '', component: Videos},
        { path: '/videos', name: 'container', component: Videos},
        { path: '/images', name: 'container', component: Images},
        { path: '/timeline', name: 'container', component: Timeline},
        { path: '/more', name: 'container', component: More},
      ]
    }
  ]
})
