// 用户相关状态管理

import { createSlice } from '@reduxjs/toolkit'
import { request } from '@/utils'

const userStore = createSlice({
  name: "user",
  initialState: {
    token: localStorage.getItem('token_key') || ''
  },
  reducers: {
    setToken (state, action) {
      state.token = action.payload
      localStorage.setItem('token_key', action.payload)
    }
  }
})

const { setToken } = userStore.actions

const userReducer = userStore.reducer

const fetchLogin = (loginForm) => {
  return async (dispatch) => {
    // 发送请求
    const res = await request.post('/authorizations', loginForm)
    // 提交action存入token
    dispatch(setToken(res.data.token))
  }
}

export { fetchLogin, setToken }

export default userReducer