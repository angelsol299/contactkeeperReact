import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ContactContext from '../../context/contact/contactContext';
import Button from '@material-ui/core/Button';

const ContactItem = ({ contact }) => {
  const contactContext = useContext(ContactContext);

  const { deleteContact, setCurrent, clearCurrent } = contactContext;

  const { _id, name, email, phone, type } = contact;

  const onDelete = () => {
    deleteContact(_id);
    clearCurrent();
  };

  return (
    <div className="card bg-light" style={{ borderRadius: '5px' }}>
      <h3 className="text-left" style={{ color: 'darkGrey' }}>
        {name}{' '}
        <span
          style={
            type === 'professional'
              ? { float: 'right', backgroundColor: '#505B55' }
              : { float: 'right', backgroundColor: '#B3C3BA' }
          }
          className={
            'badge ' +
            (type === 'professional' ? 'badge-success' : 'badge-primary')
          }
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </h3>
      <ul className="list">
        {email && (
          <li
            style={{
              fontFamily: "'Roboto'",
              fontSize: '15px'
            }}
          >
            <i className="far fa-envelope" style={{ color: '#549373' }} />{' '}
            {email}
          </li>
        )}
        {phone && (
          <li
            style={{
              fontFamily: "'Roboto'",
              fontSize: '15px'
            }}
          >
            <i className="fas fa-mobile-alt" style={{ color: '#549373' }} />{' '}
            {phone}
          </li>
        )}
      </ul>
      <p>
        <Button
          style={{ backgroundColor: 'black', color: 'white', fontSize: '7px' }}
          variant="outlined"
          onClick={() => {
            setCurrent(contact);
          }}
        >
          Edit
        </Button>
        &nbsp;
        <Button
          style={{ backgroundColor: 'red', color: 'white', fontSize: '7px' }}
          variant="outlined"
          onClick={onDelete}
        >
          Delete
        </Button>
      </p>
    </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired
};

export default ContactItem;
