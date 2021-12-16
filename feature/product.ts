import { PayloadAction } from "@reduxjs/toolkit";
import { productActions } from "../feature/productReducer";
import { call, debounce, put,takeEvery, takeLatest } from "redux-saga/effects";
import { Product, ListResponse } from "../model/Product";
import { fetchProduct } from "../pages/api/fetchProduct";
function* fetchProdutList(action: PayloadAction) {
  try {
    const response: ListResponse<Product> = yield call(fetchProduct);
    yield put(productActions.fetchStudentListSuccess(response));
  } catch (error) {
    console.log("Failed to fetch student list", error);
    yield put(productActions.fetchStudentListFailed());
  }
}
export function* product() {
  yield takeEvery(productActions.fetchProductList, fetchProdutList);
}
