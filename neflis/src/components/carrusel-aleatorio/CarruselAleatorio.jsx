import React, { useState, useEffect } from 'react';
import "./carruselAleatorio.css";

function CarruselAleatorio({ tipo }) {
    const URL_API_media = "https://6556206a84b36e3a431f1fb4.mockapi.io/media";
    const [data, setData] = useState([]);
    const [elementosAleatorios, setElementosAleatorios] = useState([]);
    const [slideIndex, setSlideIndex] = useState(1);

    useEffect(() => {
        //Trae las películas y series de la API
        const fetchData = async () => {
            try {
                const response = await fetch(URL_API_media);
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error('Error fetch:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        // Comprueba que haya datos en el data y que elementosAleatorios esté vacío
        if (data.length > 0 && elementosAleatorios.length === 0) {
            //Filtra si corresponde a películas y series o solo a una
            let datosFiltrados = data;
            if (tipo === "peliculas") {
                datosFiltrados = data.filter(elemento => elemento.tipo === "pelicula");
            } else if (tipo === "series") {
                datosFiltrados = data.filter(elemento => elemento.tipo === "serie");
            }
            // Mezcla los datos
            const datosMezclados = datosFiltrados.sort(() => Math.random() - 0.5);
            // Selecciona los primeros 3 elementos
            const primerosTresElementos = datosMezclados.slice(0, 3);

            setElementosAleatorios(primerosTresElementos);
        }
    }, [tipo, data]);

    useEffect(() => {
        showSlides();
    }, [slideIndex, elementosAleatorios]);

    const prevNextSlides = (n) => {
        // Función de los botones prev y next
        setSlideIndex((prevIndex) => {
            let nuevoIndice = prevIndex + n;
            if (nuevoIndice >= elementosAleatorios.length) {
                return 0; // Manda al primer elemento desde el último
            }
            if (nuevoIndice < 0) {
                return elementosAleatorios.length - 1; // Manda al último elemento desde el primero
            }
            return nuevoIndice;
        });
    };

    const showSlides = () => {
        // Actualiza las clases dependiendo del índice actual
        const slides = document.querySelectorAll('.mySlides');
        slides.forEach((slide, index) => {
            slide.classList.toggle('visible', index === slideIndex);
            slide.classList.toggle('oculto', index !== slideIndex);
        });
    };


    return (
        <div className='contenedor-carrusel sombra'>
            <div className="slideshow-container">
                {elementosAleatorios.map((elemento, index) => (
                    <div key={index} className="mySlides fade">
                        <div className='d-flex'>
                            <div className='contenedor-img'>
                                <img className='media-img' src={elemento.imagen} alt={`portada de ${elemento.titulo}`} />
                            </div>
                            <div className='contenedor-info'>
                                <div className="titulo">{elemento.titulo}</div>
                                <div className="sinopsis">{elemento.sipnosis}</div>
                                <div className="tipo">{elemento.tipo.toUpperCase()}</div>
                                <button className='btn-ver sombra'>Ver</button>
                            </div>
                        </div>
                    </div>
                ))}

                <a className="prev" onClick={() => prevNextSlides(-1)}>❮</a>
                <a className="next" onClick={() => prevNextSlides(1)}>❯</a>

            </div>
        </div>
    )
}

export default CarruselAleatorio