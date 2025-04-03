import axios from "axios";

const token = "BQDdY8a1mMqgzlb_GjZGCdHeUyh7fZ24KFmdO-lLO9djcQbE5MlamP_PHKOG19jl_N3GVbeLueuucv6uiGNqTfLBhYGpzxa92coYv_z3luDy7ahCOuveD8kOlR9zg8KIQZI28o9vVJ8";

const obtenerDatosArtista = async () => {
    try {
        const response = await axios.get("https://api.spotify.com/v1/artists/7gZfnEnfiaHzxARJ2LeXrf", { 
            headers: { Authorization: `Bearer ${token}` }  
        });

        console.log("Datos del artista:", response.data);
    } catch (error) {
        console.error("Error al obtener datos:", error.response?.data || error.message);
    }
};

obtenerDatosArtista();
