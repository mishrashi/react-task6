import React from 'react'
import '../../pages/style.css';
import { Container, Row, Col } from 'react-bootstrap'


function Aboutpage() {
    return (
        <div className='aboutpagebackground'>
            <Container>
                <Row className='textbackground'>
                    <Col md={7} >
                        <h3 className='aboutmetext'>About<span>Me</span></h3>
                        <p className='aboutdetails'>As a third-year student pursuing a B.Tech in Computer Science and Engineering with a core focus on Java and Full Stack web development, My journey in computer science has been nothing short of exciting as I have dived into various areas of coding, I constantly strive to push my boundaries and broaden my horizon.
                        </p>
                        
                        <h3 className='aboutmetext'>Skills</h3>
                            <h6 className='aboutdetails'>HTML/CSS</h6>
                            <h6 className='aboutdetails'>JavaScript</h6>
                            <h6 className='aboutdetails'>Node js</h6>
                            <h6 className='aboutdetails'>MYSQL</h6>
                            <h6 className='aboutdetails'>React Js</h6>
                    </Col>
                    <Col md={5}>
                        <div className="webimage"></div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Aboutpage;