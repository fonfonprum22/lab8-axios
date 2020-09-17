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
        path: '/earth',
        name: 'Earth',
        component: () =>
            import ('../components/Earth.vue')
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