import React, { useState, useContext, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

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
      <h2 className="text-primary">{current ? 'Edit' : 'Add'}</h2>
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
      <h5>Contact Type</h5>
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
        <input
          type="submit"
          value={current ? 'Update' : 'Add'}
          className="btn btn-primary btn-block"
        />
      </div>
      {current && (
        <div>
          <button className="btn btn-light btn-block" onClick={clearAll}>
            Clear
          </button>
        </div>
      )}
    </form>
  );
};

export default ContactForm;
