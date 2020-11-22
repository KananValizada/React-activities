import * as actions from './actions'

const initialState = {
    counter:0,
    results:[]
}

const reducer = (state = initialState,action)=>{

    switch(action.type){
        case actions.INCREMENT:
             return  {
                 ...state,
            counter:state.counter+1 
            };
        case actions.DECREMENT:
            return {
                ...state,
                counter:state.counter-1 
            };
        case actions.ADD:
            return {
                ...state,
                counter:state.counter + action.val
            }
        case actions.SUBSTRACT:
            return {
                ...state,
                counter:state.counter - action.val
            }
        case actions.STORE_RESULT:
            return {
                ...state,
                results:state.results.concat({id: new Date() ,value:state.counter})
            }
        case actions.DELETE_RESULT:
            const uptadetArray =state.results.filter(result=>result.id !== action.id) 
            return {
                ...state,
                results:uptadetArray
            }

    }

    return state
};

export default reducer