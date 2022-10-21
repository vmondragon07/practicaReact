import Header from './componentes/header'
import ListadoPaciente from './componentes/ListadoPaciente'
import Formulario from './componentes/Formulario'
import { useState } from "react"

function App() {

  //Variables o funciones de otros componentes del padre al hijo 
  const [pacientes, setPacientes] = useState([]); //arreglo
  const [paciente, setPaciente] = useState({}); //Objeto


  return (
    <>
      <div className='container mx-auto mt-15'>
        <Header />
        <div className="md:flex">
          <Formulario pacientes={pacientes} 
          setPacientes={setPacientes} 
          paciente = {paciente}
          setPaciente = {setPaciente}
          />
          <ListadoPaciente />

        </div>

      </div>
    </>
  )
}

export default App
