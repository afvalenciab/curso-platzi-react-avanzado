import React from 'react';

import { ListOfPhotoCardsWithQuery } from './container/ListOfPhotoCardsWithQuery';
import { PhotoCardWithQuery } from './container/PhotoCardWithQuery';

import { ListOfCategory } from './components/ListOfCategories';
import { Logo } from './components/Logo';

import { GlobalStyles } from './styles/GlobalStyles';

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search);
  const detailId = urlParams.get('detail');

  return (
    <>
      <GlobalStyles />
      <Logo />
      {detailId ? (
        <PhotoCardWithQuery id={detailId} />
      ) : (
        <>
          <ListOfCategory />
          <ListOfPhotoCardsWithQuery categoryId={2} />
        </>
      )}
    </>
  );
};
