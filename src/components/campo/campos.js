import { useState } from "react"
import "./campos.css"

//definimos una funcion para los cambios
//atravez de props que se usa onchange  
const Campo = (props) => {
    // definimos un evento con use state que guardara en setvalor la informacion
    

    //placehorder le da por defecto el valor de ingresar nombre y datos 
    const placeholderModificado = `${props.placeholder}...`
    //destructuracion campos
    //todos los input son de tipo texto
    const {type = "text" } = props
    

    //recibimos el valor de un evento e para mostrarlo en consola
    const recibirValor = (e) => {
        //setvalor que es la funcion que atrapa el evento y el target.value se usa para tener el valor del input
        props.setvalor(e.target.value)

    }
//  con el campo-${} toma el tipo para la clase en el css                                            
    return <div className={`campo campo-${type}`}>
        <label>{props.titulo}</label>
        <input 
        placeholder={placeholderModificado} 
        required={props.required} 
        value={props.valor}
        onChange={recibirValor}
        type={type}
        />
    </div>
}

export default Campo