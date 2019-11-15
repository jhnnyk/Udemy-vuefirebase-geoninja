import Vue from 'vue';
import VueRouter from 'vue-router';
import GMap from '@/views/GMap';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'GMap',
    component: GMap
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
