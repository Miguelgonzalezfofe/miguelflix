import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { fetchGenero } from '../utils/Api';
import { useEffect, useState } from 'react';

function Header() {
    const [generosMovie, setGenerosMovie] = useState([]);
    const [generosSeries, setGenerosSeries] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchGenero("movie");
            setGenerosMovie(data);
        };
        const fetchDataSeries = async () => {
            const data = await fetchGenero('tv');
            setGenerosSeries(data);
        };
        fetchData();
        fetchDataSeries();
    }, []);

    return (
        <Navbar expand="lg" className="position-fixed w-100 top-0 start-0" >
            <Container>
                <Navbar.Brand as={Link} to="/" className='text-danger'>MiguelFlix</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <i className="bi bi-list" style={{ color: 'white' }}></i>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/">Inicio</Nav.Link>
                        <Nav.Link as={Link} to="/movies">Películas</Nav.Link>
                        <Nav.Link as={Link} to="/series">Series</Nav.Link>
                        <Nav.Link as={Link} to="/">Mi Lista</Nav.Link>

                        <NavDropdown title="Categorias" id="basic-nav-dropdown">

                            <NavDropdown title="peliculas" id="basic-nav-dropdown">
                                {generosMovie.map((genero) => (
                                    <NavDropdown.Item key={genero.id} as={Link} to={`/movie/genero/${genero.id}`}>
                                        {genero.name}
                                    </NavDropdown.Item>
                                ))}
                            </NavDropdown>

                            <NavDropdown title="series" id="basic-nav-dropdown-series">
                                {generosSeries.map((genero) => (
                                    <NavDropdown.Item key={genero.id} as={Link} to={`/tv/genero/${genero.id}`}>
                                        {genero.name}
                                    </NavDropdown.Item>
                                ))}
                            </NavDropdown>

                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;