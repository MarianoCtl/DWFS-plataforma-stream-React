import React from "react";
import '../footer/Footer.css';
import { Link } from "react-router-dom";


function Footer(){
    return(        
        <div className="contenedor-footer">            
            <p className='tamanioFooter cssResponsive'><Link to='/sobre-nosotros' className="efectoLink">Sobre Nosotros</Link></p>
            <p className='tamanioFooter cssResponsive'><Link to='/contacto' className="efectoLink">Contacto</Link></p>
            <p className='tamanioFooter cssResponsive' >Desarrollado por Grupo 1</p>
        </div>        
    );
}
export default Footer;