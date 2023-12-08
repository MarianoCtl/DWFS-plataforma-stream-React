import React, { useEffect } from 'react';
import SobreNosotros from '../../components/SobreNosotros/SobreNosotros';
import '../../index.css';

function SobreNosotrosPage() {
  useEffect(() => {
    document.title = 'Sobre nosotros';
  });
  return (
    <div className='fija-footer'>
      <SobreNosotros />
    </div>
  )
}
export default SobreNosotrosPage