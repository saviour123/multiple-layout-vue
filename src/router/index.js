import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/users/Home.vue';
import Users from '../views/Users.vue';

Vue.use(VueRouter);

const routes = [
  {
    name: 'Users',
    path: '/',
    component: Users,
    children: [
      {
        component: Home,
        path: '/',
        name: 'Home',
      },
      {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/users/About.vue'),
      },
    ],
  },
  {
    path: '/admin',
    name: 'Admin',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Admin.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
