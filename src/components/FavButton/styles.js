import styled from 'styled-components';

export const Button = styled.button`
  padding-top: 8px;
  font-size: 14px;
  display: flex;
  align-items: center;
  cursor: pointer;

  & svg {
    margin-right: 4px;
    transition: .1s;
  }

  & svg:active {
    transform: scale(.7)
  }
`;
