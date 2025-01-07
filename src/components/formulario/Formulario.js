import { useState } from "react";
import "./Formulario.css";
import CampoTexto from "../campo/campos";
import ListaOpciones from "../ListaOpciones/ListaOpciones";
import Boton from "../boton";

const Formulario = (props) => {

    const [nombre,actualizarNombre] = useState("");
    
    const [puesto,actualizarPuesto] = useState("");
    
    const [foto,actualizarFoto] = useState("");
   
    const [equipo,actualizarEquipo] = useState("");

    const [titulo,actualizarTitulo] =  useState("");
    const [color,actualizarColor] =useState("");   

    const {registrarColaborador,crearEquipo} = props

    const manejarEnvio = (e) => {
        e.preventDefault()
        console.log("Menjar envio")

        let datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }
        props.registrarColaborador(datosAEnviar)
    }

    const manejarNuevoEquipo = (e)=>{
        e.preventDefault()
        crearEquipo({titulo, color})
    }


    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
           <h2>Rellena el formulario para crear el colaborador</h2>
            <CampoTexto 
            titulo="Nombre" 
            placeholder="Ingresar nombre" 
            required valor={nombre} 
            setvalor={actualizarNombre}/>

            <CampoTexto 
            titulo="Puesto" 
            placeholder="Ingresar puesto" 
            required
            valor={puesto} 
            setvalor={actualizarPuesto}
            />

            <CampoTexto 
            titulo="Foto" 
            placeholder="Ingresar enlace de foto"
            required
            valor={foto} 
            setvalor={actualizarFoto}
            />

            <ListaOpciones 
            valor={equipo} 
            actualizarEquipo={actualizarEquipo} 
            equipos ={props.equipos} 
            />
            <Boton texto="Crear" />

        </form>
        <form onSubmit={manejarNuevoEquipo}>
           <h2>Rellena el formulario para crear el equipo</h2>
            <CampoTexto 
            titulo="Titulo" 
            placeholder="Ingresar titulo" 
            required valor={titulo} 
            setvalor={actualizarTitulo}/>

            <CampoTexto 
            titulo="Color" 
            placeholder="Ingresar Color en HEX" 
            required
            valor={color} 
            setvalor={actualizarColor}
            type="color"
            />
              <Boton texto="Crear equipo" />
            </form>
        </section>
} 

export default Formulario