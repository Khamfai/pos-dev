import { defineRouter } from '#q-app/wrappers';
import {
  createMemoryHistory,
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from 'vue-router';
import routes from './routes';
import { useAuthStore } from 'src/store/auth-store';

export default defineRouter(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : (process.env.VUE_ROUTER_MODE === 'history' ? createWebHistory : createWebHashHistory);

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,
    history: createHistory(process.env.VUE_ROUTER_BASE),
  });

  // Authentication middleware
  Router.beforeEach((to, from, next) => {
    const authStore = useAuthStore();
    authStore.initializeAuth();

    const requiresAuth = to.matched.some(record => { console.log(record.meta); return record.meta.requiresAuth === true });
    console.log(requiresAuth, authStore.isAuthenticated);
    if (requiresAuth && !authStore.isAuthenticated && to.path !== '/login') {
      next('/login');
    } else if (authStore.isAuthenticated && to.path === '/login') {
      next('/admin');
    } else next();
  });

  return Router;
});
