import {createStore,applyMiddleware,combineReducers, compose} from 'redux';
import thunk from "redux-thunk";
import { cartReducer } from './reducers/cartReducer';
import { orderReducer } from './reducers/orderReducer';
import {productReducer} from './reducers/productReducer'

const initialState={};
const compostEnhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=createStore(
    combineReducers({
        products:productReducer,
        cart:cartReducer,
        order:orderReducer
    }),
    initialState,
    compostEnhancer(applyMiddleware(thunk))
)
export default store;