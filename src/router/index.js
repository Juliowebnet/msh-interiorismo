import { createRouter, createWebHistory } from 'vue-router'
import VHome from '../views/v-home.vue'
import VAboutUs from '../views/v-about-us.vue'
import VPortfolio from '../views/v-portfolio.vue'
import VContactUs from '../views/v-contact-us.vue'
import VProject from '../views/v-project.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: VHome
    },
    {
      path: '/about-us',
      name: 'about-us',
      component: VAboutUs
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: VPortfolio
    },
    {
      path: '/contact-us',
      name: 'contact-us',
      component: VContactUs
    },
    {
      path: '/portfolio/project/:id',
      name: 'project',
      component: VProject
    }
  ]
})

export default router
