import axios from 'axios';
import { error } from "console";

axios.get(`http://jsonplaceholder.typicode.com/posts`)
.then (respuesta => {
    console.log(`Datos recibidos: `, respuesta.data);
})

.catch (error => {
    console.error (`Error al hacer la solicitud: `, error)
});