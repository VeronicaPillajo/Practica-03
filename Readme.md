## Aplicación de comandos NodeJS

Recuerda instalar los paquetes

```

npm install
npm install yargs
npm install colors

```
EL programa realiza:
-Crea tareas
-Lista tareas (completas,imconpletas)
-Actualiza Tareas
-Borra tareas

```
Comando para ejecutar(Ejemplos)
node app crear -d "Jugar"
node app listar -c true o node app listar -c false
node app borrar -d "Jugar"
node app actualizar -d "Jugar" -c false

