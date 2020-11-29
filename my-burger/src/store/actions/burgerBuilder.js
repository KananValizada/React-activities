import * as actionTypes from './actionTypes';
import axios from '../../axios-orders'

export const addIngredient = (name) => {
    return {
        type:actionTypes.ADD_INGREDIENTS,
        ingredientName:name
    }
}

export const removeIngredient = (name) => {
    return {
        type:actionTypes.REMOVE_INGREDIENTS,
        ingredientName:name
    }
}

export const setIngredients = (ingredients) => {
    return {
        type:actionTypes.SET_INGREDIENTS,
        ingredients:ingredients
    }
}

export const fetchIngredientsFailed = () => {
    return {
        type:actionTypes.FETCH_INGREDIENTS_FAILED
    }
}

// const testIng = {
//     salad:0,
//     bacon:0,
//     cheese:0,
//     meat:0
// }
export const initIngredients = () => {
    return dispatch => {
        axios.get('/ingredients.json')
        .then(resp=>{
          dispatch(setIngredients(resp.data))
        })
        .catch(error=>{
          dispatch(fetchIngredientsFailed())
        })
    }
    // return setIngredients(testIng)
}