import {useState} from "react"
import Error from "./Error";

const Formulario = ({pacientes, setPacientes}) => {

    const [mascota, setMascota] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setCorreo] = useState('');
    const [alta, setAlta] = useState('');
    const [sintomas, setSintomas] = useState('');
    const [error, setError] = useState(false);

    const validacionFormulario = (e) =>{
        e.preventDefault();
        if([mascota, propietario,email,alta,sintomas].includes('')){
            setError(true);
            return;
        }
        setError(false);
        const objPaciente = {mascota, propietario, sintomas, alta,email}
        setPacientes([...pacientes,objPaciente ])
        setMascota('');
        setPropietario('')
        setAlta('')
        setCorreo('')
        setPropietario('')
        setSintomas('')
    }
    
    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

            <p className="mt-5 text-center text-lg">Añade pacientes <span className="text-indigo-500 font-bold "> Administrarlos</span> </p>


            <form className="bg-statte-50 rounded-lg py-10 mb-10 shadow-md "
                onSubmit={ validacionFormulario }
            >

            {error && <Error><p>Todos los campos son obligatorios</p></Error>}

                <h2>Registro de Citas</h2><br />
                <label htmlFor="mascota" className="blck uppercase font-bold text-gray-700">Nombre de la mascota</label><br />
                <input
                    id="mascota"
                    type="text"
                    placeholder="Nombre de la mascota"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md"
                    onChange={(e) => setMascota(e.target.value)}
                    value= {mascota}
                /><br />

                <label htmlFor="propietario" className="blck uppercase font-bold text-gray-700">Nombre del propietario</label><br />
                <input
                    id="propietario"
                    type="text"
                    placeholder="Nombre del propietario"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md"
                    onChange={(e) => setPropietario(e.target.value)}
                    value = {propietario}
                /><br />


                <label htmlFor="email" className="blck uppercase font-bold text-gray-700">Correo Electronico</label><br />
                <input
                    id="name"
                    type="email"
                    placeholder="Correo electrónico.."
                    className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md"
                    onChange={(e) => setCorreo(e.target.value)}
                    value = {email}
                /><br />

                <label htmlFor="ata" className="blck uppercase font-bold text-gray-700">Fecha de Cita</label><br />
                <input
                    id="alta"
                    type="date"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md"
                    onChange={(e) => setAlta(e.target.value)}
                    value={alta}
                /><br />

           

                <label htmlFor="sintomas" className="blck uppercase font-bold text-gray-700">Sintomas</label><br />
                <textarea
                    id="sintomas"
                    placeholder="Sintomas que presenta.."
                    className="border-2 w-full p-2 mt-2 placeholder-gray-600 rounded-md"
                    onChange={(e) => setSintomas(e.target.value)}
                    value={sintomas}
                /><br />
                <input
                    name="registraCita"
                    type="submit"
                    value="Registrar Cita" 
                    className="bg-indigo-400 text-white font-bold uppercase hover:bg-indigo-700 hover:text-red-400 cursor-pointer"
                />
            </form></div>



    )
}

export default Formulario;