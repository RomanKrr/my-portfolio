import React, { useEffect } from 'react'
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
import img7 from '../../assets/photo_2025-02-11_00-20-51.jpg'
import img8 from '../../assets/photo_2025-02-11_00-51-52.jpg'
import img9 from '../../assets/photo_2025-02-11_00-57-04.jpg'
import img10 from '../../assets/photo_2025-02-11_01-03-20.jpg'

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
                        <Card data-aos="zoom-in" data-aos-duration="1300">
                            <a href="">
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
                        <Card data-aos="zoom-in" data-aos-duration="1300">
                            <a href="https://kw-vv81.onrender.com">
                                <Card.Img
                                    variant='top'
                                    src={img8}
                                    className='position-relative'
                                />
                                <div className="project-text card-overlay">
                                    <span className='fs-5'>Перейти</span>
                                </div>
                                <Card.Body className='d-flex justify-content-center py-1'>
                                    <Card.Title className="project-text text-black">
                                        Tuning Atelier
                                    </Card.Title>
                                    {/* <Button className='card-button'>
                                        <BsArrowUpRightCircleFill />
                                    </Button> */}
                                </Card.Body>
                            </a>
                        </Card>
                    </Col>
                    <Col xs={6} sm={4} md={4} className="text-center">
                        <Card data-aos="zoom-in" data-aos-duration="1300">
                            <a href="">
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
                        <Card data-aos="zoom-in" data-aos-duration="1300">
                            <a href="https://whimsical-kringle-d4b5d0.netlify.app/">
                                <Card.Img
                                    variant='top'
                                    src={img7}
                                    className='position-relative'
                                />
                                <div className="project-text card-overlay">
                                    <span className='fs-5'>Перейти</span>
                                </div>
                                <Card.Body className='d-flex justify-content-center py-1'>
                                    <Card.Title className="project-text text-black">
                                        ThreeJs Garage
                                    </Card.Title>
                                    {/* <Button className='card-button'>
                                        <BsArrowUpRightCircleFill />
                                    </Button> */}
                                </Card.Body>
                            </a>
                        </Card>
                    </Col>
                    <Col xs={6} sm={4} md={4} className="text-center">
                        <Card data-aos="zoom-in" data-aos-duration="1300">
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
                        <Card data-aos="zoom-in" data-aos-duration="1300">
                            <a href="https://profound-otter-0fcda0.netlify.app/">
                                <Card.Img
                                    variant='top'
                                    src={img9}
                                    className='position-relative'
                                />
                                <div className="project-text card-overlay">
                                    <span className='fs-5'>Перейти</span>
                                </div>
                                <Card.Body className='d-flex justify-content-center py-1'>
                                    <Card.Title className="project-text text-black">
                                        StrideTm
                                    </Card.Title>
                                    {/* <Button className='card-button'>
                                        <BsArrowUpRightCircleFill />
                                    </Button> */}
                                </Card.Body>
                            </a>
                        </Card>
                    </Col>
                    <Col xs={6} sm={4} md={4} className="text-center">
                        <Card data-aos="zoom-in" data-aos-duration="1300">
                            <a href="https://try-8uqs.onrender.com/">
                                <Card.Img
                                    variant='top'
                                    src={img10}
                                    className='position-relative'
                                />
                                <div className="project-text card-overlay">
                                    <span className='fs-5'>Перейти</span>
                                </div>
                                <Card.Body className='d-flex justify-content-center py-1'>
                                    <Card.Title className="project-text text-black">
                                        ElectronicMagazine
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