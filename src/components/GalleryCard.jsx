import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { setLike } from '../utils/app';
import { ButtonGroup } from 'react-bootstrap';
function GalleryCard({ props, type }) {
    let { title, poster_path, release_date, id, name } = props
    return (
        <>
            {/* <Link to={`/${path}/${id}`} className='text-decoration-none text-dark'> */}
                <Card className='h-100'>
                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt='Card image' />
                    <Card.Body>
                        <Card.Title>{title || name}</Card.Title>
                        <Card.Text>{release_date}</Card.Text>
                    </Card.Body>
                        <ButtonGroup className='w-100 d-flex justify-content-between'>
                            <button className="btn btn-danger" onClick={() => setLike(props)}>
                                <i className="bi bi-heart-fill"  ></i>
                            </button>
                            <Link to={`/${type}/${id}`} className='text-decoration-none btn btn-danger' >
                                <small className="text-white">Ver más</small>
                            </Link>
                        </ButtonGroup>
                </Card>
        </>

    )
}
export default GalleryCard