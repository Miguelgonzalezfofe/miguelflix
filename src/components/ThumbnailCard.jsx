import { Link } from "react-router-dom"
import Card from 'react-bootstrap/Card';

export default function ThumbnailCard({ prop, type }) {

    const { id, poster_path, title, name } = prop
    return (
        <Link to={`/${type}/${id}`} key={id} className="movie-card-wrapper text-decoration-none">
            <Card
                className="bg-dark text-white border-0 shadow-lg card-thumbnail"
            >
                <Card.Img
                    variant="top"
                    className="card-thumbnail-img"
                    src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                    alt={title}
                />
                <Card.Body className="p-2 d-flex flex-column justify-content-center align-items-center text-center">
                    <Card.Title className="text-sm truncate card-thumbnail-title">
                        {title || name}
                    </Card.Title>
                </Card.Body>
            </Card>
        </Link>
    )
}
