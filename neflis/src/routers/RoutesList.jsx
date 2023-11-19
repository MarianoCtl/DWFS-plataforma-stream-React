import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Inicio from '../pages/inicio/Inicio'
import Peliculas from '../pages/peliculas/Peliculas'
import Buscar from '../pages/buscar/Buscar'
import Contacto from '../pages/contacto/Contacto'
import Ingresar from '../pages/ingresar/Ingresar'
import Registro from '../pages/registro/Registro'
import Reproductor from '../pages/reproductor/Reproductor'
import Series from '../pages/series/Series'
import SobreNosotros from '../pages/sobre-nosotros/SobreNosotros'
function RoutesList() {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Inicio/>}>Este es el inicio</Route>
          <Route path='/peliculas' element={<Peliculas/>}>Este es el peliculas</Route>
          <Route path='/buscar' element={<Buscar/>}>Este es el buscar</Route>
          <Route path='/contacto' element={<Contacto/>}>Este es el peliculas</Route>
          <Route path='/ingresar' element={<Ingresar/>}>Este es el inicio</Route>
          <Route path='/registro' element={<Registro/>}>Este es el peliculas</Route>
          <Route path='/reproductor' element={<Reproductor/>}>Este es el inicio</Route>
          <Route path='/series' element={<Series/>}>Este es el peliculas</Route>
          <Route path='/sobre-nosotros' element={<SobreNosotros/>}>Este es el inicio</Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default RoutesList