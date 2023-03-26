import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';
import { Header, PageTitle} from '../components';
import styled from 'styled-components'
import Theme from '../Theme.js';
import imageSrc from '../assets/analysisResult.png';

const Img = styled.img`
  width: 650px;
`;

const Title = styled.p`
  font-size: ${props => props.theme.fontSizes.large};
  font-weight: ${props => props.theme.fontWeights.black};
  font-family: ${props => props.theme.fonts};
  color: ${props => props.theme.colors.grape};
  text-align: center;

  ${props => props.theme.breakpoints.down('lg')} {
    font-size: ${props => props.theme.fontSizes.medium};
  }
`;

const Description = styled.p`
  font-size: 25px;
  text-align: center;
  font-weight: ${props => props.theme.fontWeights.semiBold};
  color: ${props => props.theme.colors.rhythm};
  text-align: left;
`;

const Bold = styled.b`
  color: ${props => props.theme.colors.pink};
`;

const AnalysisPage = () => {
  return (
    <div className="Page">
      <Header />
      <PageTitle title="Career Path Analysis Result"/>
      <Theme>
        <Container>
          <Row>
            <Col md={6}>
                <Img src={imageSrc} alt="graphic image" />
            </Col>
            <Col md={6}>
                <Title>Medical Field</Title>
                <Description>
                Based on your answers, our analysis suggests that you have a strong interest in the <Bold>medical field</Bold>. 
                Some potential career paths for you could include becoming a <Bold>doctor, nurse, physician assistant, or medical researcher</Bold>. 
                You may also want to consider pursuing further education and training in areas such as <Bold>biology, chemistry, or anatomy</Bold>.
                </Description>
            </Col>
          </Row>
        </Container>
      </Theme>
    </div>
  )
}

export default AnalysisPage;