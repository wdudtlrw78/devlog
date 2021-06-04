import React from 'react';
import PropTypes from 'prop-types';
import StatusBar from '../StatusBar';

const AppLayout = ({ children }) => {
  return (
    <>
      <StatusBar />
      {children}
    </>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
