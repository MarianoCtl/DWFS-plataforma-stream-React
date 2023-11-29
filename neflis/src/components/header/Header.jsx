import React from 'react'
import "../header/header.css"
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className='parentHeader'>
      <div>
        <img src={process.env.PUBLIC_URL + "logo.png"} alt="" className='logoHeader'/>
      </div>
      <div className='inicio-Peliculas-Series'>
        <p className='separarInicio tamanioHeader'>{<Link to="/">Inicio</Link>}</p>
        <p className='separarInicio tamanioHeader'>{<Link to="/peliculas">Peliculas</Link>}</p>
        <p className='separarInicio tamanioHeader'>{<Link to="/series">Series</Link>}</p>
      </div>
      <div className='buscador-Ingresar'>
        <p className='tamanioHeader'>{<Link to="/buscar">Buscador</Link>}</p>
        <button type="button" className='btnIngresar'>{<Link to="/ingresar">Ingresar</Link>}</button>
      </div>
    </div>
  )
}
