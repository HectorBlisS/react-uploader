import React, { useState, createContext } from 'react';

const initial = {
    items:[],
    total:0
}

const CartContext = createContext(initial);

const CartProvider = ({children}) => { // customHook

    const [state, setState] = useState(initial)


    // función que genere el total (prices)

    // 1.- haces la funcion que consigue el total (return que??? number)
    // 2.- la pones en el value (disponible)
    // 3.- la declaras en el hook
    // 4.- la usas

    function deleteItem(_id){
        let newList = state.items.filter(p=>p._id !== _id)
        setState({...state, items:newList})
    }

    function addItemToCart(product){ // incompleta ?¿¿ si ya está en el carrito --> aumentar quantity // 2.-
        setState({...state, items:[...state.items, product]})
    }

    function changeQuantity(product, addition){
        if(addition === "YES"){
            // 1.- obtener el producto (sacarlo del array)
            // 2.- modificar su quantity (quantity ni existe)
            product.quantity = product.quantity && typeof product.quantity === "number" ? product.quantity + 1 : 2 
            // 3.- regresar el producto al array !! 
            let newList = state.items.map(p=>{
                if(p._id === product._id){
                    return product // sustitución
                }else {
                    return p
                }
            })
            setState({...state, items:newList})
        }else if(addition === "NO"){
            product.quantity = product.quantity && typeof product.quantity === "number" ? product.quantity - 1 : 0
            if(product.quantity === 0){
                let newList = state.items.filter(p=>p._id !== product._id)
                setState({...state, items:newList})
            }else{
                let newList = state.items.map(p=>{
                    if(p._id === product._id){
                        return product // sustitución
                    }else {
                        return p
                    }
                })
                setState({...state, items:newList})
            }
        }
    }

    return (
            <CartContext.Provider value={
                {state, addItemToCart, changeQuantity, deleteItem}
            }>
                {children}
            </CartContext.Provider>)
    
}
 
export {CartProvider, CartContext}