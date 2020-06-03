import styled from 'styled-components';

export const Section = styled.section`
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: calc(100vh - 200px);
`;


export const Input = styled.input`
  width: 100%;
  border-radius: 3px;
  border: 2px solid lightgrey;
  background: #f5f5f5;
  height: 40px;
  padding: 8px;
  font-size: 14px;
  outline-color: black;
  outline-width: 1px;
  margin-bottom: 20px;

  &[disabled] {
    opacity: .3;
  }
`;

export const Form = styled.form`
  width: 100%;
`;

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

export const BtnLink = styled.button`
  text-decoration: none;
  color: #2492f4;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
`;

export const Span = styled.span`
  color: red;
  font-size: 14px;
`;
