import {Product,ListResponse} from '../../model/Product'
import axios from 'axios';

export function fetchProduct(){
    return axios({
        method : 'GET',
        url : "https://fakestoreapi.com/products?limit=12"
    })
}

// 

// const fetchData = async ()=>{
//     return await(await fetch('https://fakestoreapi.com/products?limit=12')).json()
// }

// const {data, isLoading,isError } = useQuery("user" ,fetchData)

    // if(isLoading) { 
    //     return <div> Loadding .... </div>
    // }
// 