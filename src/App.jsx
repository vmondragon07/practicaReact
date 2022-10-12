import Header from './componentes/header'
import ListadoPaciente from './componentes/ListadoPaciente'
import Error from './componentes/Error'
import Formulario from './componentes/Formulario'
import Paciente from './componentes/Paciente'

function App() {


  return (
    <>
      <Header />
      <ListadoPaciente />
      <Formulario/>
      <Paciente/>
      <Error/>
    </>
  )
}

export default App
