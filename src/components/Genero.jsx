import GalleryCard from "./GalleryCard";
import { useParams } from "react-router-dom";
import { fetchContenidoPorGenero } from "../utils/Api";
import { useState, useEffect } from "react";
import { Button, ButtonGroup } from "react-bootstrap";

function Genero() {
    const { id, type } = useParams();

    const [contenido, setContenido] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchContenidoPorGenero(type, id, page);
            setContenido(data);
        };
        fetchData();
    }, [id, type, page]);

    return (
        <>
            <h2 className="mb-4">Populares ahora</h2>
            <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-4 mb-4" id="movie-cards-container">
                {contenido.map(prop => (
                    <div className="col" key={prop.id}>
                        <GalleryCard props={prop} path={type} />
                    </div>
                ))}
            </div>
            <ButtonGroup className="d-flex justify-content-center gap-3">
                <Button variant="danger" className="my-4" onClick={() => setPage(page - 1)}>Anterior</Button>

                <Button variant="danger" className="my-4" onClick={() => setPage(page + 1)}>Siguiente</Button>

            </ButtonGroup>
        </>

    )
}

export default Genero;
