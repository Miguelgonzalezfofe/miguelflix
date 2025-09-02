// Footer.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaExternalLinkAlt, FaEnvelope, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-dark text-white pt-5 pb-4">
            <Container>
                <Row className="text-center text-md-left">
                    <Col md={3} lg={3} xl={3} className="mx-auto mt-3">
                        <h5 className="text-uppercase mb-4 font-weight-bold text-danger">
                            Miguelflix
                        </h5>
                        <p>
                            Proyecto Desarrollado con ReactJS y Bootstrap. Realiza consultas de películas y series gracias a la API de TSDB.
                        </p>
                    </Col>

                    <hr className="w-100 clearfix d-md-none" />

                    <Col md={2} lg={2} xl={2} className="mx-auto mt-3">
                        <h6 className="text-uppercase mb-4 font-weight-bold">Enlaces</h6>
                        <p><a href="https://www.miguelgfcode.com" target='_blank' className="text-white" style={{ textDecoration: 'none' }}>Sobre mi</a></p>
                        <p><a href="https://developer.themoviedb.org/docs/getting-started" target='_blank' className="text-white" style={{ textDecoration: 'none' }}>Documentación de la API de TSDB</a></p>
                    </Col>

                    <hr className="w-100 clearfix d-md-none" />

                    <Col md={3} lg={2} xl={2} className="mx-auto mt-3">
                        <h6 className="text-uppercase mb-4 font-weight-bold">Más</h6>
                        <p>
                            <a href="https://miguelgfcode.com" target="_blank" rel="noopener noreferrer" className="text-white" style={{ textDecoration: 'none' }}>
                                <FaExternalLinkAlt className="me-2" /> Mi Portafolio
                            </a>
                        </p>
                        <p>
                            <a href="https://github.com/Miguelgonzalezfofe/miguelflix" target="_blank" rel="noopener noreferrer" className="text-white" style={{ textDecoration: 'none' }}>
                                <FaGithub className="me-2" /> Repositorio
                            </a>
                        </p>
                        <p>
                            <a href="https://www.miguelgfcode.com/index.html#contacto" target='_blank' className="text-white" style={{ textDecoration: 'none' }}>Ayuda</a>
                        </p>
                    </Col>

                    <hr className="w-100 clearfix d-md-none" />

                    <Col md={4} lg={3} xl={3} className="mx-auto mt-3">
                        <h6 className="text-uppercase mb-4 font-weight-bold">Contáctame</h6>
                        <p>
                            <FaEnvelope className="me-3" /> 247mmgg@gmail.com
                        </p>
                        <p>
                            <i className="fas fa-home me-3"></i> Buenos Aires, Argentina
                        </p>
                    </Col>
                </Row>

                <hr className="my-3" />

                <Row className="align-items-center">
                    <Col md={7} lg={8}>
                        <p className="text-center text-md-start mb-0">
                            <a href="https://www.miguelgfcode.com" target='_blank' className="text-white" style={{ textDecoration: 'none' }}>
                                <strong className="ms-2">Desarrollado por Miguel González</strong>
                            </a>
                        </p>
                    </Col>
                    <Col md={5} lg={4} className="text-center text-md-end mt-2 mt-md-0">
                        <a href="https://github.com/Miguelgonzalezfofe" target='_blank' className="text-white" style={{ textDecoration: 'none' }}>
                            <FaGithub className="me-2 fs-2" />
                        </a>
                        <a href="https://www.linkedin.com/in/miguel-eduardo-gonzalez-fofe-07392b187/" target='_blank' className="text-white" style={{ textDecoration: 'none' }}>
                            <FaLinkedin className="me-2 fs-2" />
                        </a>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;