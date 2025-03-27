import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';  // Asegurar rutas correctas

const app = express();
const port = 3000;

const recetaJson = [
    {
        "id": "001",
        "nombre": "Taco de Lechon",
        "precio": 20.00,
        "proteina": {
            "nombre": "Puerco",
            "preparacion": "Horneado"
        },
        "salsa": {
            "nombre": "Salsa Roja",
            "picor": "Alto"
        },
        "acompañamientos": {
            "nombre": "Pico de Gallo",
            "cantidad": "1 cucharada",
            "ingredientes": ["Jitomate", "Cebolla Morada", "Cilantro", "Limon", "Sal"]
        }
    },
    {
        "id": "002",
        "nombre": "Taco de Pollo",
        "precio": 20.00,
        "proteina": {
            "nombre": "Pollo",
            "preparacion": "Asado"
        },
        "salsa": {
            "nombre": "Salsa de Mango y Habanero",
            "picor": "Medio"
        },
        "acompañamientos": {
            "nombre": "Guacamole",
            "cantidad": "1 cucharada",
            "ingredientes": ["Aguacate", "Cilantro", "Cebolla", "Limon", "Sal"]
        }
    },
    {
        "id": "003",
        "nombre": "Taco de Res",
        "precio": 20.00,
        "proteina": {
            "nombre": "Res",
            "preparacion": "Ahumada"
        },
        "salsa": {
            "nombre": "Salsa de Chipotle",
            "picor": "Bajo"
        },
        "acompañamientos": {
            "nombre": "Cebolla Caramelizada",
            "cantidad": "1 cucharada",
            "ingredientes": ["Cebolla", "Azúcar Morena", "Vinagre Balsámico"]
        }
    },
    {
        "id": "004",
        "nombre": "Taco de Pescado",
        "precio": 20.00,
        "proteina": {
            "nombre": "Pescado",
            "preparacion": "Frito"
        },
        "salsa": {
            "nombre": "Salsa de Aguacate",
            "picor": "Suave"
        },
        "acompañamientos": {
            "nombre": "Repollo Morado",
            "cantidad": "1 cucharada",
            "ingredientes": ["Repollo Morado", "Zanahoria", "Mayonesa", "Limon", "Sal"]
        }
    }
];

// Middleware
app.use(bodyParser.json());
app.use(express.static("public"));

// Ruta para servir el archivo HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Ruta para obtener recetas
app.get('/receta/:type', (req, res) => {
    const elegirTaco = recetaJson.find(r => 
        r.proteina.nombre.toLowerCase() === req.params.type.toLowerCase()
    );

    res.json(elegirTaco || { error: "Receta no encontrada" });
});

// Iniciar servidor
app.listen(port, () => {
    console.log(`Servidor en ejecución en http://localhost:${port}/`);
});
