import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ title, icon }) => {
  return <div />;
};

Navbar.propTypes = {
  titile: PropTypes.array.isRequired,
  icon: PropTypes.string
};

Navbar.defaultProps = {
  title: 'Contact Keeper App',
  icon: 'fas fa-id-card-alt'
};

export default Navbar;
