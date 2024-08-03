// Token判断路由跳转权限
import { getToken } from '@/utils';
import { Navigate } from 'react-router-dom';

import { useEffect } from 'react';
import { message } from 'antd';

export function AuthRoute({ children }) {
  const token = getToken();
  // if (token) {
  //   return <>{children}</>
  // } else {
  //   return <Navigate to={'/login'} replace />
  // }

  useEffect(() => {
    if (!token) {
      message.warning('请登录');
    }
  }, [token])
  if (token) {
    return <>{children}</>
  } else {
    return <Navigate to={'/login'} replace />
  }
}