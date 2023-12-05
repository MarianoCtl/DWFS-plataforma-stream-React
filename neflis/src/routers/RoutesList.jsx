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
function RoutesList() {
  return (
    <>
        <Routes>
          <Route path='/' element={<InicioPage/>}>Inicio</Route>
          <Route path='/peliculas' element={<PeliculasPage/>}>Películas</Route>
          <Route path='/buscar' element={<BuscarPage/>}>Buscar</Route>
          <Route path='/contacto' element={<ContactoPage/>}>Contacto</Route>
          <Route path='/ingresar' element={<IngresarPage/>}>Ingresar</Route>
          <Route path='/registro' element={<RegistroPage/>}>Registrarse</Route>
          <Route path='/reproductor' element={<ReproductorPage/>}>Reproductor</Route>
          <Route path='/series' element={<SeriesPage/>}>Series</Route>
          <Route path='/sobre-nosotros' element={<SobreNosotrosPage/>}>Sobre nosotros</Route>
        </Routes>
    </>
  )
}
export default RoutesList