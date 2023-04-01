import React from 'react';
import { Container, Row } from 'react-bootstrap';
import FeatureCard from './FeatureCard';

// import styled from 'styled-components'
// import Theme from '../Theme.js';

const data = [
  {
    index: 1,
    title: 'Career Path Analysis',
    description: 'Check what kind of career path suits you',
    route: '/analysis'
  },
  {
    index: 2,
    title: 'Mock Interview',
    description: 'Practice your next interview with an AI',
    route: '/mockCover'
  },
  {
    index: 3,
    title: 'Resume Writing',
    description: 'Find out how to make your resume stand out',
    route: '/ResumePage'
  },
  {
    index: 4,
    title: 'Interview Techniques',
    description: 'Nail your interview with advice from experts',
    route: '/InterviewWritingPage'
  },
  {
    index: 5,
    title: 'Chat With Professional',
    description: 'Get valuable advises from industry professional',
    route: '/professional'
  },
  {
    index: 6,
    title: 'Upcoming Courses',
    description: 'Join courses offered this month by our professionals',
    route: '/coursePage'
  },
  {
    index: 7,
    title: 'Salary Calculator ',
    description: 'Get what you deserved based on the market',
    route: '/SalaryCalculator'
  },
  {
    index: 8,
    title: 'Company Review',
    description: 'Check what the others think about the company',
    route: '/CompanyPage'
  },
  {
    index: 9,
    title: 'Career Path Information',
    description: 'Check out details of different careers',
    route: '/careerInfo'
  }
]

const FeatureCardLayout = () => {
  return (
    <Container>
      <Row>
        {data.map(card => (
          <FeatureCard
            index = {(card.index%2)}
            title={card.title}
            description={card.description}
            route={card.route}
          />
        ))}
      </Row>
    </Container>
  );
}

export default FeatureCardLayout;