import React from 'react';
import PropTypes from 'prop-types';
import { PhotoCard } from '../PhotoCard';

export const ListOfPhotoCards = ({ photos } = {}) => (
  <ul>
    {photos?.map((photo) => (
      <li key={photo.id}>
        <PhotoCard {...photo} />
      </li>
    ))}
  </ul>
);


ListOfPhotoCards.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.object).isRequired,
};
