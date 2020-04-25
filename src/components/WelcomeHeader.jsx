import React from 'react';
import styled from 'styled-components';

import { ReactComponent as Logo } from '../assets/temp-logo.svg';

const ResizedLogo = styled(Logo)`
  width: 8rem;
  height: 8rem;
`;

const HeaderLayout = styled.header`
  margin: 2rem 0;
  text-align: center;
  box-shadow: none;
`;

const Welcome = styled.h1`
  margin: 1.5rem 0;
  font-weight: normal;
  font-size: 2.25rem;
`;

const WelcomeHeader = () => (
  <HeaderLayout>
    <ResizedLogo />
    <Welcome>Welcome to Communify</Welcome>
  </HeaderLayout>
);

export default WelcomeHeader;
