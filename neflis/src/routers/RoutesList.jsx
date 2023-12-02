import React from 'react'
import {Routes,Route} from 'react-router-dom';

import InicioPage from '../pages/inicio/InicioPage'
import PeliculasPage from '../pages/peliculas/PeliculasPage'
import BuscarPage from '../pages/buscar/BuscarPage'
import ContactoPage from '../pages/contacto/ContactoPage'
import IngresarPage from '../pages/ingresar/IngresarPage'
import RegistroPage from '../pages/registro/RegistroPage'
import ReproductorPage from '../pages/reproductor/ReproductorPage'
import SeriesPage from '../pages/series/SeriesPage'
import SobreNosotrosPage from '../pages/sobre-nosotros/SobreNosotrosPage'
import MediaGenero from '../pages/media-genero/MediaGenero';
function RoutesList() {
  return (
    <>
        <Routes>
          <Route path='/' element={<InicioPage/>}>Este es el inicio</Route>
          <Route path='/peliculas' element={<PeliculasPage/>}>Este es el peliculas</Route>
          <Route path='/buscar' element={<BuscarPage/>}>Este es el buscar</Route>
          <Route path='/contacto' element={<ContactoPage/>}>Este es el peliculas</Route>
          <Route path='/ingresar' element={<IngresarPage/>}>Este es el inicio</Route>
          <Route path='/registro' element={<RegistroPage/>}>Este es el peliculas</Route>
          <Route path='/reproductor' element={<ReproductorPage/>}>Este es el inicio</Route>
          <Route path='/series' element={<SeriesPage/>}>Este es el peliculas</Route>
          <Route path='/sobre-nosotros' element={<SobreNosotrosPage/>}>Este es sobre-nosotros</Route>
          <Route path='/media/:tipo/:genero' element={<MediaGenero/>}>Este es media genero</Route>
        </Routes>
    </>
  )
}
export default RoutesList