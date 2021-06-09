import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { Global, css } from '@emotion/react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faBars);

export const globalStyles = (
  <Global
    styles={css`
      html,
      body {
        padding: 0;
        margin: 0;
        height: 100%;
        font-size: 14px;
        font-family: Noto Sans KR, Lato, sans-serif;
        letter-spacing: -1px;
        overflow: auto;
      }

      * {
        box-sizing: border-box;
      }

      li {
        list-style: none;
      }

      a {
        color: #e96900;
        text-decoration: none;
      }

      .menu-button {
        color: #e96900;
      }
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
