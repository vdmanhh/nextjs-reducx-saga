import {all} from 'redux-saga/effects'
import {product} from '../feature/product'
export function* rootSaga (){
    yield all([product()])
}