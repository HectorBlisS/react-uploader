import React, {useState, useEffect, useContext} from 'react';
// import logo from './logo.svg';
import './App.css';
// import Uploader from './components/Uploader' 
import Cart from './components/cart/Cart';
import Routes from './Routes';
import {CartContext} from './components/contexts/useCart'


function App() {

  let {state:cartState} = useContext(CartContext)

  useEffect(() => {
    console.log("effect");
    fetch("https://rickandmortyapi.com/graphql/", {
      method: "POST",
      body: JSON.stringify({
        query: "{characters\n{results{\nid\n name\n image\n species}}}"
      }),
      headers:{
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        console.log(res);
        return res.json();
      })
      .then(r => console.log(r));
  }, []);

  let [state, setState] = useState({
    show:false
  })
  let [list, setList] = useState([])

  useEffect(()=>{
    if(!!cartState.items.length){
      setState({...state, show:true})
    }
  }, [cartState])

  function toggleShow(){
    setState({...state, show: !state.show})
  }

  return (
    <div >
    <button onClick={toggleShow}>
      Blissito
    </button>

      <Routes />

    <Cart 
      onCancel={toggleShow}
      show={state.show} 
      list={list}
      />
    </div>
  );
}

export default App;

// 1.- Hacer bonito el loader
// 2.- agregar el numero o completado
// 3.- quitar el form cuando ya se está subiendo
// 4.- prevenir la salida del usuario si hay una tarea importante...
