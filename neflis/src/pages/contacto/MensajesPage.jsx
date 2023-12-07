import React, { useState, useEffect } from 'react'
import './mensajesPage.css';
import { Link } from 'react-router-dom';

function MensajesPage() {
    const url = 'https://6556cdfabd4bcef8b611a1c2.mockapi.io/Api/contacto';
    const [mensajes, setMensajes] = useState([]);

    useEffect(() => {
        //Trae las películas y series de la API
        const ObtenerMensajes = async () => {
            try {
                const response = await fetch(url);
                const jsonMensajes = await response.json();
                setMensajes(jsonMensajes);


            } catch (error) {
                console.error('Error fetch:', error);
            }
        };

        ObtenerMensajes();
    }, []);

    return (
        <div className='contiene-lista'>
            <div className='d-flex-nueva'>
                <h1 className='titulo-pagina'>Centro de Mesanjería</h1>
                <div className='mr-25'>
                    {<Link to="/admin"><button type="button" className='btnCancelar'>Volver</button></Link>}
                </div>
            </div>
            <ul>
                {mensajes.map((mensaje) => (
                    <li className='lista-mensaje' key={mensaje.id}>
                        <div className='contiene-mensaje sombra'>
                            <div className='contiene-identificacion' >
                                <h3>Nombre y fecha</h3>
                                <p className='parrafo'>{mensaje.nombre} <span className='parrafo'>({mensaje.fecha})</span> </p>
                                <h3>Medio de contacto</h3>
                                <p className='parrafo'>Celular: {mensaje.telefono} <span><p className='parrafo'>Email: {mensaje.mail}</p></span></p>
                            </div>
                            <div className='contiene-mensaje-consulta'>
                                <div className='contiene-titulo-consulta'>
                                    <h3>Consulta</h3>
                                </div>
                                <div className='contiene-consulta'>
                                    <p>{mensaje.consulta}</p>
                                </div>
                            </div>

                        </div>
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default MensajesPage