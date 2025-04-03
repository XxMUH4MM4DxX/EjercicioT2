import axios from 'axios';

const obtenerUsuario = async () => {
    try {
        const response =await axios.get('http://reqres.in/api/users/4', {
            headers: {
                'Authorization': 'basic' + Buffer.from ('incorrecto@reqres.in:incorrecto').toString('base64')
            }
        });
        console.log ('Datos del usuario: ', response.data);
    }catch (error){
        console.error ('error al obtener los datos del usuario: ', error.response.data);
    }
};

obtenerUsuario();