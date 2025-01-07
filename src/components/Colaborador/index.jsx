import "./colaborador.css"
import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { RiDeleteBinLine } from "react-icons/ri";

const Colaborador = (props) => {

    const { nombre,puesto,foto, equipo,id, like } = props.datos
    const {colorPrimario, eliminarColaborador,liked} = props

    return <div className="colaborador">
        {//Agregar el icono de elimar 
        }
        <RiDeleteBinLine onClick={()=>eliminarColaborador(id)} className="eliminar" />
        <div className="encabezado" style={{backgroundColor: colorPrimario}}>
            <img src={foto} alt={nombre}/>
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            {/*favoritos*/}
            {like ? <FaHeart color="red" onClick={() => liked(id)}/> : <CiHeart onClick={() => liked(id)}/> 
                }
            
        </div>
    </div>
}

export default Colaborador