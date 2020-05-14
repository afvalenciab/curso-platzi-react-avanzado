import React from 'react';
import PropTypes from 'prop-types';
import { IoMdHeartEmpty, IoMdHeart } from 'react-icons/io';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useNearScreen } from '../../hooks/useNearScreen';

import { Article, ImgWrapper, Img, Button } from './styles';

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png';

export const PhotoCard = ({ id, likes, src }) => {
  const [show, element] = useNearScreen();

  const key = `like-${id}`;
  const [liked, setLiked] = useLocalStorage(key, false);

  const Icon = liked ? IoMdHeart : IoMdHeartEmpty;

  return (
    <Article ref={element}>
      {show && (
        <>
          <a href={`/details/${id}`}>
            <ImgWrapper>
              <Img src={src} alt="Card" />
            </ImgWrapper>
          </a>

          <Button type="button" onClick={() => setLiked(!liked)}>
            <Icon size="32px" /> {likes} likes!
          </Button>
        </>
      )}
    </Article>
  );
};

PhotoCard.defaultProps = {
  likes: 0,
  src: DEFAULT_IMAGE,
};

PhotoCard.propTypes = {
  id: PropTypes.number.isRequired,
  likes: PropTypes.number,
  src: PropTypes.string,
};
