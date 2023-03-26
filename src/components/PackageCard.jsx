import React from 'react';
import { Col, Button, Row } from 'react-bootstrap';

import styled from 'styled-components'
import Theme from '../Theme.js';

const Card = styled.div`
  background-color: ${props => props.theme.colors.pink};
  color: ${props => props.theme.colors.white};
  font-family: ${props => props.theme.fonts};
  padding: 20px;
  box-shadow: 16px -17px 0px rgb(108 119 159);
`;

const Title = styled.h5`
    font-size: 25px;
    font-weight: ${props => props.theme.fontWeights.black};
    font-family: ${props => props.theme.fonts};
    text-align: center;
`;

const Description = styled.ul`
    font-size: 20px;
    font-weight: ${props => props.theme.fontWeights.semiBold};
    font-family: ${props => props.theme.fonts};
    text-align: center;
    margin-bottom: 0;
    list-style-type:none;
`;

const HeadOver = styled(Button)`
  background-color: ${props => props.theme.colors.orange};
  color: ${props => props.theme.colors.black};
  font-family: ${props => props.theme.fonts};
  font-size: 15px;
  font-weight: ${props => props.theme.fontWeights.bold} !important;
  border: ${props => props.theme.colors.orange};
  padding: 10px 40px;

  &:hover {
    background-color: ${props => props.theme.colors.black};
    color: ${props => props.theme.colors.orange};
    border: ${props => props.theme.colors.black};
  }
`;


const RowCentered = styled(Row)`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const PackageCard = ({ title, description, route, button }) => {
  return (
    <Theme>
        <Col lg={4} md={12}
        className="mb-5">
            <Card className="card h-100">
                <RowCentered>
                    <Title>{title}</Title>
                    <Description>
                            {description.map((item, i) => (
                            <li key={i}>{item}</li>
                            ))}
                    </Description>
                    <div className="card-body d-flex justify-content-center align-items-center">
                        <HeadOver>{button}</HeadOver>
                    </div>
                </RowCentered>
            </Card>
        </Col>
    </Theme>
  );
};

export default PackageCard;
