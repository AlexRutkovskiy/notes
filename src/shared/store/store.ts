import { configureStore } from '@reduxjs/toolkit'

import userSlice from '@/shared/model/user/userSlice';

export const store = configureStore({
  reducer: {
    userData: userSlice.reducer,
  }
})

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const getUserData = (state: AppState) => state.userData;
export const getUser = (state: AppState) => state.userData.user;
export const getUserIsLoading = (state: AppState) => state.userData.isLoading;
export const getUserError = (state: AppState) => state.userData.error;
