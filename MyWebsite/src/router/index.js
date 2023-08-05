import { createRouter, createWebHistory } from 'vue-router';
import VProfile from './../views/VProfile.vue';

const routes = [
  {
    path: '/',
    name: 'profile',
    component: VProfile,
  },
  {
    path: '/projects',
    name: 'projects',
  },
  {
    path:'/docs',
    name: 'docs',
    component: ()=>import('./../views/VDocs.vue'),
    children:[
      {
        path:'',
        name:'sass',
        component:()=>import('./../components/layouts/SassDocs.vue')
      },
      {
        path:'./javascript',
        name:'javascript',
        component:()=>import('./../components/layouts/JavascriptDocs.vue')
      },
      {
        path:'./vuejs',
        name:'vue',
        component:()=>import('./../components/layouts/VueDocs.vue')
      },
    ],
  }
];

const router = createRouter({
  history: createWebHistory(),
  //import.meta.env.BASE_URL
  routes, 
})

export default router
