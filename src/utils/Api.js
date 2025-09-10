// src/utils/Api.js
// Usar variables de entorno de Vite
const tokenSecret = import.meta.env.VITE_TOKEN_SECRET;

export async function fetchMovies() {
    const url = 'https://api.themoviedb.org/3/trending/movie/day?language=es-419';
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
export async function fetchPopular(page = "1") {
    const url = `https://api.themoviedb.org/3/movie/popular?language=es-419-US&page=${page}`
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization: `Bearer ${tokenSecret}`
        }
    };

    const response = await fetch(url, options);
    if (!response.ok) throw new Error("Error al obtener las Peliculas populares")
    const data = await response.json()
    // console.log(data.results[0])
    return data.results;

}
export async function fetchMovie(id) {
    const url = `https://api.themoviedb.org/3/movie/${id}?language=es-419`
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization: `Bearer ${tokenSecret}`
        }
    }

    const response = await fetch(url, options);
    if (!response.ok) throw new Error("Error al traer la pelicula")
    const data = await response.json();
    return data
}
export async function fetchSerie(id) {
    const url = `https://api.themoviedb.org/3/tv/${id}?language=es-419`

    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization: `Bearer ${tokenSecret}`
        }
    }

    const response = await fetch(url, options);
    if (!response.ok) throw new Error("Error al traer la pelicula")
    const data = await response.json();
    return data
}
export async function fetchSeries(page = "1") {
    const url = `https://api.themoviedb.org/3/tv/popular?language=es-419&page=${page}`

    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization: `Bearer ${tokenSecret}`
        }
    }

    const response = await fetch(url, options);
    if (!response.ok) throw new Error("Error al traer las Series de la pelicula")
    const data = await response.json();
    return data.results

}
export async function fetchVideos(id) {
    const url = `https://api.themoviedb.org/3/movie/${id}/videos?language=es-419`
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization: `Bearer ${tokenSecret}`
        }
    }

    const response = await fetch(url, options);
    if (!response.ok) throw new Error("Error al traer el video de la pelicula")
    const data = await response.json();
    return data.results

}
export async function fetchGenero(type) {
    const url = `https://api.themoviedb.org/3/genre/${type}/list?language=es-419`
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization: `Bearer ${tokenSecret}`
        }
    }
    const response = await fetch(url, options)
    if (!response.ok) throw new Error("error al traer los generos")
    const data = await response.json();
    return data.genres
}
export async function fetchContenidoPorGenero(type, genreId, page = "1") {
    const url = `https://api.themoviedb.org/3/discover/${type}?include_adult=false&include_video=false&language=es-419&page=${page}&sort_by=popularity.desc&with_genres=${genreId}`
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${tokenSecret}`
        }
    }
    const response = await fetch(url, options)
    if (!response.ok) throw new Error(`Error al traer los ${type === 'movie' ? 'géneros de películas' : 'géneros de series'}`)
    const data = await response.json();
    return data.results

}




