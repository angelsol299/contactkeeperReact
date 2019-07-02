const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

const User = require('../models/User');
const Contact = require('../models/Contact');

// @route GET api/contacts
// @desc Get all users contacts
// @access Private
router.get('/', auth, async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1
    });
    res.json(contacts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route POST api/contacts
// @desc Add new contact
// @access Private
router.post(
  '/',
  [
    auth,
    [
      check('name', 'Name is required')
        .not()
        .isEmpty()
    ]
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
  }
);

// @route PUT api/contacts
// @desc Update contacts
// @access Private
router.put('/:id', (req, res) => {
  res.send('Update contacts');
});

// @route DELETE api/contacts
// @desc Delete contacts
// @access Private
router.delete('/:id', (req, res) => {
  res.send('Delete contacts');
});

module.exports = router;
