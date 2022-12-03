import req2 from '@/api/reqs/req2';

export const NoneApi = () => {
    return req2.request({
        method: 'GET',
        url: '',
    })
}