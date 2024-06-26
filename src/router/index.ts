import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '',
            name: '',
            component: () => import('../views/Home.vue')
        }
    ]
})

document.title = 'Portfolio'

export default router;