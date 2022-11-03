//封装ajax请求库
import axios from "axios";
import config from "@/lib/httpConfig";

// 封装请求类
class HttpReq {
    constructor() {
        // 公共配置
        this.config = config
    }
    // 请求拦截和响应拦截绑定
    bindInstance(axios) {
        axios.interceptors.request.use(function (config) {
            // 在发送请求之前做些什么
            // console.log("请求拦截");
            return config;
        }, function (error) {
            // 对请求错误做些什么
            return Promise.reject(error);
        });

        // 添加响应拦截器
        axios.interceptors.response.use(function (response) {
            // 2xx 范围内的状态码都会触发该函数。
            // 对响应数据做点什么
            // console.log("响应拦截");
            // console.log(response, "response");
            // return response;
            return response.data;

        }, function (error) {
            // 超出 2xx 范围的状态码都会触发该函数。
            // 对响应错误做点什么
            return Promise.reject(error);
        });
    }
    request(options) {
        // 创建axios实例
        const instance = axios.create();
        // 绑定请求拦截和响应拦截
        this.bindInstance(instance);
        // 发送网络请求
        return instance(Object.assign(this.config, options));
    }
}

export default HttpReq;