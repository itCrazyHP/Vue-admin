import { RouteRecordRaw } from "vue-router"
export default {
    name: 'Home',
    path: '/',
    redirect: '/home',
    component: () => import('@/layouts/Home/index.vue'),
    children: [
        {
            name: 'home',
            path: '',
            component: () => import('@/views/Home/index.vue')
        }
    ]

} as RouteRecordRaw