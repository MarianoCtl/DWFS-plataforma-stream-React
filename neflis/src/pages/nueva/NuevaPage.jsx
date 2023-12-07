import React, { useEffect } from 'react';
import AlterarContenido from '../../components/alterar-contenido/AlterarContenido';


function NuevaPage() {
  useEffect(() => {
    document.title = 'Nueva película/serie';
  });

  return (
    <div className='fija-footer'>
      <AlterarContenido />
    </div>
  )
}

export default NuevaPage