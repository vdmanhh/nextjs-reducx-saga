import { takeEvery } from "redux-saga/effects";
import { categoryType, ListResponse } from "../model/Product";
import { categoryActions } from "./categoryReducer";
import {put,call} from 'redux-saga/effects'
import { fetchCategoryApi } from "../pages/api/fetchCategory";
export function* fetchCategory(){
    try {
        const response: ListResponse<categoryType> = yield call(fetchCategoryApi);
        yield put(categoryActions.fetchCategoryListSuccess(response));
      } catch (error) {
        console.log("Failed to fetch student list", error);
        yield put(categoryActions.fetchCategoryListFailed());
      }
}
export function* category(){
    yield takeEvery(categoryActions.fetchCategoryList,fetchCategory);
}