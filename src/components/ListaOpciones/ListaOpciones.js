import "./ListaOpciones.css"

const ListaOpciones = (props) => {


    const manejarcambio = (e) => {
        console.log ("cambio", e.target.value)
        props.actualizarEquipo(e.target.value)

    }



    return <div className="listaOpciones">
        <label>Equipo</label>
        <select value={props.valor} onChange={manejarcambio}>
            <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
         {props.equipos.map((equipos, index) => <option key={index}>{equipos}</option>)}
        </select>
    </div>
}

export default ListaOpciones