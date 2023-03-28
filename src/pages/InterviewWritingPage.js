import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Header, PageTitle, Footer } from '../components'
import { Link } from 'react-router-dom'
import './pages.css'
import Theme from '../Theme.js';
import './ResumePage.css'
import a1 from '../assets/a1.png'
import b1 from '../assets/b1.png'
import c1 from '../assets/c1.png'
import d1 from '../assets/d1.png'

const InterviewWritingPage = () => {
  return (
    <Theme>
    <div className='Page'>
  <Header />
    <PageTitle title="Interview Techniques"/>
  <Container>
    <Row>
        <Col>
        <Link to="/resumePage">
            <Button className='resumebtn'>Resume Writing</Button>
        </Link>
        </Col>
    </Row>
    <Row>
         <Col xs={6} sm={6} md={8} lg={10} className='resumebox'>
            <img src={a1} alt="interview writing image 1" width="600px" height="400px" style={{borderRadius:"30px"}}/>
            <button className='careerinfo-btn'>Top 10 Interview Mistakes and How to Avoid Them</button>
        </Col>
        <Col xs={6} sm={6} md={8} lg={10} className='resumebox'>
            <img src={b1} alt="interview writing 2" width="600px" height="360px"  style={{borderRadius:"30px"}}/>
            <button className='careerinfo-btn'>How to Answer the "Tell Me About Yourself" Question in an Interview</button>
        </Col>
        <Col xs={6} sm={6} md={8} lg={10} className='resumebox'>
            <img src={c1} alt="interview writing 3" width="600px" height="400px"  style={{borderRadius:"30px"}}/>
            <button className='careerinfo-btn'>The STAR Method: A Guide to Answering Behavioral Interview Questions</button>
        </Col>
        <Col xs={6} sm={6} md={8} lg={10} className='resumebox'>
            <img src={d1} alt="interview writing 4" width="600px" height="360px" style={{borderRadius:"30px"}}/>
            <button className='careerinfo-btn'>Body Language and the Job Interview: How to Use Nonverbal Communication to Ace Your Interview</button>
        </Col>
    </Row>
  </Container>
  <Footer />
</div>
</Theme>
  )
}

export default InterviewWritingPage
