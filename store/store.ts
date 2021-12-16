
import { Action, combineReducers, configureStore, ThunkAction } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga'
import { connectRouter, routerMiddleware } from 'connected-react-router';
//import history from '../ultils/history'
import productReducer from '../feature/productReducer'
import { rootSaga } from './rootSaga';
import Product from '../compoment/home_page/Product';
const rootReducer = combineReducers({
   // router: connectRouter(history),
//    counter: counterReducer,
   product: productReducer,
   
  });
const sagaMiddleware = createSagaMiddleware()
export const store = configureStore({
     reducer: rootReducer,
      middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(sagaMiddleware),
  });



sagaMiddleware.run(rootSaga);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;  
// const rootState = combineReducers(){
  //product : ProdutReducer
//}
//  const productReducer = createSlice({
//    name : 'product'
//    intialstate,
//    reducer : {
//    getApi(state,action){
 //     state.list = action.payload.user.name}
//}     Promise.all([
//      getdata(),getCategor()
//]).then((res)=>console.log(res))
//} 
//})
//    dat ten trang la [id].tsx
//   <button onClick={()=>router.push({
  //    pathname : '/post/[id]',
  //    query : {id : post.id}
//      })}>click me</button>
//  Link va Router deu co pathname va query
//
//  query : {value : "manhducvu"}
//
//
//
//    const getUser = async()=>{
//      return await axios.get('https://fake-api-ecommerce/product')
//}
//  const {data, isLoading, isErorr, error} = useQuery('user',getUser())
//
// product.list += product.list
//  const data : ListProduc<Product> = yield call(getProduct,PayloadActions.payload)
// const getProduct = async(user)=>{
  //  const intiliation = {
  //    method : "POST",
  //    headers : "",
  //    body : {user}  
  //}
//}
//    export async function getServerSideProps(context){}
//
//
//  ['contend_one','contend_two']
// typeof name == 'string' return true
//
/// type getData = (so1 : number,so2:string)=>number 
//
//   const data : getData = (so1 : number,so2:string) :number =>{
//
//return 1;
//}
// const [name,setName] = useState<number>(null as Array) 
  //
  //    useState([] as student[])
//    Array[string]  = string[]
//
//
//

