export default [
    {
        path: '/',
        component: () => import('@/views/Home.vue'),
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('@/views/Home.vue'),
    },
    {
        path: '/photo',
        name: 'photo',
        component: () => import('@/views/Photo.vue'),
    }
]