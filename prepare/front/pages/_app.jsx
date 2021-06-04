import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Global, css } from '@emotion/react';

library.add(fab, faBars);

export const globalStyles = (
  <Global
    styles={css`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: Noto Sans KR, sans-serif;
          line-height: 1.6;
          font-size: 14px;
          overflow: auto;
        }
        
        * {
          box-sizing: border-box;
        }
        
        a {
          color: #E96900;;
          text-decoration: none;
        }
        
        .menu-button {
          color: #E96900;
        }
        
        img {
          max-width: 100%;
          display: block;
        `}
  />
);

const MolyMath = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>MolyMath</title>
      </Head>
      {globalStyles}
      <Component {...pageProps} />
    </>
  );
};

MolyMath.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default MolyMath;