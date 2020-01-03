import * as types  from './const';
import productList from '../connectFirebase/Connect'
const fetchProductListAction = payload => ({
    type: types.GET_PRODUCT,
    payload: payload
})

export const fetchProductList = () => {
    return dispatch => (dispatch(fetchProductListAction({ status: 'OK', productList: productList })))
}