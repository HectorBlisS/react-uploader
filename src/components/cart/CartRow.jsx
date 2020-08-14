import React, { useContext } from 'react'
import styles from './cart.module.css'
import {CartContext} from '../contexts/useCart'

const img = "https://gopherbot.com/images/gopher.jpg"

export default ({product, title, body="No description", price, pics=[], quantity=1, _id})=>{

    let {changeQuantity, deleteItem} = useContext(CartContext)

    return (
        <div className={styles.rowContainer}>
            <div>
                <img src={pics[0]} alt="blissito" />
            </div>
            <div >
                <span>
                    {title}
                </span>
                <span>
                    {body.slice(0,20)}...
                </span>
                <div>
                    <button onClick={()=>{
                        changeQuantity(product, "NO")
                    }}>
                        -
                    </button>
                    <input value={quantity} type="number"/>
                    <button onClick={()=>{
                        changeQuantity(product, "YES")
                    }} >
                        +
                    </button>
                </div>
            </div>
            <div>
                <span
                onClick={()=>{
                    deleteItem(_id)
                }}
                >x</span>
                <span>$ {price}.00</span>
            </div>
        </div>
    )
}