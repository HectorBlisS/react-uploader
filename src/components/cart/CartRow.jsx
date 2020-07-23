import React from 'react'
import MiniButtons from './MiniButtons'

const img = "https://cdn.shopify.com/s/files/1/0271/7209/products/death_wish_coffee_single_serve_death_cups_front_large.jpg?v=1568693509"

export default function CartRow(){
    return (
        <div className="cart-row">
            <img src={img}  />
            <div>
                <span>Café molido</span>
                <span>10 pack</span>
                <span>Discounted price $15.99</span>
                <MiniButtons/>
            </div>
            <div className="price">
                <span>x</span>
                <span>$59.99</span>
            </div>
        </div>
    )
}