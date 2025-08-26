import { Container, Card } from 'react-bootstrap';
// import MovieCard from './MovieCard';
import { Link } from 'react-router-dom';
export default function CarruselCard({ props, title,type }) {
    return (
        <div >
            <Container fluid >
                <h2 className='mb-4'>{title}</h2>

                <div className="d-flex scroll-container">
                    {props.map(prop => (
                        // Cada tarjeta de película
                        <Link to={`/${type}/${prop.id}`} key={prop.id} className="movie-card-wrapper text-decoration-none">
                            <Card
                                className="bg-dark text-white border-0 shadow-lg"
                                style={{
                                    width: '10rem',
                                    height: '18rem',
                                    borderRadius: '0.5rem',
                                    transition: 'transform 0.3s ease'
                                }}
                            >
                                <Card.Img
                                    variant="top"
                                    src={`https://image.tmdb.org/t/p/w500${prop.poster_path}`}
                                    alt={prop.title}
                                    style={{
                                        borderRadius: '0.5rem',
                                        height: '14rem',
                                        objectFit: 'cover'
                                    }}
                                />
                                <Card.Body className="p-2 d-flex flex-column justify-content-center align-items-center text-center">
                                    <Card.Title className="text-sm truncate" style={{ fontSize: '0.875rem', marginBottom: '0.25rem' }}>
                                        {prop.title || prop.name}
                                    </Card.Title>
                                </Card.Body>
                            </Card>
                        </Link>
                    ))}
                </div>
            </Container>

            {/* Estilos CSS para el carrusel y la tarjeta de película */}
            <style>
                {`
                .scroll-container {
                    overflow-x: scroll;
                    white-space: nowrap; /* Mantiene todos los elementos en una sola línea */
                    padding-bottom: 1rem;
                    -webkit-overflow-scrolling: touch; /* Suaviza el desplazamiento en iOS */
                }

                /* Oculta la barra de desplazamiento en la mayoría de los navegadores */
                .scroll-container::-webkit-scrollbar {
                    display: none;
                }
                .scroll-container {
                    -ms-overflow-style: none;  /* IE and Edge */
                    scrollbar-width: none;  /* Firefox */
                }

                .movie-card-wrapper {
                    flex-shrink: 0; /* Impide que las tarjetas se encojan */
                    margin-right: 1rem;
                }
                
                .movie-card-wrapper:last-child {
                    margin-right: 0;
                }

                .movie-card-wrapper:hover .card {
                    transform: scale(1.05); /* Efecto de zoom al pasar el ratón */
                }

                .text-sm {
                    font-size: 0.875rem;
                }

                .truncate {
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    width: 100%;
                }
            `}
            </style>
        </div>
    );
}
