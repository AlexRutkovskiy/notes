import {
  type AppDispatch,
  type AppState,
  store,
  getUserData,
  getUser,
  getUserIsLoading,
  getUserError
} from './store';
import { fetchUser } from '@/shared/model/user/userSlice'

export {
  type AppDispatch,
  type AppState,
  store,
  getUserData,
  getUser,
  getUserIsLoading,
  getUserError,
  fetchUser,
}