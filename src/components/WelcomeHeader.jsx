import React from 'react';
import styled from 'styled-components';

import { ReactComponent as Logo } from '../assets/temp-logo.svg';

const ResizedLogo = styled(Logo)`
  width: 80px;
  height: 80px;
`;

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
    <ResizedLogo />
    <Welcome>Welcome to Communify</Welcome>
  </HeaderLayout>
);

export default WelcomeHeader;
