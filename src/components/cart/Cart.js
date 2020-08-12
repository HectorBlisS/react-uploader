import React, {Fragment, useEffect, useContext} from 'react'
import styles from './cart.module.css'
import CartRow from './CartRow'
import useCart from '../customHooks/useCart'
import {CartContext} from '../contexts/useCart'

export default function Cart({show=false, onCancel}){

    let cart = useContext(CartContext)
    let {items} = cart.state

    useEffect(()=>{
        console.log("desde el carrito: ", cart.state)
    }, [cart.state])

    return (
        <Fragment>
            <div 
            onClick={onCancel}
            className={
                show ? styles.cartOverlay :
                `${styles.cartOverlay} ${styles.hidden2}`
            } ></div>
            <div className={
                show ? styles.cartHolder :
                `${styles.cartOverlay} ${styles.hidden}`
            } >
                {items.map(p=><CartRow key={p.id} {...p} />)}
            </div>

        </Fragment>
    )
}