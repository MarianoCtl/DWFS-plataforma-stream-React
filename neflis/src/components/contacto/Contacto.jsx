import React, {useState} from 'react';
import '../contacto/Contacto.css';

//import { Link } from 'react-router-dom';

export default function Contacto (){

let fechaActual=new Date();
const url = 'https://6556cdfabd4bcef8b611a1c2.mockapi.io/Api/contacto';

const [values, setValues] = useState({
    nombre:'',
    mail:'',
    telefono:'',
    consulta:'',
    
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
        mail:'',
        telefono:'',
        consulta:'',
        fecha:''
    })
    
}

const[respuesta, setRespuesta]= useState('');

const responder = ()=>{
    setRespuesta('Gracias por contactarte con nosotros, a la brevedad estaremos respondiendo')
    setTimeout(()=>{
        setRespuesta('')
    },3000);
}

const[controlNombre, setControlNombre]= useState('');
const[controlEmail, setControlEmail]= useState('');
const[controlCelular, setControlCelular]= useState('');
const[controlConsulta, setControlConsulta]= useState('');

//controlar se ingrese un nombre
const controlarNombre = ()=>{
    if(values.nombre === ''){
        setControlNombre('Debe ingresar su nombre')
        document.getElementById('nombre').focus();
    }
}

//controlar si no se ingresa un mail y solicitar en ese caso ingrese un celular
const controlarEmail = ()=>{
    if(values.mail === ''){
        setControlCelular('No ingreso email,debe ingresar un numero de celular')
        
    }
}

//controlar se ingrese por lo menos un medio de contacto
const controlarCelular = ()=>{
    if(values.mail === '' & values.telefono === ''){
        setControlCelular('Debe ingresas celular ó email')
        document.getElementById('email').focus();
    }
}

//requerir completar el mensaje
const controlarConsulta = ()=>{
    if(values.consulta === ''){
        setControlConsulta('Por favor ingrese su consulta o inquietud')
        document.getElementById('mensaje').focus();
    }
}

// setear a vacios los placeholder
const limpiarPlaceHolder = ()=>{
    setControlNombre('');
    setControlEmail('');
    setControlCelular('');
    setControlConsulta('');

}
// setear a cadena vacia la respuesta al usuario
const limpiarRespuesta = ()=>{
    setRespuesta('');
}
let datosConFecha = []
  const enviarDatosAPI = async () => {
    datosConFecha = {
        ...values,
        fecha: fechaActual.toLocaleString(),
      };
    if (datosConFecha.nombre && (datosConFecha.mail || datosConFecha.telefono) && datosConFecha.consulta) {
    try {
      const respuestaApi = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(datosConFecha),
      });

      const resultado = await respuestaApi.json();

      // Actualizar el estado con la respuesta de la API
      
        console.log(resultado);
        responder();
        limpiarPlaceHolder();

      

      
    } catch (error) {
      console.error('Error al enviar datos a la API:', error);
      // Manejar el error si es necesario
      setRespuesta('Error al enviar datos a la API.');
    }
  }else{
    setRespuesta('Debe completar nombre, mensaje y celular o email')
  }
};

  


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
                <label className='label' for='mail' >Email</label>
                <input type='email' name="mail" id="email" className='input' value={values.mail} onChange={handleChange} placeholder={controlEmail} onBlur={controlarEmail}   />
            </div>

            <div className='contiene-input'>
                <label className='label' for='celular' >Celular</label>
                <input type='text' name="telefono" id="" className='input' value={values.telefono} onChange={handleChange} placeholder={controlCelular} onBlur={controlarCelular}   />
            </div>
            
            <div className='contiene-input'>
                <label className='label' for='consulta' >Mensaje</label>
                <textarea name="consulta" className='input' id="mensaje" cols="30" rows="10" value={values.consulta} onChange={handleChange} placeholder={controlConsulta} onBlur={controlarConsulta}></textarea>                
            </div>

            <div className='contiene-btnEnviar'>
                <button className='btnEnviar' onClick={enviarDatosAPI}>Enviar</button>
                <button className='btnEnviar'  >Salir</button>
            </div>
            <p className='respuesta'>{respuesta}</p>            

        </form>

    </div>
  )
}

