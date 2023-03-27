import React from 'react'

import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import { Header, PageTitle, MockResultFooter } from '../components';

import Theme from '../Theme.js';
import './pages.css';
import './MockResultPage.css'

import problemsolving from '../assets/clip-problem-solving2.png';

const MockResultPage = () => {
  return (
    <div className='Page'>
      <Header />
      <PageTitle title="Mock Interview Result" />
      <Theme>
        <Container>
            <Row>
                <Col md={6}>
                    <img src={problemsolving} alt="problemsolving"/>
                </Col>
                <Col md={6}>
                <h3>87% Overall Performance</h3>
                <p>Ways to improve overall performance:</p>
                <ul>
                    <li>Practice good nonverbal communication</li>
                    <li>Ask questions</li>
                    <li>Be confident</li>
                </ul>
                </Col>
            </Row>
        </Container>
        <MockResultFooter totalPages={3} currentPage={0} />
      </Theme>
      </div>
  )
}

export default MockResultPage
