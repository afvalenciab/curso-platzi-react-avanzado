import React from 'react';
import { Layout } from '../components/Layout';

import { ListOfPhotoCardsWithQuery } from '../container/ListOfPhotoCardsWithQuery';
import { ListOfCategory } from '../components/ListOfCategories';

const HomePage = ({ categoryId }) => (
  <Layout title="Tu app de fotos de mascotas" subtitle="Con Petgram puedes encotrar fotos de animales domésticos muy bonitos">
    <ListOfCategory />
    <ListOfPhotoCardsWithQuery categoryId={categoryId} />
  </Layout>
);

const Home = React.memo(HomePage,
  (prevProps, props) => prevProps.categoryId === props.categoryId);

export default Home;
