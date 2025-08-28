import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovie, fetchVideos } from '../utils/Api';
import MovieVideoPlayer from './MovieVideoPlayer';

import { Container, Row, Col, Badge, Card, ListGroup, Button } from 'react-bootstrap';


export default function MovieDetail() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        const getMovie = async () => {
            const data = await fetchMovie(id);
            setMovie(data);
        };
        const getVideos = async () => {
            const data = await fetchVideos(id);
            setVideos(data);
        };
        getMovie();
        getVideos();
    }, [id]);

    if (!movie) return <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}><h2>Cargando...</h2></div>;
    return (
        <>
            <div className='movie-detail mt-4'>
                {window.innerWidth >= 768 &&
                    <div className='movie-detail-bg' style={{
                        backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`,
                    }}>
                        <div className='movie-detail-overlay'>
                            <Container>
                                <h1 className="display-4 fw-bold mb-0">{movie.title}</h1>
                                <p className="lead">{movie.tagline}</p>
                            </Container>
                        </div>
                    </div>
                }

                <Container className="py-5">
                    <Row className="gx-5">
                        <Col lg={4} className="d-flex justify-content-center mb-4">
                            <Card className="bg-dark text-white rounded shadow-lg" style={{ width: '18rem' }}>
                                <Card.Img
                                    variant="top"
                                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                    alt={movie.title}
                                    className="rounded"
                                />
                                <Card.Body>
                                    <Card.Text className="d-flex align-items-center justify-content-between">
                                        <span>Puntuación:</span>
                                        <Badge bg="danger" className="rounded-pill">
                                            {movie.vote_average.toFixed(1)} / 10
                                        </Badge>
                                    </Card.Text>
                                    <Card.Text className="d-flex align-items-center justify-content-between">
                                        <span>Votos:</span>
                                        <span>{movie.vote_count}</span>
                                    </Card.Text>
                                    <Card.Text className="d-flex align-items-center justify-content-between">
                                        <span>Fecha de Estreno:</span>
                                        <span>{new Date(movie.release_date).toLocaleDateString()}</span>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col lg={8}>
                            <div className="mb-5">
                                <h3 className="mb-3">Sinopsis</h3>
                                <p className="text-white-50">{movie.overview}</p>
                            </div>

                            <div className="mb-5">
                                <h3 className="mb-3">Detalles</h3>
                                <ListGroup variant="flush">
                                    <ListGroup.Item className="bg-dark text-white d-flex justify-content-between">
                                        <span>Géneros</span>
                                        <span>
                                            {movie.genres.map(genre => (
                                                <Badge key={genre.id} bg="secondary" className="me-1">{genre.name}</Badge>
                                            ))}
                                        </span>
                                    </ListGroup.Item>
                                    <ListGroup.Item className="bg-dark text-white d-flex justify-content-between">
                                        <span>Duración</span>
                                        <span>{movie.runtime} min</span>
                                    </ListGroup.Item>
                                    <ListGroup.Item className="bg-dark text-white d-flex justify-content-between">
                                        <span>Estado</span>
                                        <span>{movie.status}</span>
                                    </ListGroup.Item>
                                    <ListGroup.Item className="bg-dark text-white d-flex justify-content-between">
                                        <span>Compañías de producción</span>
                                        <span>
                                            {movie.production_companies.map((company, index) => (
                                                <span key={index} className="badge bg-dark text-white me-1">{company.name}</span>
                                            ))}
                                        </span>
                                    </ListGroup.Item>
                                    <ListGroup.Item className="bg-dark text-white d-flex justify-content-between">
                                        <span>Idiomas</span>
                                        <span>
                                            {movie.spoken_languages.map((lang, index) => (
                                                <span key={index} className="badge bg-dark text-white me-1">{lang.name}</span>
                                            ))}
                                        </span>
                                    </ListGroup.Item>
                                    <ListGroup.Item className="bg-dark text-white d-flex justify-content-between">
                                        <span>Países de producción</span>
                                        <span>
                                            {movie.production_countries.map((country, index) => (
                                                <span key={index} className="badge bg-dark text-white me-1">{country.name}</span>
                                            ))}
                                        </span>
                                    </ListGroup.Item>
                                </ListGroup>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            {videos.length > 0 && <Container className="mb-2 p-4">
                <h2 className="mb-4">Videos</h2>
                <Row className="gx-5">
                    {videos.slice(0, 2).map((video) => (
                        <Col lg={6} key={video.id} className="mb-4">
                            <MovieVideoPlayer videoKey={video.key} />
                            <h5 className="mt-2 text-white">{video.name}</h5>
                        </Col>
                    ))}
                </Row>
            </Container>
            }

            <div className="d-flex justify-content-center">
                <Button variant="danger" href="/" className="m-4">Volver al inicio</Button>
            </div>


        </>

    );
}
