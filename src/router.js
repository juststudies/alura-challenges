import VueRouter from 'vue-router';
import Container from './components/Container.vue';
import Community from './components/Pages/Community.vue';

const routes = [
    {
        path: '/',
        name: 'Container',
        component: Container
    },
    {
        path: '/community',
        name: 'community',
        component: Community
    }
];

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router;