import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import './listaMedia.css'

export default function ListaMedia({ tipo, genero, textoBuscar, botonPlay, botonEditar, botonEliminar }) {
    const url = 'https://6556206a84b36e3a431f1fb4.mockapi.io/media/';
    const [media, setMedia] = useState([]);

    useEffect(() => {
        //Trae las películas y series de la API
        const ObtenerMedia = async () => {
            try {
                const response = await fetch(url);
                const jsonMedia = await response.json();
                setMedia(jsonMedia);
            } catch (error) {
                console.error('Error fetch:', error);
            }
        };
        ObtenerMedia();
    }, []);

    let mediaFiltrada = []

    if (tipo) {
        if (genero) {
            mediaFiltrada = (media.filter(dato => ((dato.tipo === tipo) && (dato.id_genero === genero)) && ((dato.titulo.toLowerCase().includes(textoBuscar.toLowerCase())) || (dato.sinopsis.toLowerCase().includes(textoBuscar.toLowerCase())))));
        } else {
            mediaFiltrada = (media.filter(dato => ((dato.tipo === tipo)) && ((dato.titulo.toLowerCase().includes(textoBuscar.toLowerCase())) || (dato.sinopsis.toLowerCase().includes(textoBuscar.toLowerCase())))));
        }
    } else {
        if (genero) {
            mediaFiltrada = (media.filter(dato => ((dato.id_genero === genero)) && ((dato.titulo.toLowerCase().includes(textoBuscar.toLowerCase())) || (dato.sinopsis.toLowerCase().includes(textoBuscar.toLowerCase())))));
        } else {
            mediaFiltrada = (media.filter(dato => ((dato.titulo.toLowerCase().includes(textoBuscar.toLowerCase())) || (dato.sinopsis.toLowerCase().includes(textoBuscar.toLowerCase())))));
        }
    }

    const [confirmacionVisible, setConfirmacionVisible] = useState(null);

    const mostrarConfirmacion = (id) => {
        setConfirmacionVisible(id);
    };

    const ocultarConfirmacion = () => {
        setConfirmacionVisible(null);
        window.location.reload();
    };

    const filtraEliminarMedia = (id) => {
        // Filtra la película/serie donde se hizo click en eliminar
        setMedia((media) => media.filter((dato) => dato.id == id));
        // Muestra la solicitud de confirmación solo para esa pelicula/serie
        mostrarConfirmacion(id);
    };

    const enviarSolicitudEliminacion = (id) => {
        try {
            fetch(`${url}${id}`,
                {
                    method: "DELETE",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Error al eliminar el elemento');
                    }
                    window.location.reload();
                    setConfirmacionVisible(null);
                })
                .catch(err => { console.log(err); });
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='contiene-lista'>
            <ul>
                {mediaFiltrada.map((dato) => (
                    <li className='titulo-dato' key={dato.id}>
                        <div className='contiene-dato sombra'>
                            <img className='imagen-dato' src={dato.imagen} />
                            <div className='contiene-titulo-sinopsis' >
                                <p className='titulo'>{dato.titulo} <span className='tipo'>({dato.tipo})</span> </p>
                                <p >{dato.sinopsis}</p>
                                <div>
                                    {confirmacionVisible && (
                                        <div className="modal">
                                            <p>¿Estás seguro de que deseas eliminar?</p>
                                            <button className='boton tooltip' ><img src={process.env.PUBLIC_URL + 'si.png'} key={dato.id} onClick={() => { enviarSolicitudEliminacion(dato.id) }}></img><span className="tooltiptext">Sí</span></button>
                                            <button className='boton tooltip'><img src={process.env.PUBLIC_URL + 'no.png'} key={dato.id} onClick={ocultarConfirmacion}></img><span className="tooltiptext">No</span></button>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className='contiene-button'>
                                <div className='tooltip'>
                                    {botonPlay && <Link to={`/reproductor/${dato.id}`} ><button className='boton'><img src={process.env.PUBLIC_URL + '/img/play.png'} key={dato.id} ></img> <span class="tooltiptext">Reproducir</span> </button></Link>}
                                </div>
                                <div className='tooltip'>
                                    {botonEditar && <Link to={`/editar/${dato.id}`} id={dato.id}><button className='boton'><img src={process.env.PUBLIC_URL + '/img/editar.png'} key={dato.id}></img> <span className="tooltiptext">Editar</span> </button></Link>}
                                </div>
                                <div className='tooltip'>
                                    {botonEliminar && <button className='boton'><img src={process.env.PUBLIC_URL + '/img/eliminar.png'} key={dato.id} onClick={() => { filtraEliminarMedia(dato.id) }} ></img> <span className="tooltiptext">Eliminar</span> </button>}
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
};