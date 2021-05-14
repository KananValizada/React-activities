import * as actionTypes from './actionTypes';
import axios from '../../axios-orders'

export const purchaseBurgerSuccess = (id,orderData) => {
    return {
        type:actionTypes.PURCHASE_BURGER_SUCCESS,
        orderId:id,
        orderData:orderData
    }
}

export const purchaseBurgerFail = (error) => {
    return {
        type:actionTypes.PURCHASE_BURGER_FAIL,
        error:error
    }
}

export const purchaseBurgerStart = () => {
    return {
        type: actionTypes.PURCHASE_BURGER_START
    }
}

export const purchaseBurger = (orderData,token) => {
    return dispatch => {
        dispatch(purchaseBurgerStart());
        axios.post('/orders.json?auth=' + token,orderData)
        .then(resp=>{
            dispatch(purchaseBurgerSuccess(resp.data.name,orderData))
           
        })
        .catch(error=>{
            dispatch(purchaseBurgerFail(error))
        })
    }

}

export const purchaseInit = () => {
    return {
        type:actionTypes.PURCHASE_INIT
    }
}


export const fetchOrderSuccess = (order) => {
    return {
        type:actionTypes.FETCH_ORDER_SUCCESS,
        order:order
    }
}

export const fetchOrderFail = (error) => {
    return {
        type:actionTypes.FETCH_ORDER_FAIL,
        error:error
    }
}

export const fetchOrderStart = () => {
    return {
        type: actionTypes.FETCH_ORDER_START
    }
}

export const fetchOrder = (token,userId) => {
    return dispatch => {
        dispatch(fetchOrderStart())
        const queryParams = '?auth=' + token +'&orderBy="userId"&equalTo="'+userId + '"'
        axios.get('/orders.json'+queryParams)
        .then(res=>{
            const fetchedData = [];
            for(let key in res.data){
                fetchedData.push({
                    ...res.data[key],
                    id:key
                })
            }
            dispatch(fetchOrderSuccess(fetchedData))
        })
        .catch(err=>{
            dispatch(fetchOrderFail())
        })
    }
}