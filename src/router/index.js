import Vue from 'vue'
import Router from 'vue-router'
import Login from '../Login'
import Index from '@/components/Index'
import Home from '@/components/Home'
import Stutent from '@/components/Student'
import Teacher from '@/components/Teacher'
import Setting from '@/components/Setting'
import StudentDetail from '@/components/StudentDetail'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/',
      name: 'Index',
      component: Index,
      children: [
        {
          path: '/home',
          name: 'Home',
          component: Home
        },
        {
          path: '/student',
          name: 'Student',
          component: Stutent
        },
        {
          path: '/student/:student_id',
          name: 'StudentDetail',
          component: StudentDetail
        },
        {
          path: '/teacher',
          name: 'Teacher',
          component: Teacher
        },
        {
          path: '/setting',
          name: 'Setting',
          component: Setting
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})

router.beforeEach((to, from, next) => {
  const toTmp = to
  if (toTmp.name === 'Login') {
    console.log(111111111111111111111)
  }
  next()
  // next({
  //   path: '/login',
  //   query: {
  //     redirect: to.fullPath
  //   }
  // })
})

export default router
