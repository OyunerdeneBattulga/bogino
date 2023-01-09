const express = require("express");
const router = express.Router();
const { getLink , 
        getLinks, 
        createLink, 
        deleteLink } = require('../Controller/linkController');

router

.post(   "/", createLink)
.get(    "/", getLinks)
.get(    "/:id", getLink)
.delete( "/:id", deleteLink)

module.exports = router;