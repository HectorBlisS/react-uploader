import React, {useState, useRef} from 'react';
import logo from './logo.svg';
import './App.css';
import Uploader from './components/Uploader' 


function App() {

  let [form, setForm] = useState({
    name:"",
    email:"",
    cv:"",
    link:null,
    file:null,
    progress:0
  })

  function getFirebaseLink(url){
    console.log("soy el papa y tengo el link", url)
    setForm({...form, link:url})
  }

  function onSubmit(){ // aqui ya queremos subir al server

  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        Registra tu perfil profesional
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="CV" />
        <Uploader getLink={getFirebaseLink} />
       <button onClick={onSubmit} >Subir</button>
      </header>
    </div>
  );
}

export default App;

// 1.- Hacer bonito el loader
// 2.- agregar el numero o completado
// 3.- quitar el form cuando ya se está subiendo
// 4.- prevenir la salida del usuario si hay una tarea importante...
