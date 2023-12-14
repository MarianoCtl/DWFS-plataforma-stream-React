import React from 'react'
import { useParams} from 'react-router-dom';
import BusquedaMedia from '../../components/busqueda/BusquedaMedia';

export default function MediaGeneroPage() {
    let {tipo,genero}=useParams();//aca trae datos(variables) desde la ruta anterior
    return(
    <>        
        <BusquedaMedia tipo={tipo} genero={genero}/>
    </>
)
}
