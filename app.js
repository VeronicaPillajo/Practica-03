const argv = require('./config/yargs').argv; // se crea el argv para hacer las llamadas
const tareas = require('./controlador/tareas-por-hacer'); //require permite agregar modulos
const colors = require('colors'); //se importa para los colores

let comando = argv._[0];

switch (comando) { //creación de menú
    case 'crear': //creación de tareasS
        let tarea = tareas.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar': //lista tareas
        let rea = tareas.realizado(argv.completado); //llamada a la función realizado
        for (let tarea of rea) { //Impresiones
            console.log("Listado de tareas");
            console.log("Tarea: ", tarea.descripcion);
            console.log("Estado: ", tarea.completado);
        }
        break;
    case 'actualizar': //actualiza las tareas
        let actualizado = tareas.actualizar(argv.descripcion, argv.completado); //llamada a la funcion actualizar
        //y recibe 2 parametros
        console.log(actualizado);
        break;
    case 'borrar': //borra las tareas
        let borrado = tareas.borrar(argv.descripcion); //llamada a la funcion borrar
        console.log(borrado);
        break;
    default:
        console.log("Comando no reconocido");
}