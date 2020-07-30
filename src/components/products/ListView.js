import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

export default function ListView(){
    let [products, setProducts] = useState([])

    useEffect(()=>{
        fetch('https://backend-panel.herokuapp.com/products')
        .then(res=>res.json())
        .then(data=>{
            setProducts(data.products)
        })
    }, [])

    return (
        <div>
            {products.map(p=>
            <p><Link to={`/products/${p.id}`}>{p.title} - {p.price}</Link></p>
            )}
        </div>
    )
}