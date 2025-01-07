import { useState } from "react";
import "./Miorg.css"

const MiOrg = (props) => {
//hooks - Estados
//useState
// estructura
//Const [nombreDeVariable, FuncionActualiza]=useState(valorIniicial)



const manejadorClick = () => {
        console.log("Mostrar elemento");
    }

    return <section className="orgSection">
        <h3 className="titulo">Mi organización</h3>
        <img src="./img/add.png" alt="add" onClick={props.cambiarMostrar} />
    </section>

}

export default MiOrg