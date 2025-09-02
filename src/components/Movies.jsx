import { fetchPopular } from "../utils/Api";
import { useState, useEffect } from "react"
import ListCard from "./ListCard";
import { Button, ButtonGroup, Container } from "react-bootstrap";
import LoadingScreen from "./LoadingScreen";


export default function Movies() {
    const [movies, setMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const getMovies = async (currentPage) => {
        const movies = await fetchPopular(currentPage);
        setMovies(movies);
    };

    useEffect(() => {
        try {
            getMovies(currentPage);
        } catch (error) {
            console.error("Error fetching movies:", error);
        }
    }, [currentPage]);



    return <>
        <LoadingScreen />
        <Container fluid>
            <ListCard props={movies} type="movie" />
            <ButtonGroup className="d-flex justify-content-center gap-3">
                <Button variant="danger" className="my-4" onClick={() => setCurrentPage(currentPage - 1)}>Anterior</Button>

                <Button variant="danger" className="my-4" onClick={() => setCurrentPage(currentPage + 1)}>Siguiente</Button>

            </ButtonGroup>
        </Container>

    </>

}