import HttpReq from "@/lib/axios";

const req1 = new HttpReq();
// 用这种方式可以独立的配置不同的ip  baseURL
req1.config.baseURL = "http://124.221.2.47:8031";
console.log(req1);


export default req1;


