import React, { useState, useContext, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';

const textStyle = {
  borderRadius: '3px'
};
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  formControl: {
    margin: theme.spacing(3)
  },
  group: {
    margin: theme.spacing(1, 0)
  },
  labelColor: {
    color: '#959494'
  }
}));

const ContactForm = () => {
  const contactContext = useContext(ContactContext);
  const classes = useStyles();
  const { addContact, updateContact, clearCurrent, current } = contactContext;

  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact({
        name: '',
        email: '',
        phone: '',
        type: 'personal'
      });
    }
  }, [contactContext, current]);

  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'personal'
  });

  const { name, email, phone, type } = contact;

  const onChange = e =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (current === null) {
      addContact(contact);
    } else {
      updateContact(contact);
    }
    clearAll();
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className={classes.labelColor}>
        {current ? 'Edit the selected contact' : 'Add a contact'}
      </h2>
      <input
        style={textStyle}
        type="text"
        placeholder="Name"
        name="name"
        value={name}
        onChange={onChange}
      />
      <br />
      <input
        style={textStyle}
        type="email"
        placeholder="Email"
        name="email"
        value={email}
        onChange={onChange}
      />
      <br />
      <input
        style={textStyle}
        type="text"
        placeholder="Phone"
        name="phone"
        value={phone}
        onChange={onChange}
      />
      <br />
      <span style={{ color: 'dark', fontSize: '13px', fontWeight: 'bold' }}>
        Contact type
      </span>
      <RadioGroup aria-label="Gender" name="gender1" className={classes.group}>
        <FormControlLabel
          value="personal"
          control={<Radio color="none" />}
          label="Personal"
          checked={type === 'personal'}
          onChange={onChange}
          type="radio"
          name="type"
        />
        <FormControlLabel
          value="professional"
          control={<Radio color="none" />}
          label="Professional"
          checked={type === 'professional'}
          onChange={onChange}
          type="radio"
          name="type"
        />
      </RadioGroup>

      <div>
        <br />
        <Button
          style={{ backgroundColor: '#1CB766', color: 'white' }}
          variant="contained"
          type="submit"
          value="Login"
          className="btn btn-primary btn-block"
        >
          {current ? 'Update' : 'Add'}
        </Button>
        <br />
        <br />
      </div>
      {current && (
        <div>
          <Button
            style={{ backgroundColor: 'grey', color: 'white' }}
            variant="contained"
            onClick={clearAll}
            className="btn btn-light btn-block"
          >
            Clear
          </Button>
        </div>
      )}
    </form>
  );
};

export default ContactForm;
