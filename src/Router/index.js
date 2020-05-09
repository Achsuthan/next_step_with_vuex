import Router from 'vue-router'
import Vue from 'vue'
Vue.use(Router)

let router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/login',
            name: "Login",
            component: () => import('../Views/login')
        },
        {
            path: '/movies',
            name: "Movies",
            component: () => import('../Views/movies')
        }
    ]
})

export default router