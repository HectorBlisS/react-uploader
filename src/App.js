import React, {useState, useRef} from 'react';
import logo from './logo.svg';
import './App.css';
import firebase from './services/firebase'

let img = "https://c2-preview.prosites.com/211308/wy/images/Perfect%20Smile%20Dental%20Tijuana%20Dentist%20Implant%20Crown%20.jpg"

function App() {

  let [form, setForm] = useState({
    name:"",
    email:"",
    cv:"",
    link:null,
    file:null,
    progress:0
  })
  let elInpu = useRef()

  function onClick(){
    elInpu.current.click()
    
  }

  function onChange(event){ 
    let file = event.target.files[0]
    console.log(file)
    if(file.type === "video/mp4") return setForm({...form, file})
    // convertir de file a string
    let reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = function(){
      setForm({...form, link:reader.result, file})
    }

   
  }

  function uploadFile (){
    let cvsRef = firebase.storage().ref("cvs") // esto es la carpeta
    let task = cvsRef.child(form.file.name).put(form.file) // es la tarea
    task.on('state_changed', snap=>{
      let progress = (snap.bytesTransferred / snap.totalBytes) * 100;
      console.log(progress)
      setForm({...form, progress})
    })
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
        <input onChange={onChange} ref={elInpu} hidden type="file" placeholder="Foto" />
        <div className="loader-container">
          <div style={{width:`${form.progress}%`, backgroundColor:form.progress>99 ? "green":"orange"}} ></div>
        </div>
        <img onClick={onClick} style={{cursor:"pointer"}} width="140" src={ form.link ? form.link : img } alt="upload file icon" />
        <button onClick={uploadFile} >Subir</button>
      </header>
    </div>
  );
}

export default App;

// 1.- Hacer bonito el loader
// 2.- agregar el numero o completado
// 3.- quitar el form cuando ya se está subiendo
// 4.- prevenir la salida del usuario si hay una tarea importante...
