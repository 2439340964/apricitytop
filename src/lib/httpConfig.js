// 公共url配置
/**
 * development代表本地开发环境，production代表线上环境（包括dat、uat和生产环境等）
 * http://124.221.2.47:8031
 */
export default {
    // baseURL: '',
    baseURL: process.env.NODE_ENV == "production" ? "http://124.221.2.47:8031" : "",
    timeout: 1000,
    headers: {}
}