import * as actionTypes from '../actions/actionTypes';

const initialState = {
    orders:[],
    loading:false,
    purchasing:false
}

const reducer = (state = initialState,action) => {
    switch(action.type){
        case actionTypes.PURCHASE_INIT:
            return {
                ...state,
                purchasing:false
            }
        case actionTypes.PURCHASE_BURGER_START:
            return {
                ...state,
                loading:true
            }
        case actionTypes.PURCHASE_BURGER_SUCCESS:
            const newOrder = {
                ...action.orderData,
                id:action.orderId,
            }
            return {
                ...state,
                loading:false,
                purchasing:true,
                orders: state.orders.concat(newOrder)
            }
        case actionTypes.PURCHASE_BURGER_FAIL:
            return {
                ...state,
                loading:false
            }
        case actionTypes.FETCH_ORDER_SUCCESS:
            return {
                ...state,
                orders:action.order,
                loading:false
            }
         case actionTypes.FETCH_ORDER_START:
            return {
                ...state,
                loading:true
            }
         case actionTypes.FETCH_ORDER_FAIL:
            return {
                ...state,
                loading:false
            }
        default :
            return state
    }

}

export default reducer