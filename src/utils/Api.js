// src/utils/Api.js
// Usar variables de entorno de Vite
const tokenSecret = import.meta.env.VITE_TOKEN_SECRET;
export async function fetchMovies() {
    const url = 'https://api.themoviedb.org/3/trending/movie/day?language=es';
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${tokenSecret}`
        }
    };

    const response = await fetch(url, options);
    if (!response.ok) throw new Error('Error al obtener películas');
    const data = await response.json();
    // La API devuelve un objeto con la propiedad "results" que es el array de películas
    return data.results;
}
