import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Container, Row, Col } from 'react-bootstrap';
import '../MyStory/MyStory.css'

import img1 from '../../assets/story-image1.jpg'
import img2 from '../../assets/story-image2.jpg'
import { FaArrowDown } from "react-icons/fa";

const MyStory = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <section className='my-story bg-black pt-5' id='Story'>
            <Container>
                <Row className="">
                    <Col sm={6} className="d-flex justify-content-center align-items-center" data-aos="fade-right" data-aos-offset="300"
                        data-aos-easing="ease-in-sine">
                        <img src={img1} alt="First" className="img-first img-fluid" />
                    </Col>
                    <Col sm={6} className="d-flex justify-content-center align-items-center" data-aos="fade-left" data-aos-offset="300"
                        data-aos-easing="ease-in-sine">
                        <img src={img2} alt="Second" className="img-second img-fluid my-5" />
                    </Col>
                    <Col className="mt-6 text-start text-white position-relative">
                        <h3 data-aos="fade-right" className='story-text'><span style={{ color: '#FFA300' }}>About</span> Me</h3>
                        <hr data-aos="fade-right" className="my-2" style={{ borderColor: '#fff', width: '10rem' }} />
                        <h2 data-aos="fade-right" className='story-text display-6'>I`m a <span style={{ color: '#FFA300' }}>Frontend Developer</span></h2>
                        <p className='story-text mb-5 fs-6 px-2 pt-4'>Frontend developer I became 2 years ago. Since then, I have been practicing in website development, learning new technologies, and working productively. To achieve my successes, I enrolled in university in the field of "computer engineering" to learn more new things. In this portfolio website, I will show and tell you about my projects, demonstrate my skills, and do everything to impress you.</p>

                        <a href="#Skills" className='blur d-flex flex-column align-items-center text-decoration-none'>
                            <p className='story-text mb-2'>View My Skills</p>
                            <FaArrowDown style={{ color: '#FFA300', fontSize: '35px', }} />
                        </a>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default MyStory;
