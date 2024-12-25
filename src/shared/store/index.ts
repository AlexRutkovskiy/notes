import {
  type AppDispatch,
  type AppState,
  store,
  getUserData,
  getUser,
  getUserIsLoading,
  getUserError,
  getCategoryData,
  getCategories,
  getCategoriesIsLoading,
  getCategoriesError,
} from './store';
import { fetchUser } from '@/shared/model/user/userSlice'
import { addCategory } from '@/shared/model/category/categorySlice'

export {
  type AppDispatch,
  type AppState,
  store,
  getUserData,
  getUser,
  getUserIsLoading,
  getUserError,
  fetchUser,
  getCategoryData,
  getCategories,
  getCategoriesIsLoading,
  getCategoriesError,
  addCategory,
}