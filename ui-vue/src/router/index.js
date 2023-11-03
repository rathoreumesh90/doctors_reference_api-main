import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/doctors',
      name: 'doctors',
      component: () => import('@/components/Doctors.vue')
    },
    {
      path: '/patients',
      name: 'patients',
      component: () => import('@/components/Patients.vue')
    },
    {
      path: '/appointments',
      name: 'appointments',
      component: () => import('@/components/Appointments.vue')
    },
    {
      path: '/createdoctors',
      name: 'createdoctors',
      component: () => import('@/components/CreateDoctors.vue')
    },
    {
      path: '/createpatients',
      name: 'createpatients',
      component: () => import('@/components/CreatePatients.vue')
    },
    {
      path: '/createappointments',
      name: 'createappointments',
      component: () => import('@/components/CreateAppointments.vue')
    },
    {
      path: '/pageIsNotReadyYet',
      name: 'pageIsNotReadyYet',
      component: () => import('@/components/PageIsNotReadyYet.vue')
    }

  ]
})

export default router
