import { createRouter, createMemoryHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createMemoryHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/intro',
      name: 'intro',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/IntroductionView.vue'),
    },
    {
      path: '/chapter000',
      name: 'chapter000',
      component: () => import('../views/Chapter000View.vue'),
    },
    {
      path: '/chapter001',
      name: 'chapter001',
      component: () => import('../views/Chapter001View.vue'),
    },
    
        {
            path: '/chapter001',
            name: 'chapter001',
            component: () => import('../views/Chapter001View.vue'),
        },
        
        {
            path: '/chapter002',
            name: 'chapter002',
            component: () => import('../views/Chapter002View.vue'),
        },
        
        {
            path: '/chapter003',
            name: 'chapter003',
            component: () => import('../views/Chapter003View.vue'),
        },
        
        {
            path: '/chapter004',
            name: 'chapter004',
            component: () => import('../views/Chapter004View.vue'),
        },
        
        {
            path: '/chapter005',
            name: 'chapter005',
            component: () => import('../views/Chapter005View.vue'),
        },
        
        {
            path: '/chapter006',
            name: 'chapter006',
            component: () => import('../views/Chapter006View.vue'),
        },
        
        {
            path: '/chapter007',
            name: 'chapter007',
            component: () => import('../views/Chapter007View.vue'),
        },
        
        {
            path: '/chapter008',
            name: 'chapter008',
            component: () => import('../views/Chapter008View.vue'),
        },
        
        {
            path: '/chapter009',
            name: 'chapter009',
            component: () => import('../views/Chapter009View.vue'),
        },
        
        {
            path: '/chapter010',
            name: 'chapter010',
            component: () => import('../views/Chapter010View.vue'),
        },
        
        {
            path: '/chapter011',
            name: 'chapter011',
            component: () => import('../views/Chapter011View.vue'),
        },
        
        {
            path: '/chapter012',
            name: 'chapter012',
            component: () => import('../views/Chapter012View.vue'),
        },
        
        {
            path: '/chapter013',
            name: 'chapter013',
            component: () => import('../views/Chapter013View.vue'),
        },
        
        {
            path: '/chapter014',
            name: 'chapter014',
            component: () => import('../views/Chapter014View.vue'),
        },
        
        {
            path: '/chapter015',
            name: 'chapter015',
            component: () => import('../views/Chapter015View.vue'),
        },
        
        {
            path: '/chapter016',
            name: 'chapter016',
            component: () => import('../views/Chapter016View.vue'),
        },
        
        {
            path: '/chapter017',
            name: 'chapter017',
            component: () => import('../views/Chapter017View.vue'),
        },
        
        {
            path: '/chapter018',
            name: 'chapter018',
            component: () => import('../views/Chapter018View.vue'),
        },
        
        {
            path: '/chapter019',
            name: 'chapter019',
            component: () => import('../views/Chapter019View.vue'),
        },
        
        {
            path: '/chapter020',
            name: 'chapter020',
            component: () => import('../views/Chapter020View.vue'),
        },
        
        {
            path: '/chapter021',
            name: 'chapter021',
            component: () => import('../views/Chapter021View.vue'),
        },
        
        {
            path: '/chapter022',
            name: 'chapter022',
            component: () => import('../views/Chapter022View.vue'),
        },
        
        {
            path: '/chapter023',
            name: 'chapter023',
            component: () => import('../views/Chapter023View.vue'),
        },
        
        {
            path: '/chapter024',
            name: 'chapter024',
            component: () => import('../views/Chapter024View.vue'),
        },
        
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  }
})

export default router
