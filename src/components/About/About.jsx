import React, { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Typed from 'typed.js';
import { Button, Container, Stack } from 'react-bootstrap';
import me from '../../assets/my-main-image.jpg'
import '../About/About.css'


const TypedText = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const typedTextRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["<span style='color: #FFA300'>Hi</span>, There !<br />\nI'm Roman Kucher,<br />\nand I'm a <span style='color: #FFA300'>Frontend Developer</span>"],
      typeSpeed: 70,
      loop: true,
      smartBackspace: true,
      showCursor: true,
      backSpeed: 50,
      onComplete: (self) => {
        setTimeout(() => {
          self.stop();
          setTimeout(() => {
            self.start();
          }, 3000);
        }, 0);
      },
    };

    const typed = new Typed(typedTextRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return <span ref={typedTextRef}></span>;
};

const About = () => {
  return (
    <section className='about' id='About'>
      <Container className='first-page d-flex justify-content-between align-items-center'>
        <h1  className="main-text-about fs-1 text-start">
          <TypedText />
        </h1>
        <img
          src={me}
          alt=""
          className='main-image'
          data-aos="fade-up-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        />
      </Container>
      <div className='yellow-line'></div>
    </section >
  );
};

export default About;
