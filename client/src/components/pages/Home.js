import React, { useContext, useEffect } from 'react';
import Contacts from '../contacts/Contacts';
import ContactForm from '../contacts/ContactForm';
import ContactFilter from '../contacts/ContactFilter';
import AuthContext from '../../context/auth/authContext';
import ContactContext from '../../context/contact/contactContext';

const Home = () => {
  const authContext = useContext(AuthContext);
  const contactContext = useContext(ContactContext);

  const { contacts } = contactContext;

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="grid-2">
      <div>
        <ContactForm />
      </div>

      <div>
        {contacts && contacts.length !== 0 && (
          <span style={{ textAlign: 'center', fontWeight: 'bold' }}>
            You currently have {contacts && contacts.length} contact
            {contacts && contacts.length > 1 && 's'}
          </span>
        )}

        <ContactFilter />
        <Contacts />
      </div>
    </div>
  );
};

export default Home;
