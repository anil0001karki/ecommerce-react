import {createStore,applyMiddleware,combineReducers, compose} from 'redux';
import thunk from "redux-thunk";
import {productReducer} from './reducers/productReducer'

const initialState={};
const compostEnhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=createStore(
    combineReducers({
        products:productReducer,
    }),
    initialState,
    compostEnhancer(applyMiddleware(thunk))
)
export default store;