import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Header, PageTitle, Footer } from '../components'
import { Link } from 'react-router-dom'
import './pages.css'
import Theme from '../Theme.js';
import './ResumePage.css'
import img1 from '../assets/resumeimg1.png'
import img2 from '../assets/resumeimg2.png'
import img3 from '../assets/resumeimg3.png'
import img4 from '../assets/resumeimg4.png'

const ResumePage = () => {
  return (
      <Theme>
        <div className='Page'>
      <Header />
        <PageTitle title="Resume Writing"/>
      <Container>
        <Row>
            <Col>
            <Link to="/interviewWritingPage">
                <Button className='resumebtn'>Interview Techniques</Button>
            </Link>
            </Col>
        </Row>
        <Row>
             <Col xs={6} sm={6} md={8} lg={10} className='resumebox'>
                <img src={img1} alt="resume image 1" width="600px" height="350px" style={{borderRadius:"30px"}}/>
                <button className='careerinfo-btn'>Crafting the Perfect Resume: Tips for Standing Out to Employers</button>
            </Col>
            <Col xs={6} sm={6} md={8} lg={10} className='resumebox'>
                <img src={img2} alt="resume image 2" width="600px" height="350px"  style={{borderRadius:"30px"}}/>
                <button className='careerinfo-btn'>The Dos and Don'ts of Resume Writing: Common Mistakes to Avoid</button>
            </Col>
            <Col xs={6} sm={6} md={8} lg={10} className='resumebox'>
                <img src={img3} alt="resume image 3" width="600px" height="350px"  style={{borderRadius:"30px"}}/>
                <button className='careerinfo-btn'>Maximizing Your Impact: How to Tailor Your Resume to Each Job Application</button>
            </Col>
            <Col xs={6} sm={6} md={8} lg={10} className='resumebox'>
                <img src={img4} alt="resume image 4" width="600px" style={{borderRadius:"30px"}}/>
                <button className='careerinfo-btn'>From Skills to Success: Highlighting Your Achievements on Your Resume</button>
            </Col>
        </Row>
      </Container>
      <Footer />
    </div>
    </Theme>
  )
}

export default ResumePage
