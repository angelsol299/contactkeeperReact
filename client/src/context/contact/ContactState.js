import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './ContactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from '../types';

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Mario Dominguez',
        email: 'mario@dominguez.com',
        phone: '123-1233-2133',
        type: 'personal'
      },
      {
        id: 2,
        name: 'Luis Miguel',
        email: 'luis@miguel.com',
        phone: '323-2222-1111',
        type: 'personal'
      },
      {
        id: 3,
        name: 'Feliciano Feliz',
        email: 'feliciano@feliz.com',
        phone: '322-1234-777',
        type: 'personal'
      }
    ]
  };
};
