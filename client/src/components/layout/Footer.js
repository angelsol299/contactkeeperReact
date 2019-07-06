import React, { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import ContactContext from '../../context/contact/contactContext';

const Navbar = ({ title, icon }) => {
  const authContext = useContext(AuthContext);
  const contactContext = useContext(ContactContext);

  const { isAuthenticated, logout, user } = authContext;
  const { clearContacts } = contactContext;

  const onLogout = () => {
    logout();
    clearContacts();
  };

  const guestLinks = (
    <Fragment>
      <li>All rights reserved</li>
      <li>
        <Link to="/about" style={{ color: 'white' }}>
          About
        </Link>
        <li>
          <Link to="/" style={{ color: 'white' }}>
            Home
          </Link>
        </li>
      </li>
    </Fragment>
  );

  return (
    <div
      className="footer bg-primary"
      style={{
        backgroundColor: '#1DD1B3',
        borderBottomColor: '#1DD1B3',
        position: 'relative',
        bottom: 0,
        width: '100%',
        height: '70px'
      }}
    >
      <h1 style={{ marginTop: '5px' }}>{title}</h1>
      <ul style={{ textAlign: 'center' }}>
        {/* <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li> */}
        {guestLinks}
      </ul>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string
};

export default Navbar;
