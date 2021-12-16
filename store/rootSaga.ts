import {all} from 'redux-saga/effects'
import {product} from '../feature/product'
import {category} from '../feature/category'
export function* rootSaga (){
    yield all([product(),category()])
}