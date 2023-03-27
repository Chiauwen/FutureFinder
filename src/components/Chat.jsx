import { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import styled from 'styled-components'
import Theme from '../Theme.js';

// Styles for chat messages
const ChatBox = styled.div`
  background-color: ${props => props.theme.colors.rhythm};
  border-radius: 5px;
  margin: 20px;
  border: white;
  max-width: 100%;
  align-self: ${props => props.isMe ? "flex-end" : "flex-start"};
`;

const ChatHeader = styled.div`
  background-color: white;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: ${props => props.theme.colors.rhythm};
  font-size: 14px;
  font-weight: ${props => props.theme.fontWeights.bold};
  padding: 10px;
`;

const ChatMessage = styled.p`
  margin: 10px;
  overflow-wrap: break-word;
  border-radius: 5px;
  color: ${props => props.theme.colors.bubbles};
  font-family: ${props => props.theme.fonts};
  font-size: ${props => props.theme.fontSizes.small};
`;

const TextBox = styled(Form.Group)`
  width: 100%;
`;

const Send = styled(Button)`
  background-color: ${props => props.theme.colors.rhythm};
  font-family: ${props => props.theme.fonts};
  font-size: 15px;
  padding: 0 30px;
  font-weight: ${props => props.theme.fontWeights.bold} !important;
  border: ${props => props.theme.colors.rhythm};

  &:hover, &:active{
    background-color: ${props => props.theme.colors.pink} !important;
    border: ${props => props.theme.colors.pink} !important;
  }
`;

const Chat = () => {
  const [chatMessages, setChatMessages] = useState([
    { name: 'Me', isMe:true, message: "Hi, I'm interested in pursuing a career in UI design. Can you tell me a little about what it entails?", time: '12:30 PM' },
    { name: 'Jane Smith', isMe:false, message: "Absolutely! UI design involves creating the visual components of digital products, such as websites and mobile apps. This can include everything from layouts and typography to color schemes and iconography.", time: '12:31 PM' },
    { name: 'Me', isMe:true, message: "That sounds really interesting. What kind of skills do you need to be a successful UI designer?", time: '12:32 PM' },
    { name: 'Jane Smith', isMe:false, message: "Well, creativity and an eye for detail are definitely important, as is a good understanding of design principles and software tools like Adobe Photoshop and Sketch. It's also important to have good communication and collaboration skills, since you'll often be working closely with developers and other designers on a project.", time: '12:33 PM' },
    { name: 'Me', isMe:true, message: "Okay, that makes sense. What kind of education or training do you need to become a UI designer?", time: '12:34 PM' },
    { name: 'Jane Smith', isMe:false, message: "While it's possible to learn UI design on your own, many employers prefer to see a degree or certification in design, art, or a related field. There are also many online courses and tutorials available that can help you develop the necessary skills.", time: '12:35 PM' },
    { name: 'Me', isMe:true, message: "Thanks for the advice! I'm really excited to explore this career path further.", time: '12:36 PM' },
    { name: 'Jane Smith', isMe:false, message: "You're welcome! UI design is a great field with a lot of opportunities for growth and creativity. Good luck on your journey!", time: '12:37 PM' },
  ]);

  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setChatMessages([
      ...chatMessages,
      { name: 'Me', isMe: true, message: message, time: getTime() },
    ]);
    setMessage('');
  };

  const getTime = () => {
    const date = new Date();
    const hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    const minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
    return hours + ':' + minutes + (hours >= 12 ? ' PM' : ' AM');
  };

  return (
   <Theme>
     <Container>
      <Row>
        <Col>
          {chatMessages.map((chat, index) => (
               <Col md={{ span: 6, offset: chat.isMe ? 6 : 0 }}>
                <ChatBox key={index} isMe={chat.isMe}>
                <ChatHeader>{chat.name}, {chat.time}</ChatHeader>
                <ChatMessage>{chat.message}</ChatMessage>
                </ChatBox>
               </Col>
          ))}
          <Form onSubmit={handleSubmit} className="d-flex">
            <TextBox>
              <Form.Control
                type="text"
                placeholder="Type your message here"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </TextBox>
            <Send type="submit">
              Send
            </Send>
          </Form>
        </Col>
      </Row>
    </Container>
   </Theme>
  );
};

export default Chat;