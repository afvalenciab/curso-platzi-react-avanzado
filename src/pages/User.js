import React, { useContext } from 'react';
import styled from 'styled-components';

import { GiMonkey } from 'react-icons/gi';

import { Context } from '../Context';

import { SubmitButton } from '../components/SubmitButton';

const Section = styled.section`
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: calc(100vh - 200px);
`;

export const User = () => {
  const { removeAuth } = useContext(Context);

  return (
    <Section>
      <h1>User</h1>
      <GiMonkey size="100px" />
      <SubmitButton type="button" onClick={removeAuth}>Cerrar sesión</SubmitButton>
    </Section>
  );
};
