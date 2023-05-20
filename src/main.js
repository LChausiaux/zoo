import {createRouter, createWebHistory} from 'vue-router';

import HelloWorld from './components/HelloWorld.vue';
import TheWelcome from './components/TheWelcome.vue';
import App from './App.vue';
import * as Vue from 'vue';

const routes = [
    {
        path: '/',
        component: HelloWorld
    },
    {
        path: '/about',
        component: TheWelcome
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

const app = Vue.createApp(App);
app.use(router);
app.mount('#app');
