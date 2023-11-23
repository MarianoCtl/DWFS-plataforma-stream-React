import React from "react";
import '../footer/Footer.css';
import { Link } from "react-router-dom";


function Footer(){
    return(        
            <div className="contenedor-footer">            
                <p className='tamanioFooter'><Link to='/sobre-nosotros'>Sobre Nosotros</Link></p>
                <p className='tamanioFooter'><Link to='/contacto'>Contacto</Link></p>
                <p className='tamanioFooter' >Desarrollado por Grupo 1</p>
            </div>        
    );
}
export default Footer;