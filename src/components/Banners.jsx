import { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { fetchPopular } from '../utils/Api';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Banners() {
  const [index, setIndex] = useState(0);
  const [banners, setBanners] = useState([]);

  useEffect (()=>{
    const FetchBanners = async () =>{
      const data = await fetchPopular();
      const limitedBanners = data.slice(0, 5);
      setBanners(limitedBanners);
    }
    FetchBanners();
  },[])

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };


  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className="mb-4 ">
      {banners.map((banner, idx) => (
        <Carousel.Item key={banner.id} className={idx === index ? 'active' : ''}>
          <img src={`https://image.tmdb.org/t/p/w1280${banner.backdrop_path}`} alt={banner.title} className="d-block w-100 rounded" style={{ height: '100dvh', objectFit: 'cover'}} />
          <Carousel.Caption>
            <div className='back-overview mb-3'>
            <h3 className='fs-1'>{banner.title}</h3>
            </div>
            <Button variant="danger" as={Link} to={`/movie/${banner.id}`}>Ver mas</Button>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Banners;