import { fetchPopular } from "../utils/Api";
import { useState, useEffect, use } from "react"
import ListCard from "./ListCard";
import { Button, ButtonGroup, Container } from "react-bootstrap";

export default function Movies() {
    const [movies, setMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true);

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


    setTimeout(() => {
        setIsLoading(false);
    }, 500);

    if (isLoading) {
        return <>
            <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                <h2>Cargando...</h2>
            </div>
        </>;
    }
    return <>
        <Container fluid>
            <ListCard props={movies} />
            <ButtonGroup className="d-flex justify-content-center gap-3">
                <Button variant="danger" className="my-4" onClick={() => setCurrentPage(currentPage - 1)}>Anterior</Button>

                <Button variant="danger" className="my-4" onClick={() => setCurrentPage(currentPage + 1)}>Siguiente</Button>

            </ButtonGroup>
        </Container>

    </>

}