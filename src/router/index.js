import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Projects from '../views/Projects.vue'
import ProjectDetails from '../views/ProjectDetails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkExactActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },

    {
      path: '/progetti',
      name: 'projects',
      component: Projects
    },

    {
      path: '/dettaglio-progetto/:slug',
      name: 'projectDetails',
      component: ProjectDetails
    },


    // errore 404
    {
      path: '/:pathMatch(.*)*',
      redirect: '404'
    },
   
  ]
})

export default router
