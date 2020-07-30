import React, {useEffect, useState} from 'react'

export default function DetailView({match}){
    let [product, setProduct] = useState({})
    console.log(match)
    // conseguir el producto desde la BD con el id (match.params)
    useEffect(()=>{
        fetch('http://localhost:8000/products/' + match.params.productId)
        .then(res=>res.json())
        .then(data=>{
            setProduct(data)
        })
    }, [])
    return (
        <div>
            DEtalle del producto: {product.title} - {product.price}
            <button onClick={()=>{}}>
                atraz
            </button>
        </div>
    )
}