import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import item1 from '../assets/carousel1.png';

import styled from 'styled-components'
import Theme from '../Theme.js';

const Margin = styled(Carousel)`
  margin: 40px 0;
`;

function WorkshopCarousel() {
  return (
    <Theme>
      <Container>
        <Margin>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={item1}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={item1}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={item1}
              alt="Third slide"
            />
          </Carousel.Item>
        </Margin>
      </Container>
    </Theme>
  );
}

export default WorkshopCarousel;