import React from 'react';
import { Container, Row } from 'react-bootstrap';
import PackageCard from './PackageCard';

// import styled from 'styled-components'
// import Theme from '../Theme.js';

const data = [
  {
    title: 'Free',
    description: ['Resume Writing', 'Interview Techniques', 'Career Path Analysis', 'Online Workshop', 'Career Path Information'],
    button: "Register",
    route: 'https://via.placeholder.com/300'
  },
  {
    title: 'Premium',
    description: ['AI-based Mock Interview','Chat With Industrial Professional','1-on-1 Mentorship'],
    button: "Subscribe Now",
    route: 'https://via.placeholder.com/300'
  }
]

const PackageCardLayout = () => {
  return (
    <Container>
      <Row className="justify-content-md-center my-5">
        {data.map(card => (
          <PackageCard
            title={card.title}
            description={card.description}
            route={card.route}
            button={card.button}
          />
        ))}
      </Row>
    </Container>
  );
}

export default PackageCardLayout;