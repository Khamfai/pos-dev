import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  // Public routes
  {
    path: '/',
    component: () => import('layouts/PublicLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      {
        path: '/login',
        component: () => import('pages/LoginPage.vue'),
      },
      {
        path: '/register',
        component: () => import('pages/RegisterPage.vue'),
      },]
  },

  // Protected routes
  {
    path: '/admin',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '', component: () => import('src/pages/admin/IndexPage.vue'),
        meta: { requiresAuth: true, roles: ['admin'] }
      },
      {
        path: '/language',
        component: () => import('src/pages/admin/language/IndexPage.vue'),
        meta: { requiresAuth: true, roles: ['admin'] }
      },
      {
        path: '/package',
        component: () => import('src/pages/admin/package/IndexPage.vue'),
      },
    ],
  },

  // Always leave this as last one
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
