import { combineReducers } from "redux";
import * as types from './const';
import { connectRouter } from 'connected-react-router'
export default (history) => combineReducers({
    router: connectRouter(history),
    productReducer
})

const initialProductState = { status: false, productList: [] };

const productReducer = (state = initialProductState, action) => {
    switch (action.type) {
        case types.GET_PRODUCT:
           
            return { ...state, status: action.payload.status, productList: action.payload.productList };
        default:
            return state;
    }
}