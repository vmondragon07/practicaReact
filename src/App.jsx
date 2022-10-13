import Header from './componentes/header'
import ListadoPaciente from './componentes/ListadoPaciente'
import Error from './componentes/Error'
import Formulario from './componentes/Formulario'
import Paciente from './componentes/Paciente'

function App() {


  return (
    <>
     <div className='container mx-auto mt-15'>
     <Header />
     <Formulario/>
      <ListadoPaciente />
     
      <Paciente/>
      <Error/>
     </div>
    </>
  )
}

export default App
