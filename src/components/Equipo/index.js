import "./equipo.css"
import Colaborador from "../Colaborador"



const Equipo = (props) => {
//Destructuracion
//seria esta funcion asi.
// const colorPrimario = props.datos.colorPrimario
//pero se escribe asi 
const {colorPrimario, colorSecundario,titulo, id} = props.datos
//destructurado de colaboradores
const{colaboradores,eliminarColaborador,actualizarColor,liked} = props
const obj = {
    backgroundColor : colorPrimario
}
    


    return <>
    {colaboradores.length > 0 &&
        <section className="equipo" style={{backgroundColor: colorSecundario}}>
        <input 
        type="color" 
        className="colordeSection"
        value={colorPrimario}
        onChange={(e) => {
           actualizarColor(e.target.value, id)
        }}
        />
        <h3 style={{borderColor: colorPrimario }} >{titulo}</h3>
        <div className="colaboradores">
            {
            colaboradores.map((colaborador,index)=><Colaborador 
            datos={colaborador} 
            key={index} 
            colorPrimario={colorPrimario}
            eliminarColaborador={eliminarColaborador}
            liked={liked}
            />)
            }
        </div>

    </section>}</>
}

export default Equipo