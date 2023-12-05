import React, {useState} from 'react';
import "./Login.css"

function Login() {
  const url = ("https://6555830984b36e3a431ddb6b.mockapi.io/api/users");

  const [userEmail, setUserEmail] = useState('');
  const [password, setPassword] = useState(''); 

  const handleLogin = async () => {
    try {
      const response = await fetch(url);

      if (response.ok) {
        const users = await response.json();

        const user = users.find((u) => u.mail === userEmail);

        if (user) {
          if (user.contrasena === password) {
            sessionStorage.setItem('userData', JSON.stringify({
              nombre: user.nombre,
              apellido: user.apellido,
              rol: user.rol,
              id: user.id,
            }));
            if (user.rol === "Admin") {
              window.location.href = '/inicio/admin';
            }else{
              window.location.href = '/';
            }
          } else {
            console.error('Contraseña y/o Usuario incorrectos');
          }
        } else {
          console.error('Contraseña y/o Usuario incorrectos');
        }
      } else {
        console.error('Error al conectar');
      }
    } catch (error) {
      console.error('Error de red', error);
    }
  };



  return (
    <div className='contenedorLogin'>
    <div className='iniciarSesion parentLogin'>
      <h2 className='etiquetaIniciarSesion'>Iniciar sesión</h2>
    </div>
    <form>
    <div className='emailPassword'>
      <label className='etiquetaLogin' for='emailLogin' >Email</label>
        <input type="text" name="email" className="emailLogin" value={userEmail} onChange={(e) => setUserEmail(e.target.value)}/>
        <label className='etiquetaLogin' for='passwordLogin' >Contraseña</label>
        <input type="password" name="password" className="passwordLogin" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button type="button" className='btnLogin' onClick={handleLogin} >Ingresar</button>
    </div>
    </form>
  </div>
  )
}

export default Login