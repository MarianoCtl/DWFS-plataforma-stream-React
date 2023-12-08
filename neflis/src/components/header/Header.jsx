import React, { useState, useEffect } from 'react';
import "../header/header.css"
import { Link } from "react-router-dom";

export default function Header() {
  const [nombre, setNombre] = useState();
  const [rol, setRol] = useState("");

  useEffect(() => {
    const userDataString = sessionStorage.getItem('userData');

    if (userDataString) {
      const userData = JSON.parse(userDataString);
      setNombre(userData.nombre);
      setRol(userData.rol);
    }
  }, []);

  const terminarSesion = () => {
    sessionStorage.removeItem('userData');
    window.location.href = '/';
  }

  return (
    <div className='parentHeader'>
      <div>
        <img src={process.env.PUBLIC_URL + "/img/logo.png"} alt="" className='logoHeader' />
      </div>
      <div className='inicio-Peliculas-Series'>
        {(rol === 'User' || rol == "") ? (
          <>
            <p className='separarInicio tamanioHeader'>{<Link to="/" className='efectoLink'>Inicio</Link>}</p>
            <p className='separarInicio tamanioHeader'>{<Link to="/peliculas" className='efectoLink'>Peliculas</Link>}</p>
            <p className='separarInicio tamanioHeader'>{<Link to="/series" className='efectoLink'>Series</Link>}</p>
          </>
        ) : (
          <>
            <p className='separarInicio tamanioHeader'>{<Link to="/admin" className='efectoLink'>Inicio</Link>}</p>
          </>
        )}
      </div>
      <div className='buscador-Ingresar'>
        {(rol === 'User' || rol == "") && (
          <>
            <p className='tamanioHeader'>{<Link to="/buscar" className='efectoLink'>Buscador</Link>}</p>
          </>
        )}
        <p className='tamanioHeader'>{nombre}</p>
        {rol == "" ? (
          <>
            {<Link to="/ingresar"><button type="button" className='btnIngresar'>Ingresar</button></Link>}
          </>
        ) : (
          <>
            {<Link to="/ingresar"><button type="button" className='btnIngresar' onClick={terminarSesion}>Salir</button></Link>}
          </>
        )}
      </div>
    </div>
  )
}
