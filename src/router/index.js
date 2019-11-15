import Vue from 'vue';
import VueRouter from 'vue-router';
import GMap from '@/views/GMap';
import Signup from '@/views/Signup';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'GMap',
    component: GMap
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
