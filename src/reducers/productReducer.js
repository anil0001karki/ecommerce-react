import { FETCT_PRODUCTS } from "../type";

export const productReducer=(state={},action)=>{
    switch(action.type){
        case FETCT_PRODUCTS:
            return {items:action.payload};
        default:
            return state;
    }

};