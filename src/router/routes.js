import store from '@/state'
import { redirectToLogin } from '@/utils/redirect'

export default [
  {
    path: '',
    component: () => import('./layouts/Index'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('./views/Home'),
      },
      {
        path: 'board',
        name: 'board',
        component: () => import('./views/Board'),
        children: [
          {
            path: '/board/:id',
            name: 'board-task',
            component: () => import('./views/BoardTask'),
          },
        ],
      },
      {
        path: 'forms',
        name: 'forms',
        component: () => import('./views/Forms.vue'),
      },
      {
        path: 'login',
        name: 'login',
        component: () => import('./views/Login'),
        meta: { requiresAuth: false },
      },
      {
        path: 'my',
        name: 'my-page',
        component: () => import('./views/MyPage'),
        meta: { requiresAuth: true },
        children: [
          {
            path: 'info',
            name: 'my-read',
            component: () => import('./views/MyRead'),
            meta: { requiresAuth: true },
          },
          {
            path: 'cart',
            name: 'my-cart',
            component: () => import('./views/MyCart'),
            meta: { requiresAuth: true },
          },
          {
            path: 'password',
            name: 'my-password',
            component: () => import('./views/MyPassword'),
            meta: { requiresAuth: true },
          },
        ],
      },
      {
        path: 'shop',
        name: 'shop-list',
        component: () => import('./views/ShopList'),
        beforeEnter: (to, from, next) => {
          store
            .dispatch('shop/fetchShopItems')
            .then(() => {
              next()
            })
            .catch((err) => {
              if (err.response) {
                switch (err.response.status) {
                  case 401:
                    redirectToLogin(to, next)
                    break
                  case 404:
                    next({ name: '404', params: { resource: '??? ??????' } })
                    break
                  default:
                    next({ name: 'network-issue' })
                }
              } else {
                next({ name: '404', params: { resource: '??? ??????' } })
              }
            })
        },
      },
    ],
  },
  {
    path: '/404/:resource',
    name: '404',
    component: () => import('./views/NotFound'),
    props: true,
  },
  {
    path: '/network-issue',
    name: 'network-issue',
    component: () => import('./views/NetworkIssue'),
  },
  {
    path: '*',
    redirect: {
      name: '404',
      params: {
        resource: '?????????',
      },
    },
  },
]
