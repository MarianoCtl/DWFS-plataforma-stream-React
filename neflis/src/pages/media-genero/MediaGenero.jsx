import React ,{useState}from 'react'
import { useParams} from 'react-router-dom';
import ListaMedia from '../../components/busqueda/ListaMedia';
import '../../components/busqueda/busquedaMedia.css';

export default function MediaGenero() {
    let {tipo,genero}=useParams();//aca trae datos(variables) desde la ruta anterior
  const [textoInputBuscar, setTextoInputBuscar] = useState('');

    //buscador
    const SetearTextoBuscar = (e)=>{
        setTextoInputBuscar(e.target.value);
    }

    const buscarTexto = ()=>{
        setTextoBuscar(textoInputBuscar);
    }
    const [textoBuscar, setTextoBuscar] = useState('');    
    //titulo
    const tipoMedia=()=>{
        if(tipo=="pelicula"){
            return "Peliculas de "
        }
        else if(tipo=="serie"){
            return "Series de "
        }
    }
    const  tipoGenero=()=>{
        switch(genero){
            case "1":
            return "Accion";
            break;
            case "2":
            return "Terror";
            break;
            case "3":
            return "Romance";
            break;
            case "4":
            return "Comedia";
            break;
        }
    }
    return(
    <>        
    <div className="contiene-buscador">        
        <p className="titulo-texto-buscar">{tipoMedia()}{tipoGenero()}</p>
        <div className="contiene-input">
        <input type="text" className = 'texto-buscar' placeholder="Ingrese pelicula o serie a buscar" onChange={SetearTextoBuscar} />
            <div className="tooltip">
            <button className="button-lupa-refresh" ><img src={process.env.PUBLIC_URL + '/buscar.png'} onClick={buscarTexto} ></img> <span class="tooltiptext">Buscar</span></button>
            </div>
            <div className="tooltip">
            <button className="button-lupa-refresh" ><img src={process.env.PUBLIC_URL + '/actualizar.png'} onClick={()=>window.location.reload()} ></img> <span class="tooltiptext">Actualizar</span> </button>
            </div>                
        </div>
    </div>
     <ListaMedia tipo = {tipo} genero = {Number(genero)} textoBuscar = {textoBuscar} botonPlay = {true} botonEditar={false} botonEliminar={false}/>        
    </>

)
}
