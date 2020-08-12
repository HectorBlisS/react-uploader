import React, { useState, createContext } from 'react';

const initial = {
    items:[],
    total:0
}

export const CartContext = createContext(initial);

    const useCartContext = () => { // customHook

    const [state, setState] = useState(initial)

    function addItemToCart(product){
        setState({...state, items:[...state.items, product]})
    }

    const Provider = ({children})=>{
        return (
            <CartContext.Provider value={
                {state, addItemToCart}
            }>
                {children}
            </CartContext.Provider>)
    }

    return Provider
}
 
export default useCartContext;