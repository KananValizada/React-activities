import * as actionTypes from './actionTypes';
import axios from 'axios'

export const authStart = () => {
    return {
        type:actionTypes.AUTH_START
    }
}

export const authSuccess = (token,userId) => {
    return {
        type:actionTypes.AUTH_SUCCESS,
        idToken:token,
        userId:userId
    }
}

export const authFail = (error) => {
    return {
        type:actionTypes.AUTH_FAIL,
        error:error
    }
}

export const auth = (email,password,isSignUp) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email:email,
            password:password,
            returnSecureToken: true
        }
        let url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB4JzDs9KnhzyHX2e0vzuk9aZujYwsmCiw"
        if(!isSignUp){
            url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB4JzDs9KnhzyHX2e0vzuk9aZujYwsmCiw"
        }
        axios.post(url,authData)
            .then(resp=>{
                console.log(resp)
                dispatch(authSuccess(resp.data.idToken,resp.data.localId))
            })
            .catch(err=>{
                console.log(err)
                dispatch(authFail(err))
            })
    }
}