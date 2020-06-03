import React from 'react';
import { GiSpiderWeb } from 'react-icons/gi';
import styled from 'styled-components';

const Section = styled.section`
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: calc(100vh - 200px);
`;

export const NotFound = () => (
  <Section>
    <h1>¡Upps, esta página no existe!</h1>
    <GiSpiderWeb size="100" />
  </Section>
);
