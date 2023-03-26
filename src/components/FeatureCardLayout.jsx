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
    route: 'https://via.placeholder.com/300'
  },
  {
    index: 2,
    title: 'Mock Interview',
    description: 'Practice your next interview with an AI',
    route: 'https://via.placeholder.com/300'
  },
  {
    index: 3,
    title: 'Resume Writing',
    description: 'Find out how to make your resume stand out',
    route: 'https://via.placeholder.com/300'
  },
  {
    index: 4,
    title: 'Interview Techniques',
    description: 'Nail your interview with advice from experts',
    route: 'https://via.placeholder.com/300'
  },
  {
    index: 5,
    title: 'Chat With Professional',
    description: 'Get valuable advises from industry professional',
    route: 'https://via.placeholder.com/300'
  },
  {
    index: 6,
    title: 'Salary Calculator ',
    description: 'Get what you deserved based on the market',
    route: 'https://via.placeholder.com/300'
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