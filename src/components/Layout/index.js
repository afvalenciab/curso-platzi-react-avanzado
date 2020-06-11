import React from 'react';
import { Helmet } from 'react-helmet';

export const Layout = ({ children, title, subtitle }) => (
  <>
    <Helmet>
      {title && <title>{title} | Petgram 🐶</title>}
      {subtitle && <meta name="description" content={subtitle} />}
    </Helmet>
    <div>
      {children}
    </div>
  </>
);
