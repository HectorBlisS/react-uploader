import React, {useEffect, useState, useContext} from 'react'
import {Link} from 'react-router-dom'
import useCart from '../customHooks/useCart'
import {CartContext} from '../contexts/useCart'

export default function ListView(){
    let [products, setProducts] = useState([])
    // que me entrga el custo hook?
    let cart = useContext(CartContext)
    console.log("segun context: ", cart)

    useEffect(()=>{
        fetch('https://backend-panel.herokuapp.com/products')
        .then(res=>res.json())
        .then(data=>{
            setProducts(data.result)
        })
    }, [])

    function addItem(product){
        cart.addItemToCart(product)
    }

    return (
        <div style={{display:"flex", justifyContent:"space-around", flexWrap:"wrap"}}>
            {products.map(p=>
            <p>
                <img width="100" src={p.pics[0]} />
                <br/>
                <Link to={`/products/${p.id}`}>{p.title} - ${p.price}MXN</Link>
                <br/>
                <button onClick={()=>{
                    addItem(p)
                }}> 
                    Add to cart
                </button>
            </p>
            )}
        </div>
    )
}