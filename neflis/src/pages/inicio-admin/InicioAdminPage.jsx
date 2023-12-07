import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import BusquedaMedia from "../../components/busqueda/BusquedaMedia";
import './inicioAdminPage.css';

function InicioAdminPage() {
    useEffect(()=>{
        document.title = 'Inicio administración';
    });

    const [nombre, setNombre] = useState();

    useEffect(()=>{
        //Recupera los datos del sessionStorage
        const userDataString = sessionStorage.getItem('userData');

        if(userDataString){
            // Parsea los datos y setea el nombre
            const userData = JSON.parse(userDataString);
            setNombre(userData.nombre);
        }
    }, []);

  return (
    <div className='container'>
        <div className='d-flex-admin'>
            <h1 className='titulo-bienvenida'>¡Hola {nombre}!</h1>
            <div className='mr-25'>
                {<Link to="/mensajes"><button type="button" className='btnMensaje'>Centro de mensajería</button></Link>}
                {<Link to="/nueva"><button type="button" className='btnNueva'>Nueva película o serie</button></Link>}
            </div>
        </div>
        <BusquedaMedia btnUser={false} btnAdmin={true}/>   
    </div> 
  )
}

export default InicioAdminPage