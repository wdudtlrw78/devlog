import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faBars);

const MolyMath = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>MolyMath</title>
      </Head>

      <Component {...pageProps} />
    </>
  );
};

MolyMath.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default MolyMath;
