import VueRouter from 'vue-router';
import CodeEditor from './components/CodeEditor.vue';
import Community from './components/Pages/Community.vue';

const routes = [
    {
        path: '/',
        name: 'codeeditor',
        component: CodeEditor
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