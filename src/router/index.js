import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Mars',
        component: () =>
            import ('../components/Mars.vue')
    },
    {
        path: '/donki',
        name: 'Donki',
        component: () =>
            import ('../components/Donki.vue')
    },
    {
        path: '/inSight',
        name: 'InSight',
        component: () =>
            import ('../components/InSight.vue')
    },
    {
        path: '/epic',
        name: 'Epic',
        component: () =>
            import ('../components/Epic.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router