import axios from "axios";
import qs from "querystring";

const clientId = "e5abcdb9089440b2aa1cfc48cd3ead53";  
const clientSecret = "05a07b9db0ae4202ab41aa22f5298f96";  

const obtenerToken = async () => {
    try {
        const response = await axios.post("https://accounts.spotify.com/api/token", qs.stringify({
            grant_type: "client_credentials"
        }), {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                
                "Authorization": `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString("base64")}`
            }
        });

        console.log("Token recibido:", response.data.access_token); 
    } catch (error) {
        console.error("Error al obtener el token:", error.response?.data || error.message);  
    }
};

obtenerToken();
