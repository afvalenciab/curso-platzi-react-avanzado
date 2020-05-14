import { keyframes, css } from 'styled-components';

const fadeInKeyframes = keyframes`
  from {
    filter: blur(5px);
    opacity: 0;
  }

  to {
    filter: blur(0);
    opacity: 1;
  }
`;

const reboundInKeyframes = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-50%) scale(.7) translateY(-100px);
  }

  60% {
    opacity: .8;
    transform: translateX(-50%) scale(.7) translateY(20px);
  }

  75% {
    opacity: 1;
    transform: translateX(-50%) scale(.7) translateY(-20px);
  }

  90% {
    opacity: 1;
    transform: translateX(-50%) scale(.7) translateY(-10px);
  }
`;

const reboundOutKeyframes = keyframes`
  0% {
    transform: translateX(-50%) scale(.7) translateY(-10px);
  }

  100% {
    transform: translateX(-50%) scale(.7) translateY(-1000px);
  }
`;

export const fadeIn = ({ time = '1s', type = 'ease' } = {}) => css`animation: ${fadeInKeyframes} ${time} ${type};`;

export const reboundIn = ({ time = '1s', type = 'ease' } = {}) => css`animation: ${reboundInKeyframes} ${time} ${type};`;

export const reboundOut = ({ time = '1s', type = 'ease' } = {}) => css`animation: ${reboundOutKeyframes} ${time} ${type} forwards;`;
