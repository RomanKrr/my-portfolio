import React, {useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../Projects/Projects.css'
import { Container, Row, Col, Card, Img, Button } from 'react-bootstrap';

import img1 from '../../assets/furniture.png'
import img2 from '../../assets/vr.png'
import img3 from '../../assets/Good.png'
import img4 from '../../assets/watch.png'
import img5 from '../../assets/cars.png'
import img6 from '../../assets/block.jpg'

import { BsArrowUpRightCircleFill } from "react-icons/bs";

const Projects = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <section className='projects bg-black' id='Projects'>
            <h1 data-aos="zoom-in-up" className='project-text text-white text-center'><span style={{ color: '#FFA300' }}>Explore</span> My<br />Personal <span style={{ color: '#FFA300' }}>Projects</span></h1>
            <Container>
                <Row className="g-3  text-white my-5">
                    <Col xs={6} sm={4} md={4} className="text-center">
                        <Card data-aos="zoom-in">
                            <a href="/link-to-some-page">
                                <Card.Img
                                    variant='top'
                                    src={img1}
                                    className='position-relative'
                                />
                                <div className="project-text card-overlay">
                                    <span className='fs-5'>Перейти</span>
                                </div>
                                <Card.Body className='d-flex justify-content-center py-1'>
                                    <Card.Title className="project-text text-black">
                                        Home Furniture
                                    </Card.Title>
                                    {/* <Button className='card-button'>
                                        <BsArrowUpRightCircleFill />
                                    </Button> */}
                                </Card.Body>
                            </a>
                        </Card>
                    </Col>
                    <Col xs={6} sm={4} md={4} className="text-center">
                        <Card data-aos="zoom-in">
                            <a href="https://romankrr.github.io/name/">
                                <Card.Img
                                    variant='top'
                                    src={img2}
                                    className='position-relative'
                                />
                                <div className="project-text card-overlay">
                                    <span className='fs-5'>Перейти</span>
                                </div>
                                <Card.Body className='d-flex justify-content-center py-1'>
                                    <Card.Title className="project-text text-black">
                                        VR Hydra
                                    </Card.Title>
                                    {/* <Button className='card-button'>
                                        <BsArrowUpRightCircleFill />
                                    </Button> */}
                                </Card.Body>
                            </a>
                        </Card>
                    </Col>
                    <Col xs={6} sm={4} md={4} className="text-center">
                        <Card data-aos="zoom-in">
                            <a href="/link-to-some-page">
                                <Card.Img
                                    variant='top'
                                    src={img3}
                                    className='position-relative'
                                />
                                <div className="project-text card-overlay">
                                    <span className='fs-5'>Перейти</span>
                                </div>
                                <Card.Body className='d-flex justify-content-center py-1'>
                                    <Card.Title className="project-text text-black">
                                        GooD4Me
                                    </Card.Title>
                                    {/* <Button className='card-button'>
                                        <BsArrowUpRightCircleFill />
                                    </Button> */}
                                </Card.Body>
                            </a>
                        </Card>
                    </Col>
                    <Col xs={6} sm={4} md={4} className="text-center">
                        <Card data-aos="zoom-in">
                            <a href="https://romankrr.github.io/watch-site/">
                                <Card.Img
                                    variant='top'
                                    src={img4}
                                    className='position-relative'
                                />
                                <div className="project-text card-overlay">
                                    <span className='fs-5'>Перейти</span>
                                </div>
                                <Card.Body className='d-flex justify-content-center py-1'>
                                    <Card.Title className="project-text text-black">
                                        Watch
                                    </Card.Title>
                                    {/* <Button className='card-button'>
                                        <BsArrowUpRightCircleFill />
                                    </Button> */}
                                </Card.Body>
                            </a>
                        </Card>
                    </Col>
                    <Col xs={6} sm={4} md={4} className="text-center">
                        <Card data-aos="zoom-in">
                            <a href="https://romankrr.github.io/watch-site/">
                                <Card.Img
                                    variant='top'
                                    src={img5}
                                    className='position-relative'
                                />
                                <div className="project-text card-overlay">
                                    <span className='fs-5'>Перейти</span>
                                </div>
                                <Card.Body className='d-flex justify-content-center py-1'>
                                    <Card.Title className="project-text text-black">
                                        Cars Auction
                                    </Card.Title>
                                    {/* <Button className='card-button'>
                                        <BsArrowUpRightCircleFill />
                                    </Button> */}
                                </Card.Body>
                            </a>
                        </Card>
                    </Col>
                    <Col xs={6} sm={4} md={4} className="text-center">
                        <Card data-aos="zoom-in">
                            <a href="https://romankrr.github.io/watch-site/">
                                <Card.Img
                                    variant='top'
                                    src={img6}
                                    className='position-relative'
                                />
                                <div className="project-text card-overlay">
                                    <span className='fs-5'>Перейти</span>
                                </div>
                                <Card.Body className='d-flex justify-content-center py-1'>
                                    <Card.Title className="project-text text-black">
                                        Block Sheme Generator
                                    </Card.Title>
                                    {/* <Button className='card-button'>
                                        <BsArrowUpRightCircleFill />
                                    </Button> */}
                                </Card.Body>
                            </a>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Projects