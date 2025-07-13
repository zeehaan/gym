import Vue from 'vue'
import VueRouter from 'vue-router'
import AboutPage from '@/components/AboutPage.vue'
import HomePage from '@/components/HomePage.vue'
import MembersPage from '@/components/MembersPage.vue'
import GalleryPage from '@/components/GalleryPage.vue'
import WeeklySchedule from '@/components/WeeklySchedule.vue'
import AddMembers from '@/components/AddMembers.vue'
import ChatBot from '@/components/ChatBot.vue'
import ContactUs from '@/components/ContactUs.vue'
import NotificationPage from '@/components/NotificationPage.vue'

import DayOne from '@/workout-plans/DayOne.vue'
import DayTwo from '@/workout-plans/DayTwo.vue'
import DayThree from '@/workout-plans/DayThree.vue'
import DayFour from '@/workout-plans/DayFour.vue'
import DayFive from '@/workout-plans/DayFive.vue'
import DaySix from '@/workout-plans/DaySix.vue'
import DaySeven from '@/workout-plans/DaySeven.vue'
import DayEight from '@/workout-plans/DayEight.vue'
import DayNine from '@/workout-plans/DayNine.vue'
import DayTen from '@/workout-plans/DayTen.vue'
import DayEleven from '@/workout-plans/DayEleven.vue'
import DayTwelve from '@/workout-plans/DayTwelve.vue' 
import DayThirteen from '@/workout-plans/DayThirteen.vue'
import DayFourteen from '@/workout-plans/DayFourteen.vue'
import DayFifteen from '@/workout-plans/DayFifteen.vue'
import DaySixteen from '@/workout-plans/DaySixteen.vue'
import DaySeventeen from '@/workout-plans/DaySeventeen.vue'
import DayEighteen from '@/workout-plans/DayEighteen.vue' 
import DayNineteen from '@/workout-plans/DayNineteen.vue'
import DayTwenty from '@/workout-plans/DayTwenty.vue'
import DayTwentyOne from '@/workout-plans/DayTwentyOne.vue'
import DayTwentyTwo from '@/workout-plans/DayTwentyTwo.vue'
import DayTwentyThree from '@/workout-plans/DayTwentyThree.vue'
import DayTwentyFour from '@/workout-plans/DayTwentyFour.vue'
import DayThirtyThree from '@/workout-plans/DayThirtyThree.vue'
import DayThirtyFour from '@/workout-plans/DayThirtyFour.vue'
import DayThirtyFive from '@/workout-plans/DayThirtyFive.vue'
import DayThirtySix from '@/workout-plans/DayThirtySix.vue'
import WeekOne from '@/week-plans/WeekOne.vue'
import WeekTwo from '@/week-plans/WeekTwo.vue'
import WeekThree from '@/week-plans/WeekThree.vue'
import WeekFour from '@/week-plans/WeekFour.vue'
import WeekFive from '@/week-plans/WeekFive.vue'
import WeekSix from '@/week-plans/WeekSix.vue'
import WeekSeven from '@/week-plans/WeekSeven.vue'
import WeekEight from '../week-plans/WeekEight.vue'
import WeekNine from '../week-plans/WeekNine.vue'
import WeekTen from '../week-plans/WeekTen.vue'
import WeekEleven from '../week-plans/WeekEleven.vue'
import WeekTwelve from '../week-plans/WeekTwelve.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/about',
    name: 'AboutPage',
    component: AboutPage
  },  
  {
    path: '/members',
    name: 'MembersPage',
    component: MembersPage
  },
  {
    path: '/gallery',
    name: 'GalleryPage',
    component: GalleryPage
  },
  {
    path: '/week-one',
    name: 'WeekOne',
    component: WeekOne,
  },
  {
    path: '/week-two',
    name: 'WeekTwo',
    component: WeekTwo,
  },
  {
    path: '/week-three',
    name: 'WeekThree',
    component: WeekThree,
  },
  {
    path: '/week-four',
    name: 'WeekFour',
    component: WeekFour,
  },
  {
    path: '/week-five',
    name: 'WeekFive',
    component: WeekFive,
  },
  {
    path: '/week-six',
    name: 'WeekSix',
    component: WeekSix,
  },
  {
    path: '/week-seven',
    name: 'WeekSeven',
    component: WeekSeven,
  },
  {
    path: '/week-eight',
    name: 'WeekEight',
    component: WeekEight,
  },
  {
    path: '/week-nine',
    name: 'WeekNine',
    component: WeekNine,
  },
  {
    path: '/week-ten',
    name: 'WeekTen',
    component: WeekTen,
  },
  {
    path: '/week-eleven',
    name: 'WeekEleven',
    component: WeekEleven,
  },
  {
    path: '/week-twelve',
    name: 'WeekTwelve',
    component: WeekTwelve,
  },
  {
    path: '/day-one',
    name: 'DayOne',
    component: DayOne,
  },
  {
    path: '/day-two',
    name: 'DayTwo',
    component: DayTwo,
  },
  {
    path: '/day-three',
    name: 'DayThree',
    component: DayThree,
  },
  {
    path: '/day-four',
    name: 'DayFour',
    component: DayFour,
  },
  {
    path: '/day-five',
    name: 'DayFive',
    component: DayFive,
  },
  {
    path: '/day-six',
    name: 'DaySix',
    component: DaySix,
  },
  {
    path: '/day-seven',
    name: 'DaySeven',
    component: DaySeven,
  },
  {
    path: '/day-eight',
    name: 'DayEight',
    component: DayEight,
  },
  {
    path: '/day-nine',
    name: 'DayNine',
    component: DayNine,
  },
  {
    path: '/day-ten',
    name: 'DayTen',
    component: DayTen,
  },
  {
    path: '/day-eleven',
    name: 'DayEleven',
    component: DayEleven,
  },
  {
    path: '/day-twelve',
    name: 'DayTwelve',
    component: DayTwelve,
  },
  {
    path: '/day-thirteen',
    name: 'DayThirteen',
    component: DayThirteen,
  },
  {
    path: '/day-fourteen',
    name: 'DayFourteen',
    component: DayFourteen,
  },
  {
    path: '/day-fifteen',
    name: 'DayFifteen',
    component: DayFifteen,
  },
  {
    path: '/day-sixteen',
    name: 'DaySixteen',
    component: DaySixteen,
  },
  {
    path: '/day-seventeen',
    name: 'DaySeventeen',
    component: DaySeventeen,
  },
  {
    path: '/day-eighteen',
    name: 'DayEighteen',
    component: DayEighteen,
  },
  {
    path: '/day-nineteen',
    name: 'DayNineteen',
    component: DayNineteen,
  },
  {
    path: '/day-twenty',
    name: 'DayTwenty',
    component: DayTwenty,
  },
  {
    path: '/day-twenty-one',
    name: 'DayTwentyOne',
    component: DayTwentyOne,
  },
   {
    path: '/day-twenty-two',
    name: 'DayTwentyTwo',
    component: DayTwentyTwo,
  },
  {
    path: '/day-twenty-three',
    name: 'DayTwentyThree',
    component: DayTwentyThree,
  },
  {
    path: '/day-twenty-four',
    name: 'DayTwentyFour',
    component: DayTwentyFour,
  },
  {
    path: '/day-twenty-five',
    name: 'DayTwentyOne',
    component: DayTwentyOne,
  },
  {
    path: '/day-twenty-six',
    name: 'DayTwentyTwo',
    component: DayTwentyTwo,
  },
  {
    path: '/day-twenty-seven',
    name: 'DayTwentyThree',
    component: DayTwentyThree,
  },
  {
    path: '/day-twenty-eight',
    name: 'DayTwentyFour',
    component: DayTwentyFour,
  },
  {
    path: '/day-twenty-nine',
    name: 'DayTwentyOne',
    component: DayTwentyOne,
  },
  {
    path: '/day-thirty',
    name: 'DayTwentyTwo',
    component: DayTwentyTwo,
  },
  {
    path: '/day-thirty-one',
    name: 'DayTwentyThree',
    component: DayTwentyThree,
  },
  {
    path: '/day-thirty-two',
    name: 'DayTwentyFour',
    component: DayTwentyFour,
  },
  {
    path: '/day-thirty-three',
    name: 'DayThirtyThree',
    component: DayThirtyThree,
  },
  {
    path: '/day-thirty-four',
    name: 'DayThirtyFour',
    component: DayThirtyFour,
  },
  {
    path: '/day-thirty-five',
    name: 'DayThirtyFive',
    component: DayThirtyFive,
  },
  {
    path: '/day-thirty-six',
    name: 'DayThirtySix',
    component: DayThirtySix,
  },
  {
    path: '/day-thirty-seven',
    name: 'DayThirtyThree',
    component: DayThirtyThree,
  },
  {
    path: '/day-thirty-eight',
    name: 'DayThirtyFour',
    component: DayThirtyFour,
  },
  {
    path: '/day-thirty-nine',
    name: 'DayThirtyFive',
    component: DayThirtyFive,
  },
  {
    path: '/day-fourty',
    name: 'DayThirtySix',
    component: DayThirtySix,
  },
  {
    path: '/day-fourty-one',
    name: 'DayThirtyThree',
    component: DayThirtyThree,
  },
  {
    path: '/day-fourty-two',
    name: 'DayThirtyFour',
    component: DayThirtyFour,
  },
  {
    path: '/day-fourty-three',
    name: 'DayThirtyFive',
    component: DayThirtyFive,
  },
  {
    path: '/day-fourty-four',
    name: 'DayThirtySix',
    component: DayThirtySix,
  },
  {
    path: '/day-fourty-five',
    name: 'DayThirtyThree',
    component: DayThirtyThree,
  },
  {
    path: '/day-fourty-six',
    name: 'DayThirtyFour',
    component: DayThirtyFour,
  },
  {
    path: '/day-fourty-seven',
    name: 'DayThirtyFive',
    component: DayThirtyFive,
  },
  {
    path: '/day-fourty-eight',
    name: 'DayThirtySix',
    component: DayThirtySix,
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
    name: 'NotificationPage',
    component: NotificationPage,
  },
  {
    path: '/contact',
    name: 'ContactUs',
    component: ContactUs,
  },  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
