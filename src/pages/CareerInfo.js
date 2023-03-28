import React, { useState } from 'react'
import { Container, Row, Col, Dropdown } from 'react-bootstrap'
import { Header, PageTitle, Footer } from '../components'
import { Link } from 'react-router-dom'

import accounting from '../assets/accounting-systems1.png'
import accounting1 from '../assets/accounting1.png'
import construct from '../assets/construction.jpg'
import technology from '../assets/technologyd.png'

import './pages.css'
import Theme from '../Theme.js';
import './CareerInfo.css'

const CareerInfo = () => {
    const [selectedCategory, setSelectedCategory ] = useState('');

    const handleSelect = (eventKey) => {
        setSelectedCategory(eventKey);
      }

  return (
    <Theme>
        <div className='Page'>
      <Header />
      <PageTitle title="Career Information"/>
      <Container>
      <Row>
        <Col className='careerinfo-h3'>
            <h3>Pick an industry</h3>
        </Col>
      </Row>
      <Row>
        <Col>
        <Dropdown onSelect={handleSelect}>
      <Dropdown.Toggle variant="secondary" id="dropdown-basic" className='filter'>
        Filter by Industry
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item eventKey="">All Industry</Dropdown.Item>
        <Dropdown.Item eventKey="Acc">Accounting</Dropdown.Item>
        <Dropdown.Item eventKey="Tech">Science & Technology</Dropdown.Item>
        <Dropdown.Item eventKey="Construct">Construction</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
        </Col>
      </Row>
        <Row>
             <Col md={5} className='careerbox'>
                <img src={accounting1} alt="accounting image" width="432px" height="301px" borderRadius="53px"/>
                <Link to="/accountantInfo">
                    <button className='careerinfo-btn'>Accountant</button>
                </Link>
            </Col>
            <Col md={5} className='careerbox'>
                <img src={accounting} alt="accounting image" width="432px" height="301px" borderRadius="53px"/>
                <button className='careerinfo-btn'>Account Assistant</button>
            </Col>
            <Col md={5} className='careerbox'>
                <img src={construct} alt="construction image" width="432px" height="301px" borderRadius="53px"/>
                <button className='careerinfo-btn'>Constructor</button>
            </Col>
            <Col md={5} className='careerbox'>
                <img src={technology} alt="technology image" width="432px" height="301px" borderRadius="53px"/>
                <button className='careerinfo-btn'>AI Engineer</button>
            </Col>
        </Row>
      </Container>
      <Footer />
    </div>
    </Theme>
  )
}

export default CareerInfo