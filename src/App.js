import React, {useState, useRef} from 'react';
import logo from './logo.svg';
import './App.css';
import Uploader from './components/Uploader' 
import CartDrawer from './components/cart/CartDrawer';


function App() {
  let [show, setShow] = useState(true)

  return (
    <div className="App">
        <button  onClick={()=>setShow(!show)}>CArt</button>
      <CartDrawer
        show={show}
        onCancel={()=>setShow(!show)}
      />
    </div>
  );
}

export default App;