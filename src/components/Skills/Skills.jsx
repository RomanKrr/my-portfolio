import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Container, Row, Col } from 'react-bootstrap';
import '../Skills/Skills.css'

import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";

const Skills = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <section className='skills bg-black ' id='Skills'>
            <div className="skills-container">
                <h1 data-aos="flip-left" data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000" className='skills-text text-white text-center'>Skills <span style={{ color: '#FFA300' }}>&</span> Experience</h1>
                <p 
                    className='skills-text text-center fz-1 text-white' >Here are all the technologies I've ever worked with. I mainly use HTML, CSS, JS, and practice writing websites in React. I'm always happy to explore new technologies and learn them.</p>
            </div>
            <Container>
                <Row className="g-1  text-white my-5">
                    <Col xs={6} sm={4} md={2} className="text-center" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                        <FaReact className='skills-icon' />
                        <h2>React</h2>
                    </Col>
                    <Col xs={6} sm={4} md={2} className="text-center" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                        <FaHtml5 className='skills-icon' />
                        <h2>HTML</h2>
                    </Col>
                    <Col xs={6} sm={4} md={2} className="text-center" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                        <FaCss3Alt className='skills-icon' />
                        <h2>CSS</h2>
                    </Col>
                    <Col xs={6} sm={4} md={2} className="text-center" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                        <FaBootstrap className='skills-icon' />
                        <h2>Bootstrap</h2>
                    </Col>
                    <Col xs={6} sm={4} md={2} className="text-center" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                        <FaSass className='skills-icon' />
                        <h2>SASS</h2>
                    </Col>
                    <Col xs={6} sm={4} md={2} className="text-center" data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                        <FaFigma className='skills-icon' />
                        <h2>Figma</h2>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Skills