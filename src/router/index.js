import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../Components/HomePage.vue'
import LandingPage from '../Components/LandingPage.vue'
import Login from '../Components/Login.vue'
import Patients from '../Components/Patients.vue'
import Profile from '../Components/Profile.vue'
import Signup from '../Components/Signup.vue'
import ViewPatients from '../Components/ViewPatient.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: LandingPage,
    },
    {path: '/homepage',
      component: HomePage
    },
    {path: '/login',
      component: Login
    },
    {path: '/patients',
      component: Patients
    },
    {path: '/profile',
      component: Profile
    },
    {path: '/signup',
      component: Signup
    },
    {path: '/viewpatient',
      component: ViewPatients
    }
  ],
})

export default router
