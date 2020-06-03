import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';

import { useNearScreen } from '../../hooks/useNearScreen';

import { FavButton } from '../FavButton';
import { ToggleLikeMutation } from '../../container/ToggleLikeMutation';

import { Article, ImgWrapper, Img } from './styles';

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png';

export const PhotoCard = ({ id, liked, likes, src }) => {
  const [show, element] = useNearScreen();

  return (
    <Article ref={element}>
      {show && (
        <>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} alt="Card" />
            </ImgWrapper>
          </Link>

          <ToggleLikeMutation>
            {
              (toggleLike) => {
                const handleClick = () => {
                  toggleLike({ variables: { input: { id } } });
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
  liked: PropTypes.bool,
  src: PropTypes.string,
};
