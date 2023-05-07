import { createRouter, createWebHistory } from 'vue-router'
import { RouteName } from './routes'

//layouts
import IntroductionLayout from "../layouts/Introduction.vue"
import HomeLayout from "../layouts/Home.vue"

//pages
import HomeView from '../views/HomeView.vue'
import IntroductionView from '../views/Introduction.vue'
import LoginView from '../views/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: RouteName.HOME.path,
      name: RouteName.HOME.name,
      meta: { layout: HomeLayout },
      component: HomeView
    },
    {
      path: RouteName.INTRODUCTION.path,
      meta: { layout: IntroductionLayout },
      name: RouteName.INTRODUCTION.name,
      component: IntroductionView
    },
    {
      path: RouteName.LOGIN.path,
      meta: { layout: IntroductionLayout },
      name: RouteName.LOGIN.name,
      component: LoginView
    },
    {
      path: "/:catchAll(.*)",
      redirect: '/',
    },
  ]
})

export default router
