import Vue from 'vue'
import Router from 'vue-router'

import Main from './views/Main.vue'
import JsEdit from './views/jsEdit.vue'
import JsList from './views/jsList.vue'

import KitEdit from './views/kitEdit.vue'
import KitList from './views/kitList.vue'

import MistakeEdit from './views/MistakeEdit.vue'
import MistakeList from './views/MistakeList.vue'

import Login from './views/Login.vue'

Vue.use(Router)

export default new Router({
 
  routes: [
    {path:'/login',component:Login},
    {
      path: '/',
      name: 'main',
      component: Main,
      children:[
        {path:'/javascript/create',component:JsEdit,props:true},
        {path:'/javascript/edit/:id',component:JsEdit,props:true},
        {path:'/javascript/list',component:JsList},

        {path:'/kits/create',component:KitEdit,props:true},
        {path:'/kits/edit/:id',component:KitEdit,props:true},
        {path:'/kits/list',component:KitList},

        {path:'/mistakes/create',component:MistakeEdit,props:true},
        {path:'/mistakes/edit/:id',component:MistakeEdit,props:true},
        {path:'/mistakes/list',component:MistakeList},
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
