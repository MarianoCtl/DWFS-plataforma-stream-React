import React, {useState} from 'react';
import '../contacto/Contacto.css';

//import { Link } from 'react-router-dom';

export default function Contacto (){

const [values, setValues] = useState({
    nombre:'',
    email:'',
    celular:'',
    mensaje:'',
});


//Manejar el evento al cambiar los inputs
const handleChange = (e) => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
    
}

//setear a cadena vacia los inputs luego del envio del formulario
const handleSubmit = (e) => {
    e.preventDefault()
    
    setValues({
        nombre:'',
        email:'',
        celular:'',
        mensaje:''
    })
}

const[respuesta, setRespuesta]= useState('');

const responder = ()=>{
    setRespuesta('Gracias por contactarte con nosotros, a la brevedad estaremos respondiendo')
}

const[controlNombre, setControlNombre]= useState('');
const[controlEmail, setControlEmail]= useState('');
const[controlCelular, setControlCelular]= useState('');
const[controlMensaje, setControlMensaje]= useState('');

//controlar se ingrese un nombre
const controlarNombre = ()=>{
    if(values.nombre === ''){
        setControlNombre('Debe ingresar su nombre')
        document.getElementById('nombre').focus();
    }
}

//controlar si no se ingresa un mail y solicitar en ese caso ingrese un celular
const controlarEmail = ()=>{
    if(values.email === ''){
        setControlCelular('No ingreso email,debe ingresar un numero de celular')
        
    }
}

//controlar se ingrese por lo menos un medio de contacto
const controlarCelular = ()=>{
    if(values.email === '' & values.celular === ''){
        setControlCelular('Debe ingresas celular ó email')
        document.getElementById('email').focus();
    }
}

//requerir completar el mensaje
const controlarMensaje = ()=>{
    if(values.mensaje === ''){
        setControlMensaje('Por favor ingrese su consulta o inquietud')
        document.getElementById('mensaje').focus();
    }
}

// setear a vacios los placeholder
const limpiarPlaceHolder = ()=>{
    setControlNombre('');
    setControlEmail('');
    setControlCelular('');
    setControlMensaje('');

}
// setear a cadena vacia la respuesta al usuario
const limpiarRespuesta = ()=>{
    setRespuesta('');
}

//Solicitud POST a la API contacto
const post = ()=>{
    try{
         
        const data = {
            nombre: values.nombre,
            mail: values.email,
            telefono: values.celular,
            mensaje: values.mensaje
        }
        fetch('https://6556cdfabd4bcef8b611a1c2.mockapi.io/Api/contacto', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' },
        })
            .then(datos => { return datos.json() })
            .then(datos => console.log(datos))
            .then(datos=> responder())
            .then(datos=> limpiarPlaceHolder())
            .catch(err => { console.log(err) });
    }
    catch(error){
        
    }
}

  return (
    <div className='contiene-form-registro'>
        <form className='contiene-registro' onSubmit={handleSubmit}>
            <div className='contiene-titulo'>                
                
                <h2>CO<span><img src={process.env.PUBLIC_URL + 'icono.png'} alt="Logo de Neflis" className='icono' /></span>TACTO</h2>                
            </div>
            
            <div className='contiene-input'>
                <label className='label' for='nombre' >Nombre</label>
                <input type="text" name="nombre" id="nombre" className='input' value={values.nombre} onChange={handleChange} placeholder={controlNombre} onBlur={controlarNombre} onFocus={limpiarRespuesta}  />
            </div>            

            <div className='contiene-input'>
                <label className='label' for='email' >Email</label>
                <input type='email' name="email" id="email" className='input' value={values.email} onChange={handleChange} placeholder={controlEmail} onBlur={controlarEmail}   />
            </div>

            <div className='contiene-input'>
                <label className='label' for='celular' >Celular</label>
                <input type='text' name="celular" id="" className='input' value={values.celular} onChange={handleChange} placeholder={controlCelular} onBlur={controlarCelular}   />
            </div>
            
            <div className='contiene-input'>
                <label className='label' for='mensaje' >Mensaje</label>
                <textarea name="mensaje" className='input' id="mensaje" cols="30" rows="10" value={values.mensaje} onChange={handleChange} placeholder={controlMensaje} onBlur={controlarMensaje}></textarea>                
            </div>

            <div className='contiene-btnEnviar'>
                <button className='btnEnviar' onClick={post} >Enviar</button>
                <button className='btnEnviar'  >Salir</button>
            </div>
            <p className='respuesta'>{respuesta}</p>            

        </form>

    </div>
  )
}

