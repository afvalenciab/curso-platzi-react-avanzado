import React from 'react';
import { Button } from './styles';

export const SubmitButton = ({ children, disabled, onClick, others }) => (
  <Button disabled={disabled} onClick={onClick} {...others}>{children}</Button>
);
