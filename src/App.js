import React, { useContext, Suspense } from 'react';
import { Router, Redirect } from '@reach/router';

import { Logo } from './components/Logo';
import { NavBar } from './components/NavBar';

import { Context } from './Context';

import { GlobalStyles } from './styles/GlobalStyles';

const Home = React.lazy(() => import('./pages/Home'));
const Detail = React.lazy(() => import('./pages/Detail'));
const NotRegisteredUser = React.lazy(() => import('./pages/NotRegisteredUser'));
const User = React.lazy(() => import('./pages/User'));
const Favs = React.lazy(() => import('./pages/Favs'));
const NotFound = React.lazy(() => import('./pages/NotFound'));


export const App = () => {
  const { isAuth } = useContext(Context);

  return (
    <Suspense fallback={<div />}>
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
    </Suspense>
  );
};
