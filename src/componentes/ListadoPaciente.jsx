function ListadoPaciente(){

    return(<div className="md:w-1/2 lg:w-1/3 overflow-y-hidden md:h-screen">
        <h2 className="font-black text-3xl text-center"></h2>
        <p className="text-center text-3xl">
            Administra tus {""}<span className="text-indigo-400 font-bold"> Pacientes y citas</span>
        </p>
    </div>)
}
// El {""} significa dar espacio entre las palabras 
export default ListadoPaciente;