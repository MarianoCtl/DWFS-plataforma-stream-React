import React, { useEffect } from 'react';
import BusquedaMedia from '../../components/busqueda/BusquedaMedia'
import '../../index.css';

function BuscarPage() {
  useEffect(() => {
    document.title = 'Buscar';
  });
  return (
    <div className='fija-footer'>
      <BusquedaMedia />
    </div>
  )
}
export default BuscarPage