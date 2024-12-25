import { configureStore } from '@reduxjs/toolkit'

import userSlice from '@/shared/model/user/userSlice';
import categorySlice from '@/shared/model/category/categorySlice';

export const store = configureStore({
  reducer: {
    userData: userSlice.reducer,
    categoryData: categorySlice.reducer,
  }
})

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const getUserData = (state: AppState) => state.userData;
export const getUser = (state: AppState) => state.userData.user;
export const getUserIsLoading = (state: AppState) => state.userData.isLoading;
export const getUserError = (state: AppState) => state.userData.error;

export const getCategoryData = (state: AppState) => state.categoryData;
export const getCategories = (state: AppState) => state.categoryData.categories;
export const getCategoriesIsLoading = (state: AppState) => state.categoryData.isLoading;
export const getCategoriesError = (state: AppState) => state.categoryData.error;
