const fs = require('fs'); //módulo para interactuar con los archivos

let tareasPorHacer = []; //se crea la lista

const cargarDB = () => { //cargar la base de datos
    try { //Para ver errores
        tareasPorHacer = require('../db/data.json'); //revisa en la carpeta db y el data.json
    } catch (error) {
        tareasPorHacer = [];
    }
    return tareasPorHacer; //retorna tareasPorHacer
}

const guardarDB = () => { //guarda la base de datos
    let data = JSON.stringify(tareasPorHacer);

    fs.writeFile('db/data.json', data, (err) => { //crea el json en la carpeta db
        if (err) throw new Error('No se pudo guardar', err); //if para errores
    });
}

const crear = (descripcion) => { //crea las tareas
    cargarDB(); //carga base de datos
    let tarea = {
        descripcion,
        completado: "false"
    };
    tareasPorHacer.push(tarea); //se guarda en lista
    guardarDB(); //guarda en la base de datos
    return tarea; //retornamos tareas
}

const getLista = () => { //obtenemos la lista 
    cargarDB(); //cargamos la base
    return tareasPorHacer; //y retornamos el tareasPorHAcer
}

const actualizar = (descripcion, completado = true) => { //actualizamos las tareas true/false
    cargarDB(); //cargamos la base

    let index = tareasPorHacer.findIndex(tarea => tarea.descripcion === descripcion); //guardamos en la variable index
    //el indice del array

    if (index >= 0) { //si el indice es mayor a 0 se verifica el completado para actualizar la tarea
        tareasPorHacer[index].completado = completado;
        guardarDB(); //guardamos en la base
        return true; //si el index es mayor o igual a cero retorna true
    }
    return false; //sino retorna false

}

const borrar = (descripcion) => { //borramos una tarea 
    cargarDB(); //cargamos bae de datos

    let nuevoListado = tareasPorHacer.filter(tarea => tarea.descripcion !== descripcion); //filtramos las tareas
    if (tareasPorHacer.length === nuevoListado.length) { //validacion con if 
        return false; //retorna false si es igual
    } else {
        tareasPorHacer = nuevoListado; //se guarda en la variable tareasporHacer
        guardarDB(); //guardamos en la base
        return true; //sino retorna true
    }
}

const realizado = (completado) => { //funcion para el completado recibe un parametro
    let g = []; // creacion de una lista
    let f = cargarDB(); //cargamos la base de datos

    for (var i = 0; i < f.length; i++) { //for que recorre la base de datos
        if (tareasPorHacer[i].completado === completado) { //if para comparar el completado
            g.push(tareasPorHacer[i]) //se guarda en la nueva lista
                //console.log(tareasPorHacer[i])
        }
    }
    return g; //retornamos los valores de la lista
}

module.exports = { //modulo para exportar las funciones de cad auno de los comandos
    crear,
    getLista,
    actualizar,
    borrar,
    realizado

}