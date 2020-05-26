import React from 'react';
import PropTypes from 'prop-types';

import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

import { ListOfPhotoCards } from '../components/ListOfPhotoCards';

const GET_PHOTOS = gql`
  query getPhotos($categoryId: ID) {
    photos(categoryId: $categoryId) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`;

const renderProp = ({ loading, error, data }) => {
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  const { photos = [] } = data;
  return <ListOfPhotoCards loading={loading} photos={photos} />;
};

export const ListOfPhotoCardsWithQuery = ({ categoryId }) => (
  <Query query={GET_PHOTOS} variables={{ categoryId }}>
    { renderProp }
  </Query>
);

ListOfPhotoCardsWithQuery.propTypes = {
  categoryId: PropTypes.string,
};
