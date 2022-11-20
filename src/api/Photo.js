import req1 from '@/api/reqs/req1';

export const PhotoApi = () => {
    return req1.request({
        method: 'GET',
        url: '/photo'
    })
}