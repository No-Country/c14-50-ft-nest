import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import appointmentReducer from './features/appointmentSlice';
import authReducer from './features/authSlice';
import { projectApi } from './services/projectApi';


export const store = configureStore({
  reducer: {
    authReducer,
    appointmentReducer,
    [projectApi.reducerPath]: projectApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([projectApi.middleware])
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch