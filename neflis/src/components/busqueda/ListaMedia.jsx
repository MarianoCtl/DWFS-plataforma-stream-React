import React, { useEffect, useState } from 'react';
import './listaMedia.css'

export default function ListaMedia({tipo, genero, textoBuscar, botonPlay, botonEditar, botonEliminar}){
    const url = 'https://6556206a84b36e3a431f1fb4.mockapi.io/media'    
           
        const [media, setMedia] = useState([]);
      
        useEffect(() => {
            //Trae las películas y series de la API
            const ObtenerMedia = async () => {
                try {
                    const response = await fetch(url);
                    const jsonMedia = await response.json();
                    setMedia(jsonMedia);
                    
                    console.log(media);
                } catch (error) {
                    console.error('Error fetch:', error);
                }
            };
            ObtenerMedia();
        }, []);
    
    let mediaFiltrada = []    
    
    if (tipo){
        if (genero){
            mediaFiltrada = (media.filter(dato => ((dato.tipo===tipo)&&(dato.id_genero===genero))&&((dato.titulo.toLowerCase().includes(textoBuscar.toLowerCase()))||(dato.sinopsis.toLowerCase().includes(textoBuscar.toLowerCase())))));
        }else{
            mediaFiltrada = (media.filter(dato => ((dato.tipo===tipo))&&((dato.titulo.toLowerCase().includes(textoBuscar.toLowerCase()))||(dato.sinopsis.toLowerCase().includes(textoBuscar.toLowerCase())))));
        }
    }else{
        if (genero){
            mediaFiltrada = (media.filter(dato => ((dato.id_genero===genero))&&((dato.titulo.toLowerCase().includes(textoBuscar.toLowerCase()))||(dato.sinopsis.toLowerCase().includes(textoBuscar.toLowerCase())))));
        }else{
            mediaFiltrada = (media.filter(dato => ((dato.titulo.toLowerCase().includes(textoBuscar.toLowerCase()))||(dato.sinopsis.toLowerCase().includes(textoBuscar.toLowerCase())))));
        }
    }

    const mediaEditar =(dato)=> {
        localStorage.setItem('datoAEditar', JSON.stringify(dato));
    }

    const mediaEliminar = (dato)=>{       
        media.splice(dato,1);  
    }    

    return(
        <div>
            <ul>
                {mediaFiltrada.map((dato ) => (    
                <li className='titulo-dato'key={dato.id}>
                    <div className='contiene-dato'>
                        <img className='imagen-dato'src={dato.imagen}/>
                        <div className='contiene-titulo-sinopsis' >                            
                            <p className='titulo'>{dato.titulo} <span className='tipo'>({dato.tipo})</span> </p>                            
                            <p >{dato.sinopsis}</p>
                        </div>
                        <div className='contiene-button'>
                            <div className='tooltip'>
                            {botonPlay&&<button className='boton'><img src={process.env.PUBLIC_URL + 'play.png'} key={dato.id} onClick={()=>{alert(dato.titulo)}}></img> <span class="tooltiptext">Reproducir</span> </button>}
                            </div>
                            <div className='tooltip'>
                            {botonEditar&&<button className='boton'><img src={process.env.PUBLIC_URL + 'editar.png'} key={dato.id} onClick={()=>{mediaEditar(dato)}} ></img> <span class="tooltiptext">Editar</span> </button>}
                            </div>
                            <div className='tooltip'>
                            {botonEliminar&&<button className='boton'><img src={process.env.PUBLIC_URL + 'eliminar.png'} key={dato.id} onClick={()=>{mediaEliminar(dato)}} ></img> <span class="tooltiptext">Eliminar</span> </button>}
                            </div>
                        </div>
                    </div>                    
                </li>
                ))}
            </ul>
        </div>
)};



