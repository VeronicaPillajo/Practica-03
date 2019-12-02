const descripcion = { //creación de objeto descripcion
    demand: true, //requiere
    alias: 'd', //creación de alias
    desc: "Descripción de la tarea por hacer" //descripción del comando
};

const completado = { //creación de obejeto completado
    default: "true",
    alias: 'c',
    desc: "Marca como completada o pendiente la tarea"
};

const argv = require('yargs') // creación de comandos
    .command('crear', 'Crear una tarea', {
        descripcion //comando crear y recibe el objeto descripcion
    })
    .command('actualizar', 'Actualiza una tarea', {
        descripcion, //comando actualizar y recibe el objeto descripcion y completado
        completado
    })
    .command('borrar', 'Elimina una tarea', {
        descripcion //comando borrar y recibe el objeto descripcion
    })
    .command('listar', 'lista tareas', {
        completado //comando borrar y recibe el objeto descripcion
    })
    .help()
    .argv;

module.exports = { //se exporta el argv para hacer las llamadas de los comandos
    argv
}