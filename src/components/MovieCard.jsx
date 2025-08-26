import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
function MovieCard({ movie }) {
    let { title, poster_path, release_date } = movie
    return (
        <>
            <Link to={`/movie/${movie.id}`} className='text-decoration-none text-dark'>
                <Card className='h-100'>
                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt='Card image' />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>{release_date}</Card.Text>
                    </Card.Body>
                </Card>
            </Link>
        </>

    )
}
export default MovieCard