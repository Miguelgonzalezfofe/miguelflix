import { Link } from "react-router-dom"
import Card from 'react-bootstrap/Card';
import { setLike } from "../utils/app";
import { ButtonGroup} from 'react-bootstrap';

export default function ThumbnailCard({ prop, type }) {

    const { id, poster_path, title, name } = prop
    return (
        <Card
            className=" movie-card-wrapper bg-dark text-white border-0 shadow-lg card-thumbnail"
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
                <ButtonGroup className='w-100 d-flex justify-content-between'>
                    <button className="btn btn-danger" onClick={() => setLike(prop)}>
                        <i className="bi bi-heart-fill"  ></i>
                    </button>
                    <Link to={`/${type}/${id}`} key={id} className='text-decoration-none btn btn-danger' >
                        <small className="text-white">Ver más</small>
                    </Link>
                </ButtonGroup>
        </Card>
    )
}
