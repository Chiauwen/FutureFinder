import { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import styled from 'styled-components';

// Styles for chat messages
const ChatBox = styled.div`
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  margin-bottom: 20px;
  max-width: 50%;
  position: relative;
`;

const ChatHeader = styled.div`
  background-color: #f7f7f7;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: #333;
  font-size: 14px;
  font-weight: bold;
  padding: 10px;
`;

const ChatMessage = styled.p`
  margin: 10px;
  overflow-wrap: break-word;
`;

const Chat = () => {
  const [chatMessages, setChatMessages] = useState([
    { name: 'User 1', isMe:false, message: 'Hello', time: '12:30 PM' },
    { name: 'Me', isMe:true, message: 'Hi there!', time: '12:31 PM' },
    { name: 'User 1', isMe:false, message: 'How are you?', time: '12:32 PM' },
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
    <Container>
      <Row>
        <Col>
          {chatMessages.map((chat, index) => (
            <ChatBox key={index}>
              <ChatHeader>{chat.name}, {chat.time}</ChatHeader>
              <ChatMessage>{chat.message}</ChatMessage>
              <ChatMessage>{chat.isMe}</ChatMessage>
            </ChatBox>
          ))}
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Type your message here"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Send
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Chat;