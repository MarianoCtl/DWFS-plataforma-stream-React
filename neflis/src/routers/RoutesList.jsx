import React from 'react'
import {Routes,Route} from 'react-router-dom';

import InicioPage from '../pages/inicio/InicioPage'
import PeliculasPage from '../pages/peliculas/PeliculasPage'
import BuscarPage from '../pages/buscar/BuscarPage'
import ContactoPage from '../pages/contacto/ContactoPage'
import MensajesPage from '../pages/contacto/MensajesPage'
import IngresarPage from '../pages/ingresar/IngresarPage'
import ReproductorPage from '../pages/reproductor/ReproductorPage'
import SeriesPage from '../pages/series/SeriesPage'
import SobreNosotrosPage from '../pages/sobre-nosotros/SobreNosotrosPage'
import InicioAdminPage from '../pages/inicio-admin/InicioAdminPage'
import NuevaPage from '../pages/nueva/NuevaPage'
import EditarPage from '../pages/editar/EditarPage'
import MediaGenero from '../pages/media-genero/MediaGeneroPage';

function RoutesList() {
  return (
    <>
        <Routes>
          <Route path='/' element={<InicioPage/>}>Inicio</Route>
          <Route path='/peliculas' element={<PeliculasPage/>}>Películas</Route>
          <Route path='/buscar' element={<BuscarPage/>}>Buscar</Route>
          <Route path='/contacto' element={<ContactoPage/>}>Contacto</Route>
          <Route path='/ingresar' element={<IngresarPage/>}>Ingresar</Route>
          <Route path='/reproductor/:id' element={<ReproductorPage/>}>Reproductor</Route>
          <Route path='/series' element={<SeriesPage/>}>Series</Route>
          <Route path='/sobre-nosotros' element={<SobreNosotrosPage/>}>Sobre nosotros</Route>
          <Route path='/admin' element={<InicioAdminPage/>}>Inicio administración</Route>
          <Route path='/nueva' element={<NuevaPage/>}>Nueva serie o película</Route>
          <Route path='/editar/:id' element={<EditarPage/>}>Modificar serie o película</Route>
          <Route path='/mensajes' element={<MensajesPage/>}>Centro de mensajería</Route>
          <Route path='/media/:tipo/:genero' element={<MediaGenero/>}>Tipo y genero</Route>
        </Routes>
    </>
  )
}
export default RoutesList