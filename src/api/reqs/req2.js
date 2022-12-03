import HttpReq from "@/lib/axios";

const req2 = new HttpReq();
// 用这种方式可以独立的配置不同的ip  baseURL
req2.config.baseURL = "https://api.uixsj.cn/hitokoto/get";
// https://api.xygeng.cn/one
// https://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=7
export default req2;
