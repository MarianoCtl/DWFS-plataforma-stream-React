import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import './carousel.css'
const Carousel = ({tipo,genero}) => {
   
    const capitalizarPrimeraLetra=()=>{ 
        if(""+tipo!=='series'&&""+tipo!=='peliculas'){
            switch(genero){
                case 1:
                    return 'Series y Peliculas de Accion';
                break;
                case 2:
                    return 'Series y Peliculas de Terror';
                break;
                case 3:
                    return 'Series y Peliculas de Romance';
                break;
                 case 4:
                    return 'Series y Peliculas de Comedia';
                break;
                default:     
                  return 'Todas las Series y Peliculas';
            }
        }
        const tipo1=""+tipo;
        const tipoCapitalizado= tipo1.charAt(0).toUpperCase() + tipo1.slice(1);
        switch(genero){
            case 1:
            return `${tipoCapitalizado} de Accion`;
        break;
        case 2:
            return `${tipoCapitalizado} de Terror`;
        break;
        case 3:
            return `${tipoCapitalizado} de Romance`;
        break;
         case 4:
            return `${tipoCapitalizado} de Comedia`;
        break;
        default:     
          return `Todas las ${tipoCapitalizado}`;
        }
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
            let dato;
            switch(genero){
                case 1:
                    dato = movies.filter(elemento => elemento.tipo === "pelicula");
                    datosFiltrados = dato.filter(elemento => elemento.id_genero === genero);
                    console.log(datosFiltrados)  
                break;
                case 2:
                    dato = movies.filter(elemento => elemento.tipo === "pelicula");
                    datosFiltrados = dato.filter(elemento => elemento.id_genero === genero);
                    console.log(datosFiltrados)  
                break;
                case 3:
                    dato = movies.filter(elemento => elemento.tipo === "pelicula");
                    datosFiltrados = dato.filter(elemento => elemento.id_genero === genero);
                    console.log(datosFiltrados)  
                break;
                case 4:
                    dato = movies.filter(elemento => elemento.tipo === "pelicula");
                    datosFiltrados = dato.filter(elemento => elemento.id_genero === genero);
                    console.log(datosFiltrados)  
                break;
                default:
                datosFiltrados = movies.filter(elemento => elemento.tipo === "pelicula");
                console.log(datosFiltrados)
            }
        } else if (tipo === "series") { 
            let dato;
            switch(genero){
                case 1:
                    dato = movies.filter(elemento => elemento.tipo === "serie");
                    datosFiltrados = dato.filter(elemento => elemento.id_genero === genero);
                    console.log(datosFiltrados)  
                break;
                case 2:
                    dato = movies.filter(elemento => elemento.tipo === "serie");
                    datosFiltrados = dato.filter(elemento => elemento.id_genero === genero);
                    console.log(datosFiltrados)  
                break;
                case 3:
                    dato = movies.filter(elemento => elemento.tipo === "serie");
                    datosFiltrados = dato.filter(elemento => elemento.id_genero === genero);
                    console.log(datosFiltrados)  
                break;
                case 4:
                    dato = movies.filter(elemento => elemento.tipo === "serie");
                    datosFiltrados = dato.filter(elemento => elemento.id_genero === genero);
                    console.log(datosFiltrados)  
                break;
                default:
                datosFiltrados = movies.filter(elemento => elemento.tipo === "serie");
                console.log(datosFiltrados)
            }
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
      <a className="prevCarrousel" onClick={prevMovie}>❮</a>
      <a className="nextCarrousel" onClick={nextMovie}>❯</a>
    </div>
  );
};

export default Carousel;




