import React, { useState, useEffect } from 'react'
import CarruselAleatorio from '../../components/carrusel-aleatorio/CarruselAleatorio';
import CarruselAleatorioxGenero from '../../components/carrusel-aleatorio-x-genero/CarruselAleatorioxGenero';
import "../inicio/inicioPage.css";
import { Link } from 'react-router-dom';
import '../../index.css';

function SeriesPage() {
  useEffect(() => {
    document.title = 'Series';
  });
  const URL_API_generos = "https://65565a1684b36e3a431f9f30.mockapi.io/api/v1/Generos";
  const [data, setData] = useState([]);

  useEffect(() => {
    //Trae los géneros de la API
    const fetchData = async () => {
      try {
        const response = await fetch(URL_API_generos);
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetch:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className='fija-footer'>
      <CarruselAleatorio tipo={"series"} />
      <div>
        {data.map((elemento, index) => (
          <div key={index} className="contenedor-por-genero">
            <h3 className="genero">Series de {elemento.Generos}<Link to={`/media/serie/${elemento.id}`}>Ver mas...</Link></h3>
            {data.length > 0 && <CarruselAleatorioxGenero tipo={"series"} key={elemento.id} genero={elemento.id} />}
          </div>
        ))}
      </div>
    </div>
  )
}
export default SeriesPage;