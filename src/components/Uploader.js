import React, {useState, useRef} from 'react'
import firebase from '../services/firebase'

let img = "https://c2-preview.prosites.com/211308/wy/images/Perfect%20Smile%20Dental%20Tijuana%20Dentist%20Implant%20Crown%20.jpg"

export default ({getLink}) => {
    let elInpu = useRef()
    let [link, setLink] = useState(null)
    let [progress, setProgress] = useState(0)
    let [file, setFile] = useState(null)

    function onClick(){
        elInpu.current.click()
      }

    function uploadFile (file){
        let cvsRef = firebase.storage().ref("cvs") // esto es la carpeta
        let task = cvsRef.child(file.name).put(file) // es la tarea
        task.on('state_changed', snap=>{
          let progress = (snap.bytesTransferred / snap.totalBytes) * 100;
          console.log(progress)
          setProgress(progress)
        });
        return task
        .then(snap=>{
            return snap.ref.getDownloadURL()
        })
        .then(downloadURL=>{
            console.log('File available at', downloadURL);
            return downloadURL
          }); // SIEMPRE devuelves el resultado final
      }

    function onChange(event){ 
        let file = event.target.files[0]
        console.log(file)
        if(file.type === "video/mp4") return setFile(file)
        // convertir de file a string
        let reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = function(){
          setLink(reader.result)
          setFile(file) // esto toma poquito tiempo
          uploadFile(file)
          .then(url=>{
            console.log("El resultado final: ", url)
            getLink(url) // hacia el papá
          })
        }
      }

    return (
        <div>
            <input onChange={onChange} ref={elInpu} hidden type="file" placeholder="Foto" />
            <div className="loader-container">
                <div style={{width:`${progress}%`, backgroundColor:progress>99 ? "green":"orange"}} ></div>
            </div>
        <img onClick={onClick} style={{cursor:"pointer"}} width="140" src={ link ? link : img } alt="upload file icon" />
        
        </div>
    )
}