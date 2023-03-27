import React from 'react';
import { Container, Row, Col, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Theme from '../Theme.js';
import styled from 'styled-components';
import logo from '../assets/logo.png';

const StyledFooter = styled.footer`
background-color: ${props => props.theme.colors.bubbles};
  padding: 20px 0;
  margin-top: 100px;
`;

const StyledLink = styled(Link)`
  color: #212529;
  text-decoration: none;

  &:hover {
    color: #6c757d;
  }
`;

const Logo = styled.img`
  height: 90px;
  width: 350px;
`;

function Footer() {
  return (
    <Theme>
        
    <StyledFooter>
      <Container>
        <Row>
          <Col sm={4}>
          <Navbar.Brand as={Link} to='/' className="d-flex justify-content-center">
              <Logo src={logo} alt="Logo" />
            </Navbar.Brand>
          </Col>
          <Col sm={5}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><StyledLink to="/">Home</StyledLink></li>
              <li><StyledLink to="/analysis">Career Path Analysis</StyledLink></li>
              <li><StyledLink to="/professional">Chat With Professional and 1-1 Coaching</StyledLink></li>
              <li><StyledLink to="/mockCover">AI Mock Interview</StyledLink></li>
            </ul>
          </Col>
          <Col sm={3}>
            <h5>Contact Us</h5>
            <address>
              123 Main Street<br />
              Suite 100<br />
              Anytown, USA 12345<br />
              <br />
              <abbr title="Phone">P:</abbr> (123) 456-7890
            </address>
          </Col>
        </Row>
      </Container>
    </StyledFooter>
    </Theme>
  );
}

export default Footer;
