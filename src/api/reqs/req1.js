import HttpReq from "@/lib/axios";

const req1 = new HttpReq();
// 用这种方式可以独立的配置不同的ip  baseURL
req1.config.baseURL = "https://apricityzm.top/api";


export default req1;


