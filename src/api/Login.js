import req1 from '@/api/reqs/req1';

export const LoginApi = (data) => {
    return req1.request({
        method: 'POST',
        url: '/login',
        data
    })
}