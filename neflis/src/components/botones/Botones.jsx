import React from 'react'
import './botones.css'
export default function Botones() {
  return (
  <div>
  <p className='textobtnmedia'>Temporadas</p>
  <select className='textobtnmedia'>
    <option value="">Temporada 1</option>
    <option value="">Temporada 2</option>
  </select>
  <p className='textobtnmedia'>Capitulos</p>
  <div className='centrarBtns'>
  <button>Episodio 1</button>
  <button>Episodio 2</button>
  <button>Episodio 3</button>
  <button>Episodio 4</button>
  <button>Episodio 5</button>
  <button>Episodio 6</button>
  </div>
  </div>
  )
}
