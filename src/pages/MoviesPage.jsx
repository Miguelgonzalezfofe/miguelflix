import { fetchMovies, fetchSeries } from "../utils/Api"
import { useEffect, useState } from "react"
import ListCard from "../components/ListCard"
import Banners from "../components/Banners"
import Hero from "../components/Hero"
import CarruselCard from "../components/CarruselCard"

function MoviePage() {
    const [movies, setMovies] = useState([])
    const [series, setSeries] = useState([])
    const [loading, setLoading] = useState(true)

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

    setTimeout(() => {
        setLoading(false)
    }, 500)

    if (loading) {
        return <>
            <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                <h2>Cargando...</h2>
            </div>
        </>
    }

    return (
        <>
            <Banners />
            <Hero />
            <ListCard props={movies} count={5} />
            <CarruselCard props={movies} type="movie" title="Películas Populares" />
            <CarruselCard props={series} type="serie" title="Series Populares" />

        </>
    )
}

export default MoviePage
