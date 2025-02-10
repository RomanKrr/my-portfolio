import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import '../Form/Form.css'

const MyForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [project, setProject] = useState('');
    const [age, setAge] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Додаткові дії з даними форми, наприклад, відправлення на сервер
        console.log('Submitted:', { name, email, project, age });
    };
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <section className='form' id='Contacts'>
            <Container>
                <h1 data-aos="fade-up" className='skills-text text-white text-center'>If you are interested, You can <span style={{ color: '#FFA300' }}>hire me.</span></h1>
                <Form onSubmit={handleSubmit} className='my-5 text-white'>
                    <Row>
                        <Col>
                            <Form.Group controlId="formName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    size="sm"
                                    type="text"
                                    placeholder="Enter your name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="formAge">
                                <Form.Label>Age</Form.Label>
                                <Form.Control
                                    size="sm"
                                    type="number"
                                    placeholder="Age"
                                    value={age}
                                    onChange={(e) => setAge(e.target.value)}
                                    min={15}
                                    max={150}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className='mt-3'>
                        <Col>
                            <Form.Group controlId="formEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    size="sm"
                                    type="email"
                                    placeholder="Enter email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className='mt-3'>
                        <Col>
                            <Form.Group controlId="formDescr">
                                <Form.Label>What`s your project?</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    type="text"
                                    placeholder="Describe project"
                                    value={project}
                                    onChange={(e) => setProject(e.target.value)}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Button
                        className='form-btn-submit mt-4 bg-black w-100'
                        style={{ borderColor: '#FFA300' }}
                        variant="primary"
                        type="submit"
                        size="lg">
                        Submit
                    </Button>
                </Form>
            </Container>
        </section>
    );
};

export default MyForm;