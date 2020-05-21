import React from 'react';
import PropTypes from 'prop-types';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useNearScreen } from '../../hooks/useNearScreen';

import { FavButton } from '../FavButton';
import { ToggleLikeMutation } from '../../container/ToggleLikeMutation';

import { Article, ImgWrapper, Img } from './styles';

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png';

export const PhotoCard = ({ id, likes, src }) => {
  const [show, element] = useNearScreen();

  const key = `like-${id}`;
  const [liked, setLiked] = useLocalStorage(key, false);

  return (
    <Article ref={element}>
      {show && (
        <>
          <a href={`/?detail=${id}`}>
            <ImgWrapper>
              <Img src={src} alt="Card" />
            </ImgWrapper>
          </a>

          <ToggleLikeMutation>
            {
              (toggleLike) => {
                const handleClick = () => {
                  if (!liked) toggleLike({ variables: { input: { id } } });

                  setLiked(!liked);
                };

                return <FavButton liked={liked} likes={likes} onClick={handleClick} />;
              }
            }
          </ToggleLikeMutation>
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
  id: PropTypes.string.isRequired,
  likes: PropTypes.number,
  src: PropTypes.string,
};
