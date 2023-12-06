import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import './agregaContenido.css';


function AgregaContenido() {
    const URL_API_generos = "https://65565a1684b36e3a431f9f30.mockapi.io/api/v1/Generos";
    const URL_API_media = "https://6556206a84b36e3a431f1fb4.mockapi.io/media";
    const [dataGeneros, setDataGeneros] = useState([]);
    const [values, setValues] = useState({
        tipo: '',
        id_genero: '',
        titulo: '',
        sinopsis: '',
        imagen: '',
    });
    const [notificacion, setNotificacion] = useState('');
    const [alerta, setAlerta] = useState(false);
    const [alertaContenedor, setAlertaContenedor] = useState(false);

    useEffect(() => {
        //Trae los géneros de la API
        const fetchData = async () => {
            try {
                const response = await fetch(URL_API_generos);
                const jsonData = await response.json();
                setDataGeneros(jsonData);
            } catch (error) {
                console.error('Error fetch:', error);
            }
        };

        fetchData();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    }

    const handleAgregar = () => {
        if (values.tipo == '' || values.id_genero == '' || values.titulo == '' || values.sinopsis == '' || values.imagen == '') {
            //Falta algún dato
            setNotificacion(`Debe completar todos los campos para agregar la película o serie.`);
            setAlerta(true);
            setAlertaContenedor(true);
        } else {
            fetch(URL_API_media, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            })
                .then(response => response.json())
                .then(data => {
                    setNotificacion(`La ${values.tipo} se agregó correctamente.`);
                    setAlerta(false);
                    setAlertaContenedor(true);
                    document.getElementById('formularioNueva').reset();
                })
                .catch(error => {
                    // Manejar errores en la solicitud
                    console.error('Error en la solicitud:', error);
                    setNotificacion(`Error al agregar la ${values.tipo}. Por favor, intente nuevamente.`);
                    setAlerta(true);
                    setAlertaContenedor(true);
                });
        }
    };

    return (
        <div className='container'>
            <div className='d-flex-nueva'>
                <h1 className='titulo-pagina'>Nueva serie/película</h1>
                <div className='mr-25'>
                    {<Link to="/admin"><button type="button" className='btnCancelar'>Volver</button></Link>}
                </div>
            </div>
            <div className='container'>
                <div className={`contenedor-notificacion ${alertaContenedor ? 'd-block' : 'd-none'}`}>
                    <div className={`notificacion sombra ${alerta ? 'alerta-warning' : 'alerta-success'}`}>{notificacion}</div>
                </div>
                <form id="formularioNueva">
                    <div className='form-en-linea'>
                        <div className='form-campos'>
                            <label htmlFor="tipo" className='estilo-label'>Tipo:</label>
                            <select name="tipo" className='form-input campo-select sombra' onChange={handleChange} required>
                                <option selected>Seleccione una opción</option>
                                <option value="pelicula">Película</option>
                                <option value="serie">Serie</option>
                            </select>
                        </div>
                        <div className='form-campos'>
                            <label htmlFor="titulo" className='estilo-label'>Título:</label>
                            <input type="text" name="titulo" className='form-input sombra' placeholder='Título de la película/serie' onChange={handleChange} required />
                        </div>
                        <div className='form-campos'>
                            <label htmlFor="id_genero" className='estilo-label'>Género:</label>
                            <select name="id_genero" className='form-input campo-select sombra' onChange={handleChange} required>
                                <option selected>Seleccione una opción</option>
                                {dataGeneros.map((elemento, index) => (
                                    <option key={elemento.id} value={elemento.id}>{elemento.Generos}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className='form-campos'>
                        <label htmlFor="sinopsis" className='estilo-label'>Sinopsis:</label>
                        <textarea name="sinopsis" rows="10" className='form-input sombra' placeholder='Sinopsis de la película/serie' onChange={handleChange} required></textarea>
                    </div>
                    <div className='form-campos'>
                        <label htmlFor="imagen" className='estilo-label'>Imagen:</label>
                        <input type="text" name="imagen" className='form-input sombra' placeholder='URL de la portada' onChange={handleChange} required />
                    </div>
                    <div className='d-flex-end'>
                        <button type='button' className='btnAgregar sombra' onClick={handleAgregar}>Agregar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AgregaContenido