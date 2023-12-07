import React, { useEffect } from 'react';
import AlterarContenido from '../../components/alterar-contenido/AlterarContenido';
import { useParams } from 'react-router-dom';


function EditarPage() {
  useEffect(() => {
    document.title = 'Modificar película/serie';
  });
  const {id} = useParams();
  return (
    <div className='fija-footer'>
      <AlterarContenido accion={"editar"} id={id} />
    </div>
  )
}

export default EditarPage