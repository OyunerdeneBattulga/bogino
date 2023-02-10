// eslint-disable-next-line no-unused-vars
const { request } = require('express');
const express = require('express');
const router = express.Router();
const {
    signup,
    login,
    getUser,
} = require('../Controller/usersController');

router
    .get('/:id', getUser)
    .post('/', signup)
    .get('/', login);

module.exports = router;
