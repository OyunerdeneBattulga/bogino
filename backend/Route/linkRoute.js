const express = require("express");
const router = express.Router();
const { getLink , 
        getLinks, 
        createLink, 
        deleteLink , 
        updateLink} = require('../Controller/linkController');

router

.post(   "/", createLink)
.get(    "/", getLinks)
.get(    "/:id", getLink)
.delete( "/:id", deleteLink)
.patch(  "/:id", updateLink)

module.exports = router;