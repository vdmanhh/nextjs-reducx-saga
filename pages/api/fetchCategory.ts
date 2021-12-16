import axios from 'axios'

export const fetchCategoryApi =async()=>{
    return await axios.get('http://localhost:8000/api/getall-subs')
}