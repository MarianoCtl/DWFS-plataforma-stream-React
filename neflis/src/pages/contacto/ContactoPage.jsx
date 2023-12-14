import React, { useEffect } from 'react';
import Contacto from '../../components/contacto/Contacto';
import './contactoPage.css';
import '../../index.css';


function ContactoPage() {
  useEffect(() => {
    document.title = 'Contacto';
  });
  return (
    <div className='contiene-contacto fija-footer'>
      <Contacto />
    </div>
  )
}
export default ContactoPage