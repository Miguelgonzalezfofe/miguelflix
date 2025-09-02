import { fetchSeries } from "../utils/Api"
import { useState, useEffect } from "react";
import ListCard from "./ListCard";
import { Container, ButtonGroup, Button } from "react-bootstrap";
import LoadingScreen from "./LoadingScreen";


export default function Series() {
    const [series, setSeries] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const getSeries = async (currentPage) => {
        const series = await fetchSeries(currentPage);
        setSeries(series);
    };

    useEffect(() => {
        try {
            getSeries(currentPage);
        } catch (error) {
            console.error("Error fetching series:", error);
        }
    }, [currentPage]);
    
    return <>
        <LoadingScreen />
        <Container fluid>
            <ListCard props={series} type="tv" />
            <ButtonGroup className="d-flex justify-content-center gap-3">
                <Button variant="danger" className="my-4" onClick={() => setCurrentPage(currentPage - 1)}>Anterior</Button>
                <Button variant="danger" className="my-4" onClick={() => setCurrentPage(currentPage + 1)}>Siguiente</Button>
            </ButtonGroup>
        </Container>
    </>
}