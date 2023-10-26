import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: '',
  userId: '',
  role: '',
  roleId: ''
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
    setRoleId: (state, action) => {
      state.roleId = action.payload.roleId
    },
    logoutUser: () => {
      return initialState
    }
  }
})

export const { setUser, logoutUser, setRoleId } = authSlice.actions
export default authSlice.reducer