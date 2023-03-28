import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Footer, Header, PageTitle } from '../components'
import Theme from '../Theme'
import './Workshop.css';
import careerclip from '../assets/clip-career-boost1.png'

const Workshop = () => {
  return (
    <Theme>
    <div className='Page'>
        <Header />
        <PageTitle title="Upcoming Workshop" />
        <Container>
            <Row>
                <Col md={6}>
                    <img src={careerclip} alt="problemsolving"/>
                </Col>
                <Col md={6}>
                <h3 className='workshop-heading'>Career Development Workshop</h3>
                <p className='workshop-description'>Our career development workshop help you to understand what drives in careers, and what actions to take to be proactive about lifelong learning, gaining critical experiences and skills for the future.</p>
                <p className='workshop-description'>Date: 2 May 2023, Tuesday</p>
                <p className='workshop-description'>Time: 8am to 5pm</p>
                <p className='workshop-description'>Venue: MITC Melaka</p>
                </Col>
            </Row>
            <Row>
                <button className="joinbtn">Join Now</button>
            </Row>
        </Container>
        <Footer />
    </div>
    </Theme>
  )
}

export default Workshop
