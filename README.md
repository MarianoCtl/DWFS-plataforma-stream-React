### NEFLIS - Descubre, Explora y Disfruta del Mundo del Cine y la Televisión

#### Descripción:
Somos una plataforma dedicada a ofrecerte una amplia variedad de películas y series. En Neflis, nos esforzamos por proporcionar una experiencia fácil de usar y de alta calidad.

#### Requisitos previos:
- Node.js
- IDE (para ejecutar el proyecto e instalar los módulos necesarios. Ej: VS Code)
- Navegador web.

#### Instrucciones de instalación y ejecución:
Una vez clonado o descargado el repositorio, abre tu IDE de preferencia y ejecuta los siguientes comandos en la consola:
```
npm install
npm start
```
El primer comando instalará los módulos necesarios para que funcione la aplicación, mientras que el segundo la ejecutará a nivel local para poder interactuar con la misma.

#### Recursos externos:
Para el funcionamiento del proyecto, generamos diferentes APIs:
- API de contenido multimedia: [Enlace](https://6556206a84b36e3a431f1fb4.mockapi.io/media)
- API de géneros: [Enlace](https://65565a1684b36e3a431f9f30.mockapi.io/api/v1/Generos)
- API de usuarios: [Enlace](https://6555830984b36e3a431ddb6b.mockapi.io/api/users)
- API de contacto: [Enlace](https://6556cdfabd4bcef8b611a1c2.mockapi.io/Api/contacto)
- API de historial: [Enlace](6557b12cbd4bcef8b613125f.mockapi.io/api/v1/historial)

#### Uso del proyecto:
En la **Página Principal**, se presenta un listado aleatorio del contenido disponible en el sitio. Puede explorar el contenido a través de carruseles y participar de forma interactiva. Es importante destacar que la visualización de películas o series requiere autenticación; por lo tanto, es necesario estar logueado como usuario para acceder a este contenido.

En el **encabezado**, se ofrece la posibilidad de navegar por diferentes secciones, como Películas o Series, que filtran el contenido según su tipo. Asimismo, se proporciona un buscador con diversas opciones. Por último, se encuentra el botón de ingresar, que permite iniciar sesión tanto para un usuario normal (televidente) como para un usuario administrativo.

En el **pie de página**, se dividen las secciones en dos partes. La primera, "Sobre nosotros", brinda una breve descripción del sitio, incluyendo nuestra misión, lo que ofrecemos y una presentación del equipo. La segunda sección, "Contacto", dispone de un formulario que facilita el envío de mensajes. Este formulario contiene campos obligatorios como nombre, correo electrónico o número de celular, y el mensaje en sí.

#### Ingresar:
Para iniciar sesión, completa el email y la contraseña. Por defecto, estos son los usuarios creados:
- **Admin:**
  - email: mariano@mail.com, contraseña: 12345
  - email: juan@mail.com, contraseña: 12345
  - email: franco@mail.com, contraseña: 12345
  - email: joaquin@mail.com, contraseña: 12345
  - email: sofia@mail.com, contraseña: 12345
- **Televidente:**
  - email: jose@mail.com, contraseña: 12345
  - email: patricio@mail.com, contraseña: 12345
  - email: daniela@mail.com, contraseña: 12345
  - email: lucia@mail.com, contraseña: 12345
  - email: mario@mail.com, contraseña: 12345
  - email: tomas@mail.com, contraseña: 12345
  - email: patricia@mail.com, contraseña: 12345
  - email: daniel@mail.com, contraseña: 12345
  - email: luciano@mail.com, contraseña: 12345

Cuando se accede como **administrador**, se visualiza un listado de películas y series, con opciones para buscar y filtrar el contenido. Se proporcionan botones para modificar o eliminar elementos de la grilla. Además, se incluye un centro de mensajería donde se listan los mensajes recibidos a través de la sección de contacto, ordenados cronológicamente del más reciente al más antiguo. Por último, se encuentra el botón de "Nueva película o serie", que despliega un formulario para agregar contenido al sitio.

Los usuarios logueados como **televidentes** tienen acceso a la grilla completa de películas y series, con la capacidad de reproducirlas. También disponen de un botón para marcar como visto, lo que registra el contenido en su historial personal.

#### Conclusiones:
Hemos aplicado con éxito los principios de metodologías ágiles en nuestro trabajo. La adaptación al trabajo en equipo fue fundamental, participando activamente en debates para obtener los mejores resultados posibles. La implementación de React no se limitó al contenido en clase; también requirió una investigación exhaustiva para abordar las tareas asignadas de manera eficiente.

La estructura visual proporcionada por Trello desempeñó un papel crucial al mejorar el desarrollo de cada tarea sin afectar la armonía del equipo. Aprendimos a priorizar tareas y a descartar opciones basándonos en su complejidad o la limitación de tiempo para su desarrollo. La utilización de Git con múltiples colaboradores presentó desafíos que superamos de manera conjunta.

A pesar de que la planilla de dailies a nivel grupal no resultó tan ventajosa como esperábamos, ya que priorizamos el uso de Trello para tener un seguimiento constante del estado de las tareas, reconocemos su utilidad en proyectos más extensos o para analizar retrospectivamente las contribuciones individuales.

En resumen, consideramos que esta experiencia ha sido sumamente enriquecedora, impulsándonos no solo en aspectos de programación sino también en el ámbito de la organización.
