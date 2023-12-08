import React, { useState, useEffect } from 'react'
import CarruselAleatorio from '../../components/carrusel-aleatorio/CarruselAleatorio';
import CarruselAleatorioxGenero from '../../components/carrusel-aleatorio-x-genero/CarruselAleatorioxGenero';
import "./inicioPage.css";
import '../../index.css';

function InicioPage() {
  useEffect(() => {
    document.title = 'Inicio';
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
      <CarruselAleatorio />
      <div>
        {data.map((elemento, index) => (
          <div key={index} className="contenedor-por-genero">
            <h3 className="genero">Series y Películas de {elemento.Generos}</h3>
            {data.length > 0 && <CarruselAleatorioxGenero key={elemento.id} genero={elemento.id} />}
          </div>
        ))}
      </div>
    </div>
  )
}
export default InicioPage;