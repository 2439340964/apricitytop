import req1 from '@/api/reqs/req1';

export const HomeApi = () => {
    return req1.request({
        url: '/home'
    })
}