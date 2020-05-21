import React from 'react';
import PropTypes from 'prop-types';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

import { PhotoCard } from '../components/PhotoCard';

const GET_SINGLE_PHOTO = gql`
  query getSinglePhoto($id:ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`;

export const PhotoCardWithQuery = ({ id }) => (
  <Query query={GET_SINGLE_PHOTO} variables={{ id }}>
    {
      ({ loading, data }) => {
        if (loading) return 'Loading...';

        const { photo = {} } = data;
        return <PhotoCard {...photo} />;
      }
    }
  </Query>
);

PhotoCardWithQuery.propTypes = {
  id: PropTypes.string.isRequired,
};
