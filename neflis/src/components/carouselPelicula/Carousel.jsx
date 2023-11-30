import React, { useState } from 'react';
import './carousel.css'; // Archivo CSS para estilos

const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    'imagen1.jpg',
    'imagen2.jpg',
    'imagen3.jpg',
    // Agrega aquí las URL o rutas de tus imágenes
  ];

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="carousel">
      <button onClick={prevImage}>›</button>
      <img src={images[currentImage]} alt={`Imagen ${currentImage}`} />
      <img src={images[currentImage]} alt={`Imagen ${currentImage}`} />
      <img src={images[currentImage]} alt={`Imagen ${currentImage}`} />
      <button onClick={nextImage}>›</button>
    </div>
  );
};

export default Carousel;