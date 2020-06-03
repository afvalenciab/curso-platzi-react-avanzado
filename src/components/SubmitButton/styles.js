import styled from 'styled-components';

export const Button = styled.button`
  width: 100%;
  height: 40px;
  background: #2492f4;
  color: #fff;
  border-radius: 3px;
  font-size: 16px;
  margin: 10px 0;
  cursor: pointer;
  transition: .3s;

  &:active {
    transform: scale(.97);
  }

  &[disabled] {
    opacity: .3;
  }
`;
