import React from 'react'
import "../header/header.css"

export default function Header() {
  return (
    <div className='parent'>
      <div>
        <img src={process.env.PUBLIC_URL + "logo.png"} alt="" className='logoHeader'/>
      </div>
      <div className='inicio-Peliculas-Series'>
        <p className='separarInicio tamanioHeader'><a href="">Inicio</a>{/*<Link to="/inicio">Inicio</Link>*/}</p>
        <p className='separarInicio tamanioHeader'><a href="">Peliculas</a></p>
        <p className='separarInicio tamanioHeader' ><a href="">Series</a></p>
      </div>
      <div className='buscador-Ingresar'>
        <p className='tamanioHeader'><a href="">Buscador</a></p>
        <button type="button" className='btnIngresar'>Ingresar</button>
      </div>
    </div>
  )
}
