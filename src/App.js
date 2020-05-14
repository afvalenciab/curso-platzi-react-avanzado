import React from 'react';
import { ListOfCategory } from './components/ListOfCategories';
import { ListOfPhotoCards } from './components/ListOfPhotoCards';
import { GlobalStyles } from './styles/GlobalStyles';
import { Logo } from './components/Logo';

export const App = () => (
  <>
    <GlobalStyles />
    <Logo />
    <ListOfCategory />
    <ListOfPhotoCards />
  </>
);
