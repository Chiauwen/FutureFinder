
import { Container} from 'react-bootstrap';
import styled from 'styled-components'
import Theme from '../Theme.js';
import { Header, GoBack, Chat, Footer} from '../components';

const Wrapper = styled.div`
  background-color: white;
  border:5px;
  margin: 30px 0;
`;

const Test = styled.div`
  padding-top: 130px;
`;

const ChatPage = () => {
  return (
    <Theme>
      <Test className='Page'>
        <Container>
          <Header />
          <GoBack route="/" />
          <Wrapper>
            <Chat />
          </Wrapper>
        </Container>
        <Footer />
      </Test>
    </Theme>
  );
};

export default ChatPage;
