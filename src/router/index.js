import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/d/:id',
            name: 'Day',
            component: () => import('@/views/Day.vue')
        }, {
            path: '/',
            name: 'Front',
            component: () => import('@/views/Front.vue')
        }, {
            path: '/encrypt-tool',
            name: 'EncryptTool',
            component: () => import('@/views/EncryptTool.vue')
        }
    ],
    // always scroll to top
    scrollBehavior(to, from, savedPosition) {
        return { top: 0 }
    },
})

export default router
