
import { Action, combineReducers, configureStore, ThunkAction } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga'
import { connectRouter, routerMiddleware } from 'connected-react-router';
//import history from '../ultils/history'
import productReducer from '../feature/productReducer'
import { rootSaga } from './rootSaga';
import studentReducer from '../feature/categoryReducer';
const rootReducer = combineReducers({
   // router: connectRouter(history),
    category: studentReducer,
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
