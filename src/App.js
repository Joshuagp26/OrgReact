import { useState } from 'react';
import {v4 as uuid } from"uuid"
import './App.css';
import Header from './components/Header/Header';
import Formulario from './components/formulario/Formulario';
import MiOrg from './components/Miorg';
import Equipo from './components/Equipo';
import Footer from './components/Footer';
import { GrConsole } from 'react-icons/gr';
import Colaborador from './components/Colaborador';

function App() {
//mostrar formulario abierto uso de estado para true o false en el formu
  const [mostrarFormulario,actualizarFormulario] = useState(false);
  //Ternario---> condicion ? muestra : nomuestra
const cambiarMostrar = () =>{
  actualizarFormulario(!mostrarFormulario)
}



//colaboradores uso de estados para arreglo de colaboradores
//entonces el nombre de la variable es colaboradores
//y para llamarla se usa el actualizarColaboradores
const [colaboradores,actualizarColaboradores] = useState([
  {
  id: uuid(),
  equipo: "Front End",
  foto: "https://github.com/harlandlohora.png",
  nombre: "Harland Lohora",
  puesto: "Instructor",
  like: true
},
{
  id: uuid(),
  equipo: "Front End",
  foto: "https://github.com/Joshuagp26.png",
  nombre: "Joshua Guillen",
  puesto: "Alumno Arula Latam",
  like: false
},
{
  id: uuid(),
  equipo: "UX y Diseño",
  foto: "https://github.com/JeanmarieAluraLatam.png",
  nombre: "Jeanmarie Quijada",
  puesto: "Instructora en Alura Latam",
  like: true
},
{
  id: uuid(),
  equipo: "Programación",
  foto: "https://github.com/christianpva.png",
  nombre: "Christian Velasco",
  puesto: "Head de Alura e Instructor",
  like: true
},
{
  id: uuid(),
  equipo: "Innovación y Gestión",
  foto: "https://github.com/JoseDarioGonzalezCha.png",
  nombre: "Jose Gonzalez",
  puesto: "Dev FullStack",
  like: true
}
])

//equipos
const [equipos,actualizarEquipos] = useState(
  [

    {
      id: uuid(),
      titulo : "Programación",
      colorPrimario : "#57C278",
      colorSecundario : "#D9F7E9"
    },
    {
      id: uuid(),
      titulo : "Front End",
      colorPrimario : "#82CFFA",
      colorSecundario : "#E8F8FF"
    },
    {
      id: uuid(),
      titulo : "Data Science",
      colorPrimario : "#A6D157",
      colorSecundario : "#F0F8E2"
    },
    {
      id: uuid(),
      titulo : "Devops",
      colorPrimario : "#E06B69",
      colorSecundario : "#FDE7E8"
    },
    {
      id: uuid(),
      titulo : "UX y Diseño",
      colorPrimario : "#DB6EBF",
      colorSecundario : "#FAE9F5"
    },
    {
      id: uuid(),
      titulo : "Móvil",
      colorPrimario : "#FFBA05",
      colorSecundario : "#FFF5D9"
    },
    {
      id: uuid(),
      titulo : "Innovación y Gestión",
      colorPrimario : "#FF8A29",
      colorSecundario : "#FFEEDF"
    }
  ]
)


console.log(uuid())

//registrar colaborador

const registrarColaborador =(colaborador)=>{
  console.log("nuevo Colaboador", colaborador)
  //spread Operator
  //lo que hace es copiar el arreglo de objeto que existe, lo copia y le agrega el nuevo
actualizarColaboradores([...colaboradores,colaborador])
}

//Eliminar Colaborador
const eliminarColaborador = (id) => {
  console.log("Eliminar Colaborardor", id)
  const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
  actualizarColaboradores(nuevosColaboradores)
}

//actualizar color
const actualizarColor = (color,id) =>{
  console.log("cambio : ",color, id )
  const equiposACtualizados = equipos.map((equipo)=>{
    if(equipo.id === id){
      equipo.colorPrimario = color
    }
    return equipo
  })
  actualizarEquipos(equiposACtualizados)
}
//Crear Equipo 
const crearEquipo = (nuevoEquipo) => {
  console.log(nuevoEquipo)
  actualizarEquipos([...equipos, {...nuevoEquipo, id:uuid()}])
}

//corazon like
const liked =(id,like)=>{
  console.log("like",id)
  const colaboradoresLike = colaboradores.map((colaborador)=>{
    if (colaborador.id === id){
      colaborador.like = !colaborador.like

      console.log("likeC",colaborador.like,"ID",id)
    }
    return colaborador
  })
  actualizarColaboradores(colaboradoresLike)
}


  return (
    /*
    mostrar header
    Mostrar Formulario*/
    <div>
      <Header />
      
       { mostrarFormulario === true ? 
        <Formulario equipos={equipos.map((equipo) => equipo.titulo)} 
        registrarColaborador={registrarColaborador}
        crearEquipo={crearEquipo}
        /> : <div></div>}  
      
     
      <MiOrg cambiarMostrar={cambiarMostrar} />
      
      {
      //equipos.map((equipo) => {
       // return <Equipo datos={equipo} key={equipo.titulo}/>
      //}) 
      //otra forma de mostrar esta arrow funtion es de la siguiente forma
      equipos.map((equipo) => <Equipo 
      datos={equipo} key={equipo.titulo} 
      colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo )}
       //eliminar 
       eliminarColaborador = {eliminarColaborador}
       actualizarColor={actualizarColor}
       liked={liked}      
      />
       ) 
      }
        <Footer />
    </div>
  );
}

export default App;
