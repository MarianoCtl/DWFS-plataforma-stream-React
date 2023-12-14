import React, { useState, useEffect } from 'react';
import "../header/header.css"
import { Link } from "react-router-dom";

export default function Header() {
  const [nombre, setNombre] = useState();
  const [rol, setRol] = useState("");
  const [menuVisible, setMenuVisible] = useState(false);
  
  useEffect(() => {
    const userDataString = sessionStorage.getItem('userData');

    if (userDataString) {
      const userData = JSON.parse(userDataString);
      setNombre(userData.nombre);
      setRol(userData.rol);
    }
  }, []);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const terminarSesion = () => {
    sessionStorage.removeItem('userData');
    window.location.href = '/';
  }

  return (
    <div className='parentHeader'>
    <div className='nav-icono-responsive'>
      <img src={process.env.PUBLIC_URL + '/img/logoNav.jpg'} onClick={toggleMenu}/>
    </div>
        <img src={process.env.PUBLIC_URL + "/img/logo.png"} alt="" className='logoHeader d-responsive-none' />
        <img src={process.env.PUBLIC_URL + "/img/icono.png"} alt="" className='logoHeaderResponsive' />
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
      <div id='menuCss' style={{ display: menuVisible ? 'block' : 'none' }}>
        {(rol === 'User' || rol == "") ? (
          <>
            <p className='separarInicio tamanioHeader'>{<Link to="/" className='efectoLink' onClick={toggleMenu}>Inicio</Link>}</p>
            <p className='separarInicio tamanioHeader'>{<Link to="/peliculas" className='efectoLink' onClick={toggleMenu}>Peliculas</Link>}</p>
            <p className='separarInicio tamanioHeader'>{<Link to="/series" className='efectoLink' onClick={toggleMenu}>Series</Link>}</p>
            <p className='separarInicio tamanioHeader'>{<Link to="/buscar" className='efectoLink' onClick={toggleMenu}>Buscador</Link>}</p>
          </>
        ) : (
          <>
            <p className='separarInicio tamanioHeader'>{<Link to="/admin" className='efectoLink' onClick={toggleMenu}>Inicio</Link>}</p>
          </>
        )}
        {rol == "" ? (
          <>
            <p className='separarInicio tamanioHeader'>{<Link to="/ingresar"><button type="button" className='btnIngresar' onClick={toggleMenu}>Ingresar</button></Link>}</p>
          </>
        ) : (
          <>
            <p className='separarInicio tamanioHeader nomberResponsive'>{nombre}</p>
            <p className='separarInicio tamanioHeader'>{<Link to="/ingresar"><button type="button" className='btnIngresar btnResponsiveCss' onClick={terminarSesion}>Salir</button></Link>}</p>
          </>
        )}
      </div>
      <div className='buscador-Ingresar'>
        {(rol === 'User' || rol == "") && (
          <>
            <p className='tamanioHeader buscadorResponsive d-responsive-none'>{<Link to="/buscar" className='efectoLink'>Buscador</Link>}</p>
          </>
        )}
        <p className='tamanioHeader nomberResponsive d-responsive-none'>{nombre}</p>
        {rol == "" ? (
          <>
            {<Link to="/ingresar"><button type="button" className='btnIngresar d-responsive-none'>Ingresar</button></Link>}
          </>
        ) : (
          <>
            {<Link to="/ingresar"><button type="button" className='btnIngresar btnResponsiveCss  d-responsive-none' onClick={terminarSesion}>Salir</button></Link>}
          </>
        )}
      </div>
    </div>
  )
}
