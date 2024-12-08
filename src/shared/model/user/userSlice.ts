import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { IUser, IUserFetchData, IUserSlice } from './types';
import { fetchApi } from '@/shared/api';

const initialState: IUserSlice = {
  user: null,
  error: null,
  isLoading: false,
}

export const fetchUser = createAsyncThunk(
  'user/fetch',
  async (data: IUserFetchData, { rejectWithValue }) => {
    try {
      return await fetchApi<IUser>('/api/user', { method: 'POST', body: JSON.stringify(data) })
    } catch (e) {
      return rejectWithValue("Invalid get user data")
    }
  }
)

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => {
      state.error = '';
      state.user = null;
      state.isLoading = true;
    })
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.error = '';
      state.user = action.payload;
      state.isLoading = false;
    })
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.user = null;
      state.isLoading = false;
      state.error = action.payload as string;
    })
  },
})

export default userSlice