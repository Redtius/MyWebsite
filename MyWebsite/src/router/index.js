import { createRouter, createWebHistory } from 'vue-router';
import ProfileView from './../views/Profile.vue';

const routes = [
  {
    path: '/',
    name: 'profile',
    component: ProfileView,
  },
  {
    path: '/projects',
    name: 'projects',
  }
];

const router = createRouter({
  history: createWebHistory(),
  //import.meta.env.BASE_URL
  routes, 
})

export default router
