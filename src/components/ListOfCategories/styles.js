import styled from 'styled-components';
import { reboundIn, reboundOut } from '../../styles/animation';

export const List = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  padding-bottom: 15px;
  overflow: scroll;
  width: 100%;

  &.fixed {
    ${reboundIn({ time: '.6s' })}
    position: fixed;
    top: -10px;
    left: 50%;
    transform: translateX(-50%) scale(.7);
    background: #fff;
    border-radius: 60px;
    box-shadow: 0 0 20px rgba(0,0,0,.5);
    z-index: 1;
    width: 400px;
    padding-top: 5px;
    padding-bottom: 0%;

    &.out {
      ${reboundOut({ time: '1s' })}
    }
  }
`;

export const ListItem = styled.li`
  padding: 0 8px;
`;

export const Section = styled.section`
  display: flex;
  padding: 0 10px;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 8px;
`;
