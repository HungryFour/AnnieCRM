import Vue from 'vue'
import Router from 'vue-router'
import Login from '../Login'
import Index from '@/components/Index'
import Home from '@/components/Home'
import Stutent from '@/components/Student'
import Teacher from '@/components/Teacher'
import StudentDetail from '@/components/StudentDetail'
import TeacherDetail from '@/components/TeacherDetail'

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
      meta: {
        requireAuth: true
      },
      children: [
        {
          path: '/home',
          name: 'Home',
          component: Home,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/student',
          name: 'Student',
          component: Stutent,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/student/:student_id',
          name: 'StudentDetail',
          component: StudentDetail,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/teacher',
          name: 'Teacher',
          component: Teacher,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/teacher/:teacher_id',
          name: 'TeacherDetail',
          component: TeacherDetail,
          meta: {
            requireAuth: true
          }
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
  if (toTmp.meta.requireAuth) {
    if (localStorage.getItem('duration')) {
      var oldTimeStamp = localStorage.getItem('duration')
      var nowTimeStamp = Date.parse(new Date())
      if (nowTimeStamp - oldTimeStamp > 60 * 24 * 10 * 1000) {
        next({
          path: '/login',
          query: {
            redirect: to.fullPath
          }
        })
      } else {
        next()
      }
    } else {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    }
  } else {
    next()
  }
})

export default router
