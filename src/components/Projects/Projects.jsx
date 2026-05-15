import React, { useEffect, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../Projects/Projects.css'
import { Container, Row, Col, Card, Img, Button } from 'react-bootstrap';


import style_loom from '../../assets/style_loom.jpg'
import ryzanova from '../../assets/ryzanova.jpg'
import STUDZENKA from '../../assets/STUDZENKA.jpg'
import vendy from '../../assets/vendy.jpg'

import img0 from '../../assets/summoist.jpg'
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


import img11 from '../../assets/summoist_img/photo_11.jpg'
import img12 from '../../assets/summoist_img/photo_10.jpg'
import img13 from '../../assets/summoist_img/photo_9.jpg'
import img14 from '../../assets/summoist_img/photo_8.jpg'
import img15 from '../../assets/summoist_img/photo_7.jpg'
import img16 from '../../assets/summoist_img/photo_6.jpg'
import img17 from '../../assets/summoist_img/photo_5.jpg'
import img18 from '../../assets/summoist_img/photo_4.jpg'
import img19 from '../../assets/summoist_img/photo_3.jpg'
import img20 from '../../assets/summoist_img/photo_2.jpg'
import img21 from '../../assets/summoist_img/photo_1.jpg'


import { BsArrowUpRightCircleFill } from "react-icons/bs";
import Modal from '../Modal/Modal';

const Projects = () => {
    const projectImages = [
        img11,
        img12,
        img13,
        img14,
        img15,
        img16,
        img17,
        img18,
        img19,
        img20,
        img21
    ];
    const [showModal, setShowModal] = useState(false);

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
                            <a href="https://heroic-axolotl-9ae6ea.netlify.app/">
                                <Card.Img
                                    variant='top'
                                    src={STUDZENKA}
                                    className='position-relative'
                                />
                                <div className="project-text card-overlay">
                                    <span className='fs-5'>Перейти</span>
                                </div>
                                <Card.Body className='d-flex justify-content-center py-1'>
                                    <Card.Title className="project-text text-black">
                                        STUDZENKA
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
                            <a href="https://cheerful-hummingbird-2aafe1.netlify.app/">
                                <Card.Img
                                    variant='top'
                                    src={style_loom}
                                    className='position-relative'
                                />
                                <div className="project-text card-overlay">
                                    <span className='fs-5'>Перейти</span>
                                </div>
                                <Card.Body className='d-flex justify-content-center py-1'>
                                    <Card.Title className="project-text text-black">
                                        Style.Loom
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
                            <a href="https://lovely-sprinkles-fd7732.netlify.app/">
                                <Card.Img
                                    variant='top'
                                    src={vendy}
                                    className='position-relative'
                                />
                                <div className="project-text card-overlay">
                                    <span className='fs-5'>Перейти</span>
                                </div>
                                <Card.Body className='d-flex justify-content-center py-1'>
                                    <Card.Title className="project-text text-black">
                                        Vendy
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
                    <Col xs={6} sm={4} md={4} className="text-center">
                        <Card data-aos="zoom-in" data-aos-duration="1300">
                            <button onClick={() => setShowModal(true)} style={{ border: 'none', background: 'none', padding: 0, cursor: 'pointer' }}>
                                <Card.Img
                                    variant='top'
                                    src={img0}
                                    className='position-relative'
                                />
                                <div className="project-text card-overlay">
                                    <span className='fs-5'>Перейти</span>
                                </div>
                                <Card.Body className='d-flex justify-content-center py-1'>
                                    <Card.Title className="project-text text-black">
                                        SUMMOIST
                                    </Card.Title>
                                    {/* <Button className='card-button'>
                                        <BsArrowUpRightCircleFill />
                                    </Button> */}
                                </Card.Body>
                            </button>
                        </Card>
                    </Col>
                    <Col xs={6} sm={4} md={4} className="text-center">
                        <Card data-aos="zoom-in" data-aos-duration="1300">
                            <a href="https://relaxed-cendol-5dbedf.netlify.app/">
                                <Card.Img
                                    variant='top'
                                    src={ryzanova}
                                    className='position-relative'
                                />
                                <div className="project-text card-overlay">
                                    <span className='fs-5'>Перейти</span>
                                </div>
                                <Card.Body className='d-flex justify-content-center py-1'>
                                    <Card.Title className="project-text text-black">
                                        RYAZANOVA
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
                            <a href="#">
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
                            <a href="#">
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
                </Row>
                <Modal
                    isOpen={showModal}
                    onClose={() => setShowModal(false)}
                    images={projectImages}
                />
            </Container>
        </section>
    )
}

export default Projects