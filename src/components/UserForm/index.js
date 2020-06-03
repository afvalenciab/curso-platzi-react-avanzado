import React from 'react';

import { MdPets as PetLogo } from 'react-icons/md';

import { SubmitButton } from '../SubmitButton';

import { useInputValue } from '../../hooks/useInputValue';

import { Section, Form, Input, Button, BtnLink, Span } from './styles';

export const UserForm = ({
  onSubmit,
  title,
  labelOtherAction,
  linkOtherAction,
  changeMethod,
  error,
  disabled,
}) => {
  const email = useInputValue('');
  const password = useInputValue('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ email: email.value, password: password.value });
  };

  return (
    <Section>
      <PetLogo size="80px" />
      <h2>{title}</h2>
      <Form disabled={disabled} onSubmit={handleSubmit}>
        <Input disabled={disabled} placeholder="Email" {...email} />
        <Input disabled={disabled} type="password" placeholder="Password" {...password} />
        <SubmitButton disabled={disabled} type="submit">{title}</SubmitButton>
      </Form>
      {error && <Span>{error}</Span>}
      <p>{labelOtherAction} <BtnLink onClick={changeMethod}>{linkOtherAction}</BtnLink></p>
    </Section>
  );
};
