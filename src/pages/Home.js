import React from 'react';

import { ListOfPhotoCardsWithQuery } from '../container/ListOfPhotoCardsWithQuery';
import { ListOfCategory } from '../components/ListOfCategories';

export const Home = ({ categoryId }) => {
  return (
    <>
      <ListOfCategory />
      <ListOfPhotoCardsWithQuery categoryId={categoryId} />
    </>
  );
};
