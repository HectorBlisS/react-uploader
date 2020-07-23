import React, { Fragment } from 'react'
import './cart.css'
import CartRow from './CartRow'

export default function CartDrawer({show, onCancel}){
    return (
        <Fragment>
        <div onClick={onCancel} className={show ? "cart-container" : "cart-container hidden"}></div>
            <div className={show ? "cart-holder" : "cart-holder hidden-two"}>
                 <div className="rows-container">
                     <CartRow/>
                     <CartRow/>
                     <CartRow/>
                     <CartRow/>
                     <CartRow/>
                     <CartRow/>
                     <CartRow/>
                     <CartRow/>
                     <CartRow/>
                     <CartRow/>
                     <CartRow/>
                     <CartRow/>
                     <CartRow/>
                     <CartRow/>
                 </div>
            </div>
        </Fragment>
    )
}