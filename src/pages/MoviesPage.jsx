import { fetchMovies } from "../utils/Api"
import { useEffect, useState } from "react"
import ListMovies from "../components/ListMovies"

function MoviePage() {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        const getMovies = async () => {
            const movies = await fetchMovies()
            setMovies(movies)
        }
        getMovies()
    }, [])

    return (
        <>
            <h1 className="text-center">Miguel flix</h1>
            <ListMovies movies={movies} />
        </>
    )
}

export default MoviePage
