import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/guid-generator',
            name: 'guid-genrator',
            component: () => import('../pages/GuidGenerator.vue'),
        }
    ],
});

export default router;