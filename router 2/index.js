import AboutPage from '@/components/AboutPage.vue'
import HomePage from '@/components/HomePage.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'
import Members from '@/components/Members.vue'
import GalleryPage from '@/components/GalleryPage.vue'
import ChestWorkouts from '@/components/ChestWorkouts.vue'
import DailySchedule from '@/components/DailySchedule.vue'
import WeeklySchedule from '@/components/WeeklySchedule.vue'
import AddMembers from '@/components/AddMembers.vue'
import ChatBot from '@/components/ChatBot.vue'
import Notification from '@/components/Notification.vue'
import AnimationTest from '@/components/AnimationTest.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/about',
    name: 'Notification',
    component: Notification
  },  
  {
    path: '/members',
    name: 'Members',
    component: Members
  },
  {
    path: '/gallery',
    name: 'GalleryPage',
    component: GalleryPage
  },
  ,
  {
    path: '/daily-schedule',
    name: 'DailySchedule',
    component: DailySchedule,
  },
  {
    path: '/chest-workouts',
    name: 'ChestWorkouts',
    component: ChestWorkouts,
  },
  {
    path: '/weekly-schedule',
    name: 'WeeklySchedule',
    component: WeeklySchedule,
  },
  {
    path: '/add-members',
    name: 'AddMembers',
    component: AddMembers,
  }, 
  {
    path: '/chatbot',
    name: 'ChatBot',
    component: ChatBot,
  },
  {
    path: '/notification',
    name: 'Notification',
    component: Notification,
  },
  {
    path: '/animation',
    name: 'AnimationTest',
    component: AnimationTest,
  },  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
