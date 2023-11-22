import { createRouter, createWebHistory } from 'vue-router'
import Day from "@/views/Day.vue";
import Front from "@/views/Front.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/d/:id',
      name: 'Day',
      component: Day
    }, {
      path: '/',
      name: 'Front',
      component: Front
    },
  ]
})

export default router
