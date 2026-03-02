import { createRouter, createWebHistory } from 'vue-router';
import { dispararAlerta } from './alertaGlobal'; 

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/login' 
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../modules/auth/views/LoginForm.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../modules/admin/views/AdminPanel.vue'),
      meta: { requiresAuth: true, requiresAdmin: true }
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('../modules/user/views/UserPanel.vue'),
      meta: { requiresAuth: true, requiresUser: true }
    },
    {
      path: '/403',
      name: 'forbidden',
      component: () => import('../modules/admin/components/Error403.vue') 
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../modules/admin/components/Error404.vue')
    }
  ]
});

router.beforeEach((to, _from, next) => {
  const token = localStorage.getItem('auth');
  const role = localStorage.getItem('role');

  if (to.name === 'login' && token) {
    if (role === 'ADMIN') {
      return next('/admin');
    } else {
      return next('/user');
    }
  }

  if (to.meta.requiresAuth && !token) {
    dispararAlerta('Alto ahí! ', 'Debes iniciar sesión primero.');
    return next('/login');
  }

  if (to.meta.requiresAdmin && role !== 'ADMIN') {
    return next('/403'); 
  }

  if (to.meta.requiresUser && role === 'ADMIN') {
    return next('/403'); 
  }

  next();
});

export default router;