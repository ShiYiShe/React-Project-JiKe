// 用户相关请求
import { request } from '@/utils';

// 登陆请求
export function looginAPI(formData) {
  return request({
    url: '/authorizations',
    method: 'POST',
    data: formData
  })
}

// 获取用户信息
export function getProfileAPI() {
  return request({
    url: '/user/profile',
    method: 'GET',
  })
}