function Paciente({ paciente, setPaciente }) {

    const { mascota, propietario, email, alta, sintomas } = paciente;

    const eliminar = ()=>{
        const respuesta = confirm('¿Estas seguro de eliminar este paciente?')
        if(respuesta){
            eliminarPaciente(id)
        }
    }

    return (<div className="bg-slate-50 shadow-md mx-5 rounded-md">
        <p className="font-bold text-gray-700 uppercase ">Mascota: <span className="font-normal normal-case">{mascota}</span></p>
        <p className="font-bold text-gray-700 uppercase ">Propietario: <span className="font-normal normal-case">{propietario}</span></p>
        <p className="font-bold text-gray-700 uppercase ">Alta: <span className="font-normal normal-case">{alta}</span></p>
        <p className="font-bold text-gray-700 uppercase ">'Email': <span className="font-normal normal-case">{email}</span></p>
        <p className="font-bold text-gray-700 uppercase ">Sintomas: <span className="font-normal normal-case">{sintomas}</span></p>

        <div >
            <button type="submit" className="hover:bg-indigo-700 bg-indigo-600 uppercase rounded-md text-white px-10 font-bold"
                onClick={() => setPaciente(paciente)}> Editar</button>

            <button type="submit" className="hover:bg-red-700 bg-red-600 uppercase rounded-md text-white px-10 font-bold"
                onClick={eliminar}> Eliminar</button>
        </div>


    </div>)
}

export default Paciente;