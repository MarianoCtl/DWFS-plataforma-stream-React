import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import './reproductor.css'
import { Link } from 'react-router-dom';
import Botones from '../../components/botones/Botones';
function ReproductorPage() {
  useEffect(() => {
    document.title = 'Reproductor';
  }, []);
  //usuario   
  const [idUser, setIdUser] = useState();

  useEffect(() => {
    const userDataString = sessionStorage.getItem('userData');

    if (userDataString) {
      const userData = JSON.parse(userDataString);
      setIdUser(userData.id);
    }
  }, []);
  //
  const URL_API_media = "https://6556206a84b36e3a431f1fb4.mockapi.io/media/";
  const URL_API_Historial = "https://6557b12cbd4bcef8b613125f.mockapi.io/api/v1/historial";
  const { id } = useParams()
  const [media, setMedia] = useState([]);
  const [visto, setVisto] = useState(false);
  const [dataHistorial, setdataHistorial] = useState([]);

  function genero() {
    const genero = parseInt(media.id_genero);
    switch (genero) {
      case 1:
        return "Acción";
        break;
      case 2:
        return "Terror";
        break;
      case 3:
        return "Romance";
        break;
      case 4:
        return "Comedia";
        break;
    }
  }
  useEffect(() => {
    const fetchContenido = async () => {
      try {
        const response = await fetch(URL_API_media + id);
        const jsonData = await response.json();
        setMedia(jsonData);
      } catch (error) {
        console.error('Error fetch:', error);
      }
    };
    fetchContenido();
  }, []);

  useEffect(() => {
    const fetchGETHistorial = async () => {
      try {
        const getData = await fetch(`${URL_API_Historial}?id_usuario=${idUser}`);
        const jsonData = await getData.json();
        setdataHistorial(jsonData);
      } catch (error) {
        console.error('Error fetch:', error);
      }
    };
    fetchGETHistorial();
  }, [idUser]);

  useEffect(() => {
    if (media != undefined) {
      const verificarMedia = dataHistorial.some(item => item.id_peliculaSerie.toString() == id.toString());//si  la vio
      if (verificarMedia) {
        setVisto(true);
      }
    }
  }, [dataHistorial]);

  const guardarVisto = () => {
    const registroVisto = {
      id_usuario: idUser,
      id_peliculaSerie: id,
    };
    fetch(URL_API_Historial, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(registroVisto),//aca se agrega los cambios
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(
            'Error al traer los datos' + response.status
          );
        }
      })
      .then(data =>
        window.location.reload()
      )
      .catch(error => {
        console.error('Error fetch:', error);
      });
  }
  return (
    <>
      <div className='infoContenido'>
        <div className='boxContenido'>
          <h1 className='tituloContenido'>{media.titulo} {visto ? "(VISTA)" : false}</h1>
          <p><span className='descripcion'>Audio:</span>audio-latino</p>
          <div>
            <Link to={`/${media.tipo}s`} className='tagInfo active'>{media.tipo}</Link>
            <Link to={`/media/${media.tipo}/${media.id_genero}`} className='tagInfo'>{genero()}</Link>
            <Link to={`/media/${media.tipo}/${media.id_genero}`} className='tagInfo'>{`serie/${genero()}`}</Link>
          </div>
          <p><span className='descripcion'>Canal:</span>Neflis</p>
          <p><span className='descripcion'>{media.tipo == "serie" ? `Temporadas:` : "Duracion"}</span>{media.tipo == "serie" ? `${Math.floor(Math.random() * 6 + 1)}` : "147 minutos."}</p>
          <p><span className='descripcion'>Sinopsis:</span>{media.sinopsis}</p>
          {visto === false && (
            <>
              <button className='btnVisto' onClick={guardarVisto} >MARCAR VISTO</button>
            </>
          )}
        </div>
        <div>
          <img className='imagenContenido' src={`${media.imagen}`} />
        </div>
      </div>
      <div className='reproductorMedia'>
        <div className='contenedor-video'>
          <h4 id="textMedia">{media.tipo == "serie" ? "Episodio 1 Temporada 1" : ""}</h4>
          <iframe id='video' width="1000" height="562" src="https://www.youtube.com/embed/JQ6XNQFrGlk?si=lZsJ-vbKOmriMk0l?controls=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        {media.tipo == "serie" ? <Botones /> : ""}
      </div>
    </>
  )
}
export default ReproductorPage;