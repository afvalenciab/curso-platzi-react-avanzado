import styled from 'styled-components';
import { fadeIn } from '../../styles/animation';

export const Article = styled.article`
  width: 100%;
  padding: 5px;
  margin-top: 10px;
  min-height: 275px;
`;

export const ImgWrapper = styled.div`
  display: block;
  height: 0;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  padding: 56.25% 0 0 0;
  position: relative;
  box-shadow: 0 10px 14px rgba(0, 0, 0, .3);
`;

export const Img = styled.img`
  ${fadeIn({ time: '2s' })}
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
