const GET_PRODUCTS = "GET_PRODUCTS"
const GET_PRODUCTS_ERROR = "GET_PRODUCTS_ERROR"
const GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS"

const initialState = {
    array:[]
}

export default function(state=initialState, action){
    switch(action.type){
        case GET_PRODUCTS_SUCCESS:
            return {...state, array:action.payload}
        default:
            return {...state}
    }
}

export function getProductsAction() { // thunk --> promesas
    return (dispatch)=>{
        fetch('https://backend-panel.herokuapp.com/products')
        .then(res=>res.json())
        .then(data=>{
            dispatch({
                type: GET_PRODUCTS_SUCCESS,
                payload: [...data.result] // inmutabilidad
            })
        })
    }
}