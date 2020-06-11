import React from 'react';
import { Layout } from '../components/Layout';

import { FavsWithQuery } from '../container/GetFavorites';

const Favs = () => (
  <Layout title="Tu favoritos" subtitle="Aquí puedes encontrar tus favoritos">
    <FavsWithQuery />
  </Layout>
);

export default Favs;
