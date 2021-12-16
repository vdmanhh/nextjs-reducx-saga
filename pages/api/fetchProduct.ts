import {Product,ListResponse} from '../../model/Product'
import axios from 'axios';

export function fetchProduct(){
    return axios({
        method : 'GET',
        url : "https://fakestoreapi.com/products?limit=12"
    })
}
