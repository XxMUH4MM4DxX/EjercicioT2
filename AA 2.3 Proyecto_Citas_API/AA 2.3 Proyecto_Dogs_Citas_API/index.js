import express from 'express';
import axios from 'axios';

const app = express();

const PORT = 3000;

app.use(express.static( 'public'));

app.get('/', async (req, res) => {
    try {
        const result = await axios.get('https://dog.ceo/api/breeds/image/random');
        const message = result.data.message; 
        const status = result.data.status;
        res.render('index.ejs', {
            message: message,
            status: status,
        });
        console.log(result.data);

        
    } catch (error) {
        console.log(error.response.data);
        res.status(500).send('Error al obtener la cita');
    }
})

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
