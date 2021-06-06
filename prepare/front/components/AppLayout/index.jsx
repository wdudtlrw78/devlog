import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';

const AppLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      {/* <NavMenu /> */}
      {/* <Row>
        <leftColumn></leftColumn>
        <centerColumn>{children}</centerColumn>
        <rightColumn></rightColumn>
      </Row> */}
    </>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
