import React, { useState } from "react";
import { Container, Row, Col, Dropdown, Card, Button } from "react-bootstrap";
import { Header, PageTitle} from '../components';
import { Link } from "react-router-dom";

import styled from 'styled-components'
import Theme from '../Theme.js';

const profiles = [];
for (let i = 1; i <= 6; i++) {
  profiles.push(require(`../assets/profile${i}.png`));
}

const professionals = [
  {
    id: 1,
    name: "John Doe",
    profession: "Engineer",
    imageUrl: profiles[0],
  },
  {
    id: 2,
    name: "Jane Smith",
    profession: "Designer",
    imageUrl: profiles[1],
  },
  {
    id: 3,
    name: "Bob Johnson",
    profession: "Developer",
    imageUrl: profiles[2],
  },
  {
    id: 4,
    name: "Alice Lee",
    profession: "Manager",
    imageUrl: profiles[3],
  },
  {
    id: 5,
    name: "Tom Smith",
    profession: "Engineer",
    imageUrl: profiles[4],
  },
  {
    id: 6,
    name: "Mary Brown",
    profession: "Designer",
    imageUrl: profiles[5],
  },
  {
    id: 7,
    name: "Sam Williams",
    profession: "Developer",
    imageUrl: profiles[1],
  },
  {
    id: 8,
    name: "Emily Davis",
    profession: "Manager",
    imageUrl: profiles[0],
  },
];

const Image = styled(Card.Img)`
  height: 300px;
  padding: 30px;
`;

const View = styled(Button)`
  background-color: ${props => props.theme.colors.orange};
  color: ${props => props.theme.colors.black};
  font-family: ${props => props.theme.fonts[0]};
  font-size: 15px;
  font-weight: ${props => props.theme.fontWeights.bold} !important;
  border: ${props => props.theme.colors.orange};
  padding: 10px 40px;

  &:hover, &:active {
    background-color: ${props => props.theme.colors.black} !important;
    color: ${props => props.theme.colors.orange} !important;
    border: ${props => props.theme.colors.black} !important;
  }
`;

const Filter = styled(Dropdown.Toggle)`
  background-color: ${props => props.theme.colors.rhythm};
  font-family: ${props => props.theme.fonts};
  font-size: 20px;
  font-weight: ${props => props.theme.fontWeights.bold} !important;
  border: ${props => props.theme.colors.rhythm};

  &:hover, &:active{
    background-color: ${props => props.theme.colors.pink} !important;
    border: ${props => props.theme.colors.pink} !important;
  }
`;

const DropDownItem = styled(Dropdown.Item)`
  color: ${props => props.theme.colors.black} !important;
  font-family: ${props => props.theme.fonts};
  font-size: 16px;
  font-weight: ${props => props.theme.fontWeights.bold} !important;
  text-decoration: none;
  border: none;
  display: block;
  width: 100%;
  white-space: nowrap;
  padding: 4px 16px;

  &:hover, &:active, &:visited {
    background-color: ${props => props.theme.colors.pink};
    color: ${props => props.theme.colors.white} !important;
  }
`;

const ProfessionalPage = () => {
  const [selectedProfession, setSelectedProfession] = useState("");

  const handleProfessionSelect = (eventKey) => {
    setSelectedProfession(eventKey);
  };

  const filteredProfessionals = selectedProfession
    ? professionals.filter((professional) => {
        return professional.profession === selectedProfession;
      })
    : professionals;

  return (
    <Theme>
        <div className="Page">
        <Header />
        <PageTitle title="Professionals" />
        <Container>
      <Row>
        <Col>
          <Dropdown onSelect={handleProfessionSelect}>
            <Filter variant="primary" id="profession-filter">
              {selectedProfession ? selectedProfession : "Filter by Profession"}
            </Filter>

            <Dropdown.Menu>
              <DropDownItem eventKey="">All</DropDownItem>
              <DropDownItem eventKey="Engineer">Engineer</DropDownItem>
              <DropDownItem eventKey="Designer">Designer</DropDownItem>
              <DropDownItem eventKey="Developer">Developer</DropDownItem>
              <DropDownItem eventKey="Manager">Manager</DropDownItem>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
      <Row>
        {filteredProfessionals.map((professional) => (
          <Col key={professional.id} xs={6} lg={4} xl={3} className="my-3">
            <Card>
              <Image variant="top" src={professional.imageUrl} />
              <Card.Body>
                <Card.Title>{professional.name}</Card.Title>
                <Card.Text>{professional.profession}</Card.Text>
                <Link to='/individualProfile'>
                <View>View Details</View>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    </div>
    </Theme>
  );
};

export default ProfessionalPage;
