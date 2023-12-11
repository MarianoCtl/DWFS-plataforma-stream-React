import React, { useState, useEffect } from 'react';
import "../header/header.css"
import { Link } from "react-router-dom";

export default function Header() {
  const [nombre, setNombre] = useState();
  const [rol, setRol] = useState("");
  //Menu
  function menu() {
    var x = document.getElementById("menuCss");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
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
        <img src={process.env.PUBLIC_URL + "/img/icono.png"} alt="" className='logoHeaderResponsive' />
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
      <div id='menuCss'>
        {(rol === 'User' || rol == "") ? (
          <>
            <p className='separarInicio tamanioHeader'>{<Link to="/" className='efectoLink'>Inicio</Link>}</p>
            <p className='separarInicio tamanioHeader'>{<Link to="/peliculas" className='efectoLink'>Peliculas</Link>}</p>
            <p className='separarInicio tamanioHeader'>{<Link to="/series" className='efectoLink'>Series</Link>}</p>
            <p className='separarInicio tamanioHeader'>{<Link to="/ingresar"><button type="button" className='btnIngresar' onClick={terminarSesion}>Salir</button></Link>}</p>
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
            <p className='tamanioHeader buscadorResponsive'>{<Link to="/buscar" className='efectoLink'>Buscador</Link>}</p>
          </>
        )}
        <p className='tamanioHeader nomberResponsive'>{nombre}</p>
        {rol == "" ? (
          <>
            {<Link to="/ingresar"><button type="button" className='btnIngresar'>Ingresar</button></Link>}
          </>
        ) : (
          <>
            {<Link to="/ingresar"><button type="button" className='btnIngresar btnResponsiveCss' onClick={terminarSesion}>Salir</button></Link>}
          </>
        )}
      </div>
      <div className='nav-icono-responsive'>
        <img src={process.env.PUBLIC_URL + '/img/logoNav.jpg'} onClick={menu}/>
      </div>
    </div>
  )
}
