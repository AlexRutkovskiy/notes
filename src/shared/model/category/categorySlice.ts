import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ICategorySlice, ICategory } from './types';

const initialState: ICategorySlice = {
  categories: [],
  error: null,
  isLoading: false,
}

const categorySlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    addCategory: (state, action: PayloadAction<ICategory>) => {
        state.categories = [...state.categories, action.payload]
    }
  }
})

export const { addCategory } = categorySlice.actions
export default categorySlice
