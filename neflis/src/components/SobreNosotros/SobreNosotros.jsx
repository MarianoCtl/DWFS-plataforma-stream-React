import React from 'react'
import "./SobreNosotros.css"

function SobreNosotros() {
    return (
        <div className='contenedor'>
            <div className='ContenedorSobreNosotros parentSobreNosotros' >
                <header className='bienvenidoSobreNosotros'>
                    <h1 className='bienvenido'>Bienvenido a <img src={process.env.PUBLIC_URL + "logo.png"} alt="" /></h1>
                </header>

                <section className='sobreNosotros bordeSobreNosotros'>
                    <h1>Sobre Nosotros</h1>
                    <p>En <em>Neflis</em>, estamos apasionados por el mundo del cine y la televisión. Somos un equipo de entusiastas dedicados a proporcionar a nuestros usuarios la mejor experiencia en línea para descubrir, explorar y disfrutar de una amplia variedad de películas y series.</p>
                </section>

                <section className='nuestraMisionSobreNosotros bordeSobreNosotros'>
                    <h2>Nuestra Misión</h2>
                    <p>Nuestra misión es simple pero poderosa: queremos acercarte a las historias que amas y a aquellas que aún no has descubierto. Creemos que el cine y la televisión tienen el poder de inspirar, entretener y conectar a las personas, y estamos comprometidos a facilitar el acceso a estos momentos mágicos.</p>
                </section>

                <section className='ofrecemosSobreNosotros bordeSobreNosotros'>
                    <h2>Lo que Ofrecemos</h2>
                    <p>En <em>Neflis</em>, ofrecemos una extensa biblioteca de películas y series cuidadosamente seleccionadas para satisfacer todos los gustos y géneros. Desde clásicos atemporales hasta las últimas novedades, nos esforzamos por mantener nuestra colección actualizada y diversa.</p>
                </section>

                <section className='elegirnosSobreNosotros bordeSobreNosotros'>
                    <h2>¿Por Qué Elegirnos?</h2>
                    <ul>
                        <li><strong>Variedad:</strong> Contamos con una amplia gama de películas y series para todos los gustos.</li>
                        <li><strong>Facilidad de Uso:</strong> Hemos diseñado nuestra plataforma pensando en ti.</li>
                        <li><strong>Calidad:</strong> Nos preocupamos por la calidad de la experiencia de visualización.</li>
                        <li><strong>Recomendaciones Personalizadas:</strong> Utilizamos algoritmos avanzados para recomendarte películas y series que se adapten a tus gustos.</li>
                    </ul>
                </section>

                <section className='equipoSobreNosotros bordeSobreNosotros'>
                    <h2>Equipo Apasionado</h2>
                    <p>Detrás de <em>Neflis</em> hay un equipo apasionado de amantes del cine y la televisión. Nos dedicamos a crear y mantener una plataforma que refleje nuestra pasión por las historias bien contadas. Estamos aquí para ayudarte a descubrir nuevas joyas cinematográficas y a redescubrir tus favoritas.</p>
                    <p>Gracias por ser parte de <em>Neflis</em>. ¡Esperamos que disfrutes de la experiencia tanto como nosotros disfrutamos brindándola!</p>
                </section>

                <section className='integrantesSobreNosotros'>
                    <p>¡Disfruta del espectáculo!</p>
                    <p>El Equipo de <em>Neflis</em></p>
                    <ul>
                        <li><strong>Mariano Catalá</strong></li>
                        <li><strong>Juan Pablo Wibaux</strong></li>
                        <li><strong>Franco Beltrán</strong></li>
                        <li><strong>Joaquin Zoppi</strong></li>
                    </ul>
                </section>
        </div>
        </div>

    )
}

export default SobreNosotros