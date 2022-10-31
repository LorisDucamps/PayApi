import {
  createRouter,
  createWebHistory
} from 'vue-router'

const routes = [{
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/pricing',
    name: 'Pricing',
    component: () => import('@/views/Pricing.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('@/views/Contact.vue')
  },
  {
    path: '/:catchAll(.*)*',
    redirect: {
      name: 'Home'
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = 'PayApi' + ' | ' + to.name;
  if (to.name === 'Home') {
    document.body.classList.add('background-home')
    document.body.classList.remove('background-page')
  } else if (to.name === 'About' || to.name == 'Pricing' || to.name == 'Contact') {
    document.body.classList.remove('background-home')
    document.body.classList.add('background-page')
  }
  next();
})

export default router
