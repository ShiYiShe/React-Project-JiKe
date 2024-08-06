// 文章相关请求
import { request } from "@/utils";

// 获取频道列表
export function getChannelAPI() {
  return request({
    url: '/channels',
    method: 'GET'
  })
}