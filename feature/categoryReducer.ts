import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store/store';
import {ListResponse,categoryType} from '../model/Product'

export interface categoryState {
  loading: boolean;
  list: categoryType[];
}

const initialState: categoryState = {
  loading: false,
  list:[]
};

const CategorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    fetchCategoryList(state) {
      state.loading = true;
    },
    fetchCategoryListSuccess(state, action: PayloadAction<ListResponse<categoryType>>) {
      state.list = action.payload.data;    
      state.loading = false;
    },
    fetchCategoryListFailed(state){
      state.loading = false;
    }
   
  },
});

// Actions
export const categoryActions = CategorySlice.actions;
// Reducer
const studentReducer = CategorySlice.reducer;
export default studentReducer;

