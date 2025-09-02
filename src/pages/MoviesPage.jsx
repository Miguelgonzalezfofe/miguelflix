import { fetchMovies, fetchSeries } from "../utils/Api"
import { useEffect, useState } from "react"
import ListCard from "../components/ListCard"
import Banners from "../components/Banners"
import Hero from "../components/Hero"
import CarruselCard from "../components/CarruselCard"
import LoadingScreen from "../components/LoadingScreen"

function MoviePage() {
    const [movies, setMovies] = useState([])
    const [series, setSeries] = useState([])
    const getMovies = async () => {
        const movies = await fetchMovies()
        setMovies(movies)
    }
    const getSeries = async () => {
        const series = await fetchSeries()
        setSeries(series)
    }
    useEffect(() => {
        try {
            getMovies()
            getSeries()
        } catch (error) {
            console.error("Error fetching data:", error)
        }

    }, [])

    return (
        <>
            <LoadingScreen/>
            <Banners />
            <Hero />
            <ListCard props={movies} count={5} type="movie" />
            <CarruselCard props={movies} type="movie" title="Películas Populares" />
            <CarruselCard props={series} type="tv" title="Series Populares" />
        </>
    )
}

export default MoviePage
