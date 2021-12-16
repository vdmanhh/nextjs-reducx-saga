import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store/store';
import {Product,ListResponse} from '../model/Product'

export interface ProductState {
  loading: boolean;
  list: Product[];
}

const initialState: ProductState = {
  loading: false,
  list:[]
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    fetchProductList(state) {
      state.loading = true;
    },
    fetchStudentListSuccess(state, action: PayloadAction<ListResponse<Product>>) {
      state.list = action.payload.data;    
      state.loading = false;
    },
    fetchStudentListFailed(state){
      state.loading = false;
    }
   
  },
});

// Actions
export const productActions = productSlice.actions;

// Selectors
export const selectStudentList = (state: RootState) => state.product.list;
export const selectStudenLoading = (state: RootState) => state.product.loading;


// Reducer
const studentReducer = productSlice.reducer;
export default studentReducer;

//const user={
// name, password, address,age
//}

/// dispatch({
//    type : `${productActions.getUserList}`,
//    payload : user
//})
//
//
//
//
//// function* fetchUser (action:PayloadActions){
//  const {user} = action.payload
//}
//
//
//
