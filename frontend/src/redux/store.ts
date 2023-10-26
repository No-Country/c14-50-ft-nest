import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import authReducer from './features/authSlice';
import { doctorApi } from './services/doctorApi';


export const store = configureStore({
  reducer: {
    authReducer,
    [doctorApi.reducerPath]: doctorApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([doctorApi.middleware])
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch