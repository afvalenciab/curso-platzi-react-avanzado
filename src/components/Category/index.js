import React from 'react';
import PropTypes from 'prop-types';
import { Anchor, Image } from './styles';

const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg';

export const Category = ({ cover, path, emoji }) => (
  <Anchor href={path}>
    <Image src={cover} alt="Cover" />
    {emoji}
  </Anchor>
);

Category.defaultProps = {
  cover: DEFAULT_IMAGE,
  emoji: '?',
};

Category.propTypes = {
  cover: PropTypes.string,
  path: PropTypes.string.isRequired,
  emoji: PropTypes.string,
};
