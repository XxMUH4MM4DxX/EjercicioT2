import { error } from "console";

fetch (`http://jsonplaceholder.typicode.com/posts`)
.then (respuesta => {

    if (!respuesta.ok){
        throw new Error (`Respuesta del servidor fallida` + respuesta.statusText);
    }

    return respuesta.json();
})

.then (datos => {
    console.log(`Datos recibidos: `, datos);
})

.catch(error => {
    console.error(`error al hacer la solicitud: `, error)
});