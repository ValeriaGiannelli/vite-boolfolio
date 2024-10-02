import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Projects from '../views/Projects.vue'
import ProjectDetails from '../views/ProjectDetails.vue'
import Error404 from '../views/Error404.vue'
import ProjectsType from '../views/ProjectsType.vue'
import ProjectsTechnology from '../views/ProjectsTechnology.vue'

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

    {
      path: '/progetti-per-tecnologia/:slug',
      name: 'projectTechnology',
      component: ProjectsTechnology
    },

    {
      path: '/progetti-per-tipo/:slug',
      name: 'projectsType',
      component: ProjectsType
    },


    {
      path: '/404',
      name: 'Error404',
      component: Error404
    },

    // errore 404
    {
      path: '/:pathMatch(.*)*',
      redirect: '404'
    },
   
  ]
})

export default router
