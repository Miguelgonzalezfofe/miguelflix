import { Container, Card } from 'react-bootstrap';
import ThumbnailCard from './ThumbnailCard';
import { Link } from 'react-router-dom';
export default function CarruselCard({ props, title,type }) {
    return (
        <div >
            <Container fluid >
                <h2 className='mb-4'>{title}</h2>

                <div className="d-flex scroll-container">
                    {props.map(prop => (
                        // Cada tarjeta de película
                        <ThumbnailCard key={prop.id} prop={prop} type={type}/>
                    ))}
                </div>
            </Container>
        </div>
    );
}
