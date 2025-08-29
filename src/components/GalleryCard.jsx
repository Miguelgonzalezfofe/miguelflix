import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
function GalleryCard({ props, path }) {
    let { title, poster_path, release_date, id, name } = props
    return (
        <>
            <Link to={`/${path}/${id}`} className='text-decoration-none text-dark'>
                <Card className='h-100'>
                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt='Card image' />
                    <Card.Body>
                        <Card.Title>{title || name}</Card.Title>
                        <Card.Text>{release_date}</Card.Text>
                    </Card.Body>
                </Card>
            </Link>
        </>

    )
}
export default GalleryCard