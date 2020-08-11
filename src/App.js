import React, {useState, useEffect} from 'react';
// import logo from './logo.svg';
import './App.css';
// import Uploader from './components/Uploader' 
import Cart from './components/cart/Cart';
import Routes from './Routes';
import {useSelector, useDispatch} from 'react-redux' 
import {getProductsAction} from './redux/productsDuck'


function App() {
  let dispatch = useDispatch() // instance
  let array = useSelector(state=>state.products.array) // 1.- sacar datos del state / store / stateGlobal

  useEffect(()=>{

    dispatch(getProductsAction()) // 2.- Pedir conseguir datos desde fuera (servidor api)

  }, [])

  return (
    <div >
      {array.map(p=><p>{p.title}</p>)}
      {!!array.length || <h2>No hay productos</h2>}
    </div>
  );
}

export default App;