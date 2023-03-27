
import { Container} from 'react-bootstrap';
// import styled from 'styled-components';
import { Header, GoBack, Chat } from '../components';

const ChatPage = () => {
  return (
    <div className='Page'>
      <Container>
        <Header />
        <GoBack route="/" />
        <Chat />
      </Container>
    </div>
  );
};

export default ChatPage;
