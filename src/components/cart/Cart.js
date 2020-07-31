import React, {Fragment, useEffect} from 'react'
import styles from './cart.module.css'
import CartRow from './CartRow'
import useCart from '../customHooks/useCart'

export default function Cart({show=false, onCancel}){

    let [list] = useCart()

    useEffect(()=>{
        console.log("Esto es el cart: ", list)
    }, [list])

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
                {list.map(p=><CartRow key={p.id} {...p} />)}
            </div>

        </Fragment>
    )
}