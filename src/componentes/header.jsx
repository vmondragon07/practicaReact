function Header({props, admin}) {
    //Cada componente debe tener un return
    //Debe estar en el nivel mas alto y solo 1

    console.log(props);
    console.log(admin);

    return (<h1 className="font-black text-center mx-auto text-4xl">Seguiemiento de pacientes <span className="text-indigo-400"> Veterinaria</span></h1>)
}

export default Header