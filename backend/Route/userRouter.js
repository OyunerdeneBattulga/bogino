const express = require("express");
const router = express.Router();
const { getUser , 
        getUsers, 
        updateUser, 
        createUser} = require('../Controller/usersController');

router
.post(   "/", createUser)
.get(    "/", getUsers)
.get(    "/:id", getUser)
.put(    "/:id", updateUser)

module.exports = router;