import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <Navbar expand="lg" className="position-fixed w-100 top-0 start-0" >
            <Container>
                <Navbar.Brand as={Link} to="/" className='text-danger'>MiguelFlix</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <i className="bi bi-list" style={{color: 'white'}}></i>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/">Inicio</Nav.Link>
                        <Nav.Link as={Link} to="/movies">Películas</Nav.Link>
                        <Nav.Link as={Link} to="/series">Series</Nav.Link>
                        <Nav.Link as={Link} to="/">Mi Lista</Nav.Link>

                        <NavDropdown title="Categorias" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/">Acción</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/">
                                Otra acción
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/">Algo más</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to="/">
                                Enlace separado
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;