//arays de cursos de fotografia y servicios de fotografia
const user={
    name:"tutor",
    contrasenia:"1234"
}
const curso=[
    {
        nombre:"fotografia",
        duracion: "90 dias",
        valor:50000
    },

    {
        nombre:"camarografo",
        duracion:"90 dias",
        valor:50000
    },

    {
        nombre:"iluminacion",
        duracion:"90 dias",
        valor:50000
    },

    {
        nombre:"produccion",
        duracion:"90 dias",
        valor:50000
    }
]
const serviciosDeFotografia=[
    {
        nombre:"Casamiento",
        valorPorHora:10000
    },
    {
        nombre:"Cumpleaños",
        valorPorHora:10000
    },
    {
        nombre:"FiestaXV",
        valorPorHora:10000
    },
    {
        nombre:"Bautismo",
        valorPorHora:10000
    },
    {
        nombre:"Comuniones",
        valorPorHora:10000
    }
];

//FUNCION PARA MOSTRAR CURSOS Y SERVICIOS
const mostrarCursosYServicios = () => {

    let infoDeCursos="Cursos de Focus Producciones \n";
    curso.map((curso) => {
infoDeCursos += `\n Curso de ${curso.nombre} \n Duracion de ${curso.duracion} \n El valor es de $${curso.valor} \n ---------------------------- \n` ;
});
alert(infoDeCursos);
;

let infoDeServicios="Servicios de Fotografia de Focus Producciones";
serviciosDeFotografia.forEach ((serviciosDeFotografia) =>{
    infoDeServicios += `Servicio de ${serviciosDeFotografia.nombre} \n El valor por hora es de $${serviciosDeFotografia.valorPorHora} \n---------------------\n`;
})
alert(infoDeServicios);

};




//Funcion para agregar mas cursos

const agregarCursos =() => {
    const username= prompt("Ingrese su nombre")
    const password= prompt("Ingrese su contraseña")
    if(username===user.name && password===user.contrasenia){
        alert("Bienvenido a Focus Producciones");
        const obtenerNombre=() =>{
            let nombre = prompt("Ingrese el nombre del curso.");
            if(nombre ===""){
                alert("No se permiten espacios en blanco")
                return obtenerNombre();
            }
            return nombre;
        } 
        const obtenerDuracion=() =>{
            let  duracion = prompt("Ingrese la duracion del curso.");
            if(nombre ===""){
                alert("No se permiten espacios en blanco")
                return obtenerDuracion();
            }
            return duracion;
        }
        const obtenerValor=() =>{
            let valor = parseInt(prompt("Ingrese el valor del curso."));
            if(nombre ===""){
                alert("No se permiten espacios en blanco")
                return obtenerValor();
            }
            return valor;
        }
        let nombre = obtenerNombre();
        let duracion=obtenerDuracion();
        let valor = obtenerValor();
    
        const nuevoCurso ={
            nombre:nombre,
            duracion:duracion,
            valor:valor
        };
        curso.push(nuevoCurso);
        mostrarCursosYServicios();
    }else{
        alert("Usuario o contraseña incorrecta. Prueba nuevamente.")
        agregarCursos();
    }
    }
//MENU
const opcionesMenu=[
    {
        numero:"1",
        nombre: "Mostar Cursos y Servicios",
        function: mostrarCursosYServicios
    },
    {
        numero:"2",
        nombre: "Agregar cursos",
        function: agregarCursos
    },
    {
        numero:"3",
        nombre: "Salir",
        function: null
    }
    
];

const menu=() => {
    let opciones ="";
    for(const option of opcionesMenu){
        opciones +=`${option.numero} - ${option.nombre} \n`;
    }

    const elegirOpcion=prompt(`Elige una opcion, por favor. \n ${opciones}`);

    const elegir= opcionesMenu.find(opcion=>opcion.numero===elegirOpcion);

    if(elegir){
        elegir.function();
        menu();
    }else{
        alert("elegi una opcion correcta")
        menu();
    }
}

menu();