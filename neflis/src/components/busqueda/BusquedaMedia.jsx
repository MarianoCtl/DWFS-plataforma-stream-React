import React, { useState, useEffect } from "react";
import ListaMedia from "./ListaMedia";
import './busquedaMedia.css';

export default function BusquedaMedia({ btnUser, btnAdmin, tipo, genero }) {
    const [tipoMedia, setTipoMedia] = useState(tipo);
    const seleccionarTipoMedia = (e)=>{
        setTipoMedia(e.target.value);
    }
    const [generoMedia, setGeneroMedia] = useState(parseInt(genero));
    const seleccionarGeneroMedia = (e)=>{
        setGeneroMedia(Number(e.target.value));
    }

    const [textoInputBuscar, setTextoInputBuscar] = useState('');

    const SetearTextoBuscar = (e) => {
        setTextoInputBuscar(e.target.value);
    }

    const buscarTexto = () => {
        setTextoBuscar(textoInputBuscar);
    }

    const [textoBuscar, setTextoBuscar] = useState('');    

    const [rol, setRol] = useState("");
    useEffect(()=>{
        const userDataString = sessionStorage.getItem('userData');
  
        if(userDataString){
            const userData = JSON.parse(userDataString);
            setRol(userData.rol);
        }
    }, []);

    if(rol == "User" ){
        btnUser=true;
    }else{
        btnUser=false;
    }

        return(
        <>        
        <div className="contiene-buscador">        
            <p className="titulo-texto-buscar">Buscar Peliculas ó Series</p>
            
            <div className="contiene-input">
            <select className="seleccion" value={tipoMedia} onChange={seleccionarTipoMedia}>
                <option>Todos los tipos</option>                
                <option value="pelicula">Peliculas</option>
                <option value="serie">Series</option>
            </select>
            <select className="seleccion" value={generoMedia} onChange={seleccionarGeneroMedia}>
                <option>Todos los géneros</option>                
                <option value={1} >Acción</option>
                <option value={2}>Terror</option>
                <option value={3}>Romance</option>
                <option value={4}>Comedia</option>
            </select>
            <div className="espacio_cssResponsive"></div>
            <input type="text" className = 'texto-buscar' placeholder="Ingrese pelicula o serie a buscar" onChange={SetearTextoBuscar} />
                <div className="tooltip lupa-cssResponsive">
                <button className="button-lupa-refresh" ><img src={process.env.PUBLIC_URL + 'img/buscar.png'} onClick={buscarTexto} ></img> <span className="tooltiptext">Buscar</span></button>
                </div>
                <div className="tooltip refresh-cssResponsive">
                <button className="button-lupa-refresh" ><img src={process.env.PUBLIC_URL + 'img/actualizar.png'} onClick={()=>window.location.reload()} ></img> <span className="tooltiptext">Actualizar</span> </button>
                </div>                
            </div>
            </div>
            <ListaMedia tipo={tipoMedia} genero={generoMedia} textoBuscar={textoBuscar} botonPlay={btnUser} botonEditar={btnAdmin} botonEliminar={btnAdmin} />            
        </>

    )
}