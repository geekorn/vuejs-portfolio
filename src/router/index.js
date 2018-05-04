import Vue from 'vue';
import Router from 'vue-router';

// import Loader from '@/components/Preloader';
import Home from '@/pages/Index';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
  ],
});

// router.beforeResolve((to, from, next) => {
//   if (to.name) {
//     Loader.start();
//   }

//   next();
// });

export default router;
