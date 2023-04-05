import { createRouter, createWebHashHistory } from "vue-router";

import Home from '../pages/Home.vue';
import About from '../pages/About.vue';
import Auth from '../pages/Auth.vue';


const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/auth', component: Auth },
]

const router = createRouter({
  routes,
  history: createWebHashHistory(),
})

export default router;
