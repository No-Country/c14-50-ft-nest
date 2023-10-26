import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: '',
  userId: '',
  role: ''
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.token = action.payload.token
      state.userId = action.payload.userId
      state.role = action.payload.role
    },
    logoutUser: (state) => {
      state.token = initialState.token
      state.userId = initialState.userId
      state.role = initialState.role
    }
  }
})

export const { setUser, logoutUser } = authSlice.actions
export default authSlice.reducer