import { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { fetchPopular } from '../utils/Api';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Banners() {
  const [index, setIndex] = useState(0);
  const [banners, setBanners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getBanners = async () => {
      try {
        const data = await fetchPopular();
        const limitedBanners = data.slice(0, 5);
        setBanners(limitedBanners);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    getBanners();
  }, []);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  if (loading) {
    return <div>Cargando banners...</div>;
  }

  if (error) {
    return <div>Hubo un error al cargar los banners.</div>;
  }

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className="mb-4">
      {banners.map((banner) => (
        <Carousel.Item key={banner.id}>
          <Link to={`/movie/${banner.id}`}>
            <img
              src={`https://image.tmdb.org/t/p/w500${banner.poster_path}`}
              srcSet={`https://image.tmdb.org/t/p/w780${banner.poster_path} 780w, https://image.tmdb.org/t/p/w1280${banner.backdrop_path} 1280w`}
              sizes="100vw"
              alt={banner.title}
              className="d-block w-100 rounded"
              style={{ height: '100dvh', objectFit: 'cover' }}
            />
          </Link>
          {window.innerWidth >= 768 && (
            <Carousel.Caption>
              <div className='back-overview mb-3'>
                <h3 className='fs-1'>{banner.title}</h3>
              </div>
              <Button variant="danger" as={Link} to={`/movie/${banner.id}`}>Ver más</Button>
            </Carousel.Caption>
          )}
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Banners;