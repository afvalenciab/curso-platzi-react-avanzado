import React, { useContext } from 'react';
import { Router, Redirect } from '@reach/router';

import { Home } from './pages/Home';
import { Detail } from './pages/Detail';
import { Favs } from './pages/Favs';
import { User } from './pages/User';
import { NotRegisteredUser } from './pages/NotRegisteredUser';
import { NotFound } from './pages/NotFound';

import { Logo } from './components/Logo';
import { NavBar } from './components/NavBar';

import { Context } from './Context';

import { GlobalStyles } from './styles/GlobalStyles';

export const App = () => {
  const { isAuth } = useContext(Context);

  return (
    <>
      <GlobalStyles />
      <Logo />
      <Router>
        <Home path="/" />
        <Home path="/pet/:categoryId" />
        <Detail path="/detail/:detailId" />
        {!isAuth && <NotRegisteredUser path="/login" />}
        {!isAuth && <Redirect noThrow from="/favs" to="/login" />}
        {!isAuth && <Redirect noThrow from="/user" to="/login" />}
        {isAuth && <Redirect from="/login" to="/" />}
        <Favs path="/favs" />
        <User path="/user" />

        <NotFound default />
      </Router>
      <NavBar />
    </>
  );
};
