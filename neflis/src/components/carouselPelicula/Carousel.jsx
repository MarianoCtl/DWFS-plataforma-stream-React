import React,{useEffect,useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css"
const Carousel=()=>{
    const [dato,setDato]=useState([]);
    const [elementosAleatorios, setElementosAleatorios] = useState([]);
    useEffect(()=>{
        //console.log("useEffect accion");//solo para ver cada cuanto tiempo funciona
        obtenerDatos();
    },[])//se deja ",[]" para que se ejecute una vez
    const obtenerDatos=async()=>{
        const data=await fetch("https://6557b12cbd4bcef8b613125f.mockapi.io/api/v1/peliculas");
        const jsonData=await data.json();
        //console.log(peliculas);
        setDato(jsonData);
    }
    useEffect(() => {
        // Comprueba que haya datos en el data y que elementosAleatorios esté vacío
        if (dato.length > 0 ) {
            //Filtra si corresponde a películas y series o solo a una
            let datosFiltrados =  dato.filter(elemento => elemento.tipo === "pelicula");
            // Selecciona los primeros 3 elementos
            const veinteElementos = datosFiltrados.slice(0,18);

            setElementosAleatorios(veinteElementos);
            console.log(elementosAleatorios)
        }
    }, [ dato]);
    const settings ={
        dots:false,//para que no se vean los puntos 
        infinite:false,
        speed:1000,
        slidesToScroll:4,
        slidesToShow:4,
        responsive: [
            {
                breakpoint:1024,
                settings:{
                    slidesToShow:2,
                    slidesToScroll: 1,
                    infinite:true,
                    dots:true,
                },
            },
            {
                breakpoint:600,
                settings:{
                    slidesToShow:1,
                    slidesToScroll:1,
                    initialSlide:1,
                },
            },
        ],
    };
    return(
        <>
        <h1 className="contenido">Peliculas</h1>
        <Slider {...settings}>
            {elementosAleatorios.map(pelicula=>(
                <div key={pelicula.id} className="peliculas">
                    <img src={pelicula.imagen} alt={pelicula.titulo} />
                    <h3>{pelicula.titulo}</h3>
                </div>
            ))}
        </Slider>
        </>
        
    )

} 
export default Carousel;