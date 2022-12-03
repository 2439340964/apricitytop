export default [
    {
        path: '/',
        component: () => import('@/views/Home.vue'),
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/Login.vue'),
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('@/views/Home.vue'),
    },
    {
        path: '/homepage',
        name: 'homepage',
        component: () => import('@/views/homepage/index.vue'),
    },
    {
        path: '/photo',
        name: 'photo',
        component: () => import('@/views/Photo.vue'),
    },
    {
        path: '/none',
        name: 'none',
        component: () => import('@/views/None.vue'),
    },
    {
        path: '/feelings',
        name: 'feelings',
        component: () => import('@/views/Feelings.vue'),
    },
    {
        path: "/:pathMatch(.*)*",
        name: 'error',
        component: () => import('@/views/Error.vue')
    }
]