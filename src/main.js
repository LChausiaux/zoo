import App from './App.vue'
import * as Vue from 'vue';
import * as VueRouter from 'vue-router';

const routes= [
    {path: '/', component: App},
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes: routes,
});

let app = Vue.createApp({})
app.use(router)
app.mount('#app')
