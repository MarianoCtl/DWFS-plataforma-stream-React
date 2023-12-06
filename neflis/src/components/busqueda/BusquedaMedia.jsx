import React, { useState } from "react";
import ListaMedia from "./ListaMedia";
import './busquedaMedia.css';

export default function BusquedaMedia({ btnUser, btnAdmin, tipo, genero }) {
    const [tipoMedia, setTipoMedia] = useState(tipo);
    const seleccionarTipoMedia = (e)=>{
        setTipoMedia(e.target.value);
        console.log(tipoMedia);
    }
    const [generoMedia, setGeneroMedia] = useState(parseInt(genero));
    const seleccionarGeneroMedia = (e)=>{
        setGeneroMedia(Number(e.target.value));
        console.log(generoMedia);
    }

    const [textoInputBuscar, setTextoInputBuscar] = useState('');

    const SetearTextoBuscar = (e) => {
        setTextoInputBuscar(e.target.value);
        console.log(textoInputBuscar);
    }

    const buscarTexto = () => {
        setTextoBuscar(textoInputBuscar);
        console.log(textoBuscar);
    }

    const [textoBuscar, setTextoBuscar] = useState('');    

        return(
        <>        
        <div className="contiene-buscador">        
            <p className="titulo-texto-buscar">Buscar Peliculas ó Series</p>
            
            <div className="contiene-input">
            <select className="seleccion" value={tipoMedia} onChange={seleccionarTipoMedia}>
                <option  value="" selected>Todos los tipos</option>                
                <option value="pelicula">Peliculas</option>
                <option value="serie">Series</option>
            </select>
            <select className="seleccion" value={generoMedia} onChange={seleccionarGeneroMedia}>
                <option  value ="" selected>Todos los géneros</option>                
                <option value= {1} >Acción</option>
                <option value={2}>Terror</option>
                <option value={3}>Romance</option>
                <option value={4}>Comedia</option>
            </select>
            <input type="text" className = 'texto-buscar' placeholder="Ingrese pelicula o serie a buscar" onChange={SetearTextoBuscar} />
                <div className="tooltip">
                <button className="button-lupa-refresh" ><img src={process.env.PUBLIC_URL + '/buscar.png'} onClick={buscarTexto} ></img> <span class="tooltiptext">Buscar</span></button>
                </div>
                <div className="tooltip">
                <button className="button-lupa-refresh" ><img src={process.env.PUBLIC_URL + '/actualizar.png'} onClick={()=>window.location.reload()} ></img> <span class="tooltiptext">Actualizar</span> </button>
                </div>                
            </div>
            <ListaMedia tipo={tipoMedia} genero={generoMedia} textoBuscar={textoBuscar} botonPlay={btnUser} botonEditar={btnAdmin} botonEliminar={btnAdmin} />
        </>

    )
}