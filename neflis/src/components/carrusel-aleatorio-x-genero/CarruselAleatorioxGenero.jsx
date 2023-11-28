import React, { useState, useEffect } from 'react';
import "./carruselAleatorioxGenero.css";

function CarruselAleatorioxGenero({ tipo, genero }) {
  const URL_API_media = "https://6556206a84b36e3a431f1fb4.mockapi.io/media";
  const [dataxGenero, setDataxGenero] = useState([]);
  const [elementosAleatoriosxGenero, setElementosAleatoriosxGenero] = useState([]);
  const [slideIndexxGenero, setSlideIndexxGenero] = useState(1);

  useEffect(() => {
    const fetchDataxGenero = async () => {
      try {
        const response = await fetch(URL_API_media);
        const jsonData = await response.json();
        setDataxGenero(jsonData);
      } catch (error) {
        console.error('Error fetch:', error);
      }
    };

    fetchDataxGenero();
  }, []);

  useEffect(() => {
    if (dataxGenero.length > 0 && elementosAleatoriosxGenero.length === 0) {
      let datosFiltrados = dataxGenero.filter(elemento => elemento.id_genero == genero);

      if (tipo === "peliculas") {
        datosFiltrados = dataxGenero.filter(elemento => elemento.tipo === "pelicula");
      } else if (tipo === "series") {
        datosFiltrados = dataxGenero.filter(elemento => elemento.tipo === "serie");
      }

      const datosMezclados = datosFiltrados.sort(() => Math.random() - 0.5);
      const primerosTresElementos = datosMezclados.slice(0, 9);

      setElementosAleatoriosxGenero(primerosTresElementos);
    }
  }, [tipo, genero, dataxGenero]);

  useEffect(() => {
    showSlidesxGenero();
  }, [slideIndexxGenero, elementosAleatoriosxGenero]);

  const prevNextSlidesxGenero = (n) => {
    setSlideIndexxGenero((prevIndex) => {
      let nuevoIndice = prevIndex + n;
      if (nuevoIndice >= 3) {
        return 0; // Manda al primer elemento desde el último
      }
      if (nuevoIndice < 0) {
        return 3; // Manda al último elemento desde el primero
      }
      return nuevoIndice;
    });
  };

  const showSlidesxGenero = () => {
    const slidesxGenero = document.querySelectorAll(`.mySlides-${genero}`);
    slidesxGenero.forEach((slidexGenero, index) => {
      slidexGenero.classList.toggle('visible', index === slideIndexxGenero);
      slidexGenero.classList.toggle('oculto', index !== slideIndexxGenero);
    });
  };

  return (
    <div className='contenedor-carrusel sombra'>
      <div className="slideshow-container">
        {Array.from({ length: Math.ceil(elementosAleatoriosxGenero.length / 3) }).map((_, slideIndex) => (
          <div key={slideIndex} className={`mySlidesxGenero fade mySlides-${elementosAleatoriosxGenero[0]?.id_genero}`}>
            <div className='d-flex'>
              {elementosAleatoriosxGenero.slice(slideIndex * 3, slideIndex * 3 + 3).map((elementoxGenero, indexxGenero) => (
                <div key={indexxGenero} className='contenedor-img'>
                  <img className='media-img img-zoom' src={elementoxGenero.imagen} alt={`portada de ${elementoxGenero.titulo}`} />
                </div>
              ))}
            </div>
          </div>
        ))}

        <a className="prev" onClick={() => prevNextSlidesxGenero(-1)}>❮</a>
        <a className="next" onClick={() => prevNextSlidesxGenero(1)}>❯</a>
      </div>
    </div>
  );
}

export default CarruselAleatorioxGenero