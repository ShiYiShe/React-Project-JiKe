// 用户相关状态管理

import { createSlice } from '@reduxjs/toolkit'
import { removeToken, request } from '@/utils'
import { setToken as _setToken, getToken } from '@/utils'

const userStore = createSlice({
  name: "user",
  initialState: {
    token: getToken() || '',
    userInfo: {}
  },
  reducers: {
    setToken (state, action) {
      state.token = action.payload
      _setToken(action.payload)
    },
    setUserInfo(state, action) {
      state.userInfo = action.payload
    },
    clearUserInfo(state) {
      state.token = ''
      state.userInfo = {}
      removeToken()
    }
  }
})

const { setToken, setUserInfo, clearUserInfo } = userStore.actions

const userReducer = userStore.reducer

const fetchLogin = (loginForm) => {
  return async (dispatch) => {
    // 发送请求
    const res = await request.post('/authorizations', loginForm)
    // 提交action存入token
    dispatch(setToken(res.data.token))
  }
}

const fetchUserInfo = () => {
  return async (dispatch) => {
    const res = await request.get('/user/profile');
    dispatch(setUserInfo(res.data))
  }
}

export { fetchLogin, fetchUserInfo, clearUserInfo, setToken }

export default userReducer