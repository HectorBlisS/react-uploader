import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import useCart from '../customHooks/useCart'

export default function ListView(){
    let [products, setProducts] = useState([])
    // que me entrga el custo hook?
    let [list, addItem] = useCart()

    useEffect(()=>{
        fetch('https://backend-panel.herokuapp.com/products')
        .then(res=>res.json())
        .then(data=>{
            setProducts(data.products)
        })
    }, [])

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