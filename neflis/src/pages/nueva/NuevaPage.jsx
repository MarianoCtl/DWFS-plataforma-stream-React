import React, { useEffect } from 'react';
import AgregaContenido from '../../components/agrega-contenido/AgregaContenido';


function NuevaPage() {
    useEffect(()=>{
        document.title = 'Nueva película/serie';
    });

  return (
    <>
        <AgregaContenido/>
    </>
  )
}

export default NuevaPage