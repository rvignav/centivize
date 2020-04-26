import React from 'react';
import styled from 'styled-components';

import logo from '../../assets/centivizeit2.png';

const HeaderLayout = styled.header`
  margin: 20px 0;
  text-align: center;
  box-shadow: none;
`;

const Welcome = styled.h1`
  margin: 15px 0;
  font-weight: normal;
  font-size: 22.5px;
`;

const WelcomeHeader = () => (
  <HeaderLayout>
    <img src={logo} width="200"/>
    <Welcome>Welcome to Centivize It</Welcome>
  </HeaderLayout>
);

export default WelcomeHeader;
