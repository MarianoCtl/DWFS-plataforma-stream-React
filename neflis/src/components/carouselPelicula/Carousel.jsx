import React, { useState,useEffect } from 'react';
import './carousel.css'; // Importa el archivo CSS para estilos
import { Link } from 'react-router-dom';

const Carousel = ({tipo}) => {
   
    const capitalizarPrimeraLetra=()=>{ 
        if(""+tipo!=='series'&&""+tipo!=='peliculas'){
        return 'Series y Peliculas'
        }
        const tipo1=""+tipo;
        return tipo1.charAt(0).toUpperCase() + tipo1.slice(1);
    }
    
  const URL_API_media = "https://6556206a84b36e3a431f1fb4.mockapi.io/media";
  const [movies,setMovies] = useState([
    // ... (tus datos de películas)
  ]);
  const [elementosAleatorios, setElementosAleatorios] = useState([]);
  useEffect(() => {
    //Trae las películas y series de la API
    const fetchData = async () => {
        try {
            const response = await fetch(URL_API_media);
            const jsonData = await response.json();
            setMovies(jsonData);
        } catch (error) {
            console.error('Error fetch:', error);
        }
    };

    fetchData();
}, []);
  const [currentIndex, setCurrentIndex] = useState(0);
  const numVisibleMovies = 4; // Define cuántas películas mostrar a la vez
  useEffect(() => {
    // Comprueba que haya datos en el data y que elementosAleatorios esté vacío
    if (movies.length > 0 && elementosAleatorios.length === 0) {
        console.log("entro en el div")
        //Filtra si corresponde a películas y series o solo a una
        let datosFiltrados = movies;
        if (tipo === "peliculas") {
            datosFiltrados = movies.filter(elemento => elemento.tipo === "pelicula");
            console.log(datosFiltrados)
        } else if (tipo === "series") {
            datosFiltrados = movies.filter(elemento => elemento.tipo === "serie");
            console.log(datosFiltrados)
        }
        // Mezcla los datos
        const datosMezclados = datosFiltrados.sort(() => Math.random() - 0.5);
        setElementosAleatorios(datosMezclados);
    }
}, [tipo, movies]);
  const nextMovie = () => {
    if(currentIndex>=elementosAleatorios.length-4){
        setCurrentIndex(0);
    }
    else{
        setCurrentIndex((currentIndex + 1) % elementosAleatorios.length);

    }
  };

  const prevMovie = () => {
     if(currentIndex<=4){
        setCurrentIndex(elementosAleatorios.length-4);
     }else{
        setCurrentIndex((currentIndex - 1 + movies.length) % elementosAleatorios.length);
     }
  };

  return (
    <div className="carouselImagenes">
    <Link to={`/${tipo}`} className="tituloCarousel">{capitalizarPrimeraLetra()}</Link>
      <div className="contenido">
        {elementosAleatorios.slice(currentIndex, currentIndex + numVisibleMovies).map((movie) => (
          <div key={movie.id} className="divImagen">
            <img src={movie.imagen}  className="imgCarousel"/>
          </div>
        ))}
      </div>
      <a className="prev" onClick={prevMovie}>❮</a>
      <a className="next" onClick={nextMovie}>❯</a>
    </div>
  );
};

export default Carousel;




