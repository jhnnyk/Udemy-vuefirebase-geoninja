import Vue from 'vue';
import VueRouter from 'vue-router';
import GMap from '@/views/GMap';
import Signup from '@/views/Signup';
import Login from '@/views/Login';
import ViewProfile from '@/views/ViewProfile';
import firebase from 'firebase/app';
import 'firebase/auth';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'GMap',
    component: GMap,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/profile/:id',
    name: 'ViewProfile',
    component: ViewProfile,
    meta: {
      requiresAuth: true
    }
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  // check to see if route requires auth
  if (to.matched.some(rec => rec.meta.requiresAuth)) {
    // check auth state of user
    let user = firebase.auth().currentUser;
    if (user) {
      next();
    } else {
      next({ name: 'Login' });
    }
  } else {
    next();
  }
});

export default router;
