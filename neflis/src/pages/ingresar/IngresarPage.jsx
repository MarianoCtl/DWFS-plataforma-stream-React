import React, { useEffect } from 'react'
import Login from '../../components/login/Login'
import '../../index.css';

function IngresarPage() {
  useEffect(()=>{
      document.title = 'Ingresar';
  });
  return (
    <div className='fija-footer'>
      <Login />
    </div>
  )
}
export default IngresarPage